import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
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

const Home = () => {

  return (
    <SafeAreaView className='bg-orange-300 flex-1'>
       <StatusBar style="light" backgroundColor='#000' />

       <View className='flex-1 z-10 p-4 mt-6 items-center justify-center'>
          <SearchBar />
           <CarouselProvider>
             <Carousel  />
             <DotsIndicator />
           </CarouselProvider>
       </View>
    </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({})