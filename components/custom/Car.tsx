import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LatestCars } from '@/lib/data/data'
import CarImage from './CarImage'

const Car = ({item} : {item : LatestCars}) => {
  return (
    <View className='w-1/2 pr-2 pt-3'>
        <Text numberOfLines={1}>{item.brand} - {item.buildYear}</Text>

      {item.images.length > 0 && (
          <CarImage image={item.images[0]} />
      )}
    </View>
  )
}

export default Car

const styles = StyleSheet.create({})