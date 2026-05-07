import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Input } from '@/components/ui/input'
import { FontAwesome6 } from '@expo/vector-icons'
import { latestCars } from '@/lib/data/data'
import LatestCar from '@/components/custom/LatestCars'
import SearchBar from '@/components/custom/SearchBar'
import EmptyLatestCars from '@/components/custom/EmptyLatestCars'
import Carousel from '@/components/custom/LatestCars'
import DotsIndicator from '@/components/custom/DotsIndicator'
import { CarouselProvider } from '@/context/ScrollIindexContext'
import Cars from '@/components/custom/Cars'

const Home = () => {

  return (
    <SafeAreaView className='bg-orange-300 flex-1'>
       <StatusBar style="light" backgroundColor='#000' />

       <ScrollView className='flex-1 z-10' 
          contentContainerStyle = {{justifyContent : 'center', alignItems : 'center'}}>
          <SearchBar />
           
           <View className="coursel h-96 w-[98%]">
            <CarouselProvider>
             <Carousel  />
             <DotsIndicator />
           </CarouselProvider>
           </View>


           <View className="cars flex-1 w-full">
            <Cars />
           </View>

          

       </ScrollView>
    </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({})