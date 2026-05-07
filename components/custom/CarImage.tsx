import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { latestCars, LatestCars } from '@/lib/data/data'

const CarImage = ({image} : any) => {
    // return console.log('id', id, ' the images ', images)

  return (
    <View className='pt-2'>
      <Image source={image} className='w-full h-48' resizeMode='cover' />
    </View>
  )
}

export default CarImage

const styles = StyleSheet.create({})