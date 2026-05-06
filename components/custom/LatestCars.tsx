import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { LatestCars } from '@/lib/data/data';
import { useCarousel } from '@/context/ScrollIindexContext';

const Carousel = () => {
const {cars, currentIndex, scrollToIndex , flatListRef, setCurrentIndex} = useCarousel()

 const { width } = Dimensions.get("window"); // Get screen width
const scrollInterVal = useRef<NodeJS.Timeout | null>(null)

 const startAutoScroll = ()=>{
   if(scrollInterVal.current) clearInterval(scrollInterVal.current);
    
  // auto start interval
  scrollInterVal.current = setInterval(()=>{
      setCurrentIndex((prevIndex) =>{
        if(prevIndex < cars.length - 1){
        flatListRef.current?.scrollToIndex({
        index : prevIndex + 1,
        animated : true
      })
      return prevIndex + 1
      }else{
     //  start over from the beginning
      flatListRef.current?.scrollToIndex({
               index : 0,
              animated : false
            })
            return 0
        }
      })
  }, 3000)
}

// stop autoscroll
 const stopAutoScroll = ()=>{
  if(scrollInterVal.current) {
     clearInterval(scrollInterVal.current)
     scrollInterVal.current = null
  }
 }
    

 useEffect(()=>{
  startAutoScroll()

  return ()=>{
    stopAutoScroll()
  }
 },[])

  return (
    <View className='flex-1 mt-10 gap-3'>

      <FlatList ref = {flatListRef} 
        data={cars}
        keyExtractor ={(car)=>car.id}
        pagingEnabled
        decelerationRate="fast"  // ← Add this for smoother paging
        snapToInterval={width}   // ← CRITICAL: Force snap interval
        snapToAlignment="start"  // ← CRITICAL: Snap to start of each item
        showsHorizontalScrollIndicator = {false}
        renderItem={({item})=> (
           <View className="image py-3" style = {{width : width}}>
              <Image className='w-full h-60 rounded-[10]' 
                 source ={typeof item === 'string' ?  {uri : item} : item.images[0]}
                 resizeMode='cover' />
           </View>
        )}
        horizontal
         >

      </FlatList>

      
    </View>
  );
};

export default Carousel

const styles = StyleSheet.create({})