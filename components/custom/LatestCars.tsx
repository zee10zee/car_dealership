import { Dimensions, FlatList, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SearchBar } from 'react-native-screens';
import { LatestCars } from '@/lib/data/data';


const Carousel = ({ cars }: { cars: LatestCars[] }) => {

 const { width } = Dimensions.get("window"); // Get screen width
const [currentIndex, setCurrentIndex] = useState(0)
const scrollInterVal = useRef<NodeJS.Timeout | null>(null)
const flastListRef = useRef<FlatList>(null)

 const startAutoScroll = ()=>{
   if(scrollInterVal.current) clearInterval(scrollInterVal.current);
    
  // auto start interval
  scrollInterVal.current = setInterval(()=>{

    if(currentIndex < cars.length - 1){
      flastListRef.current?.scrollToIndex({
        index : currentIndex + 1,
        animated : true
      })
      setCurrentIndex(currentIndex + 1)       
   }else{
     //  start over from the beginning
      flastListRef.current?.scrollToIndex({
        index : 0,
        animated : true
      })
      setCurrentIndex(0)  
   }
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
    <View className=' mt-10 gap-3'>

      <FlatList ref = {flastListRef} 
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