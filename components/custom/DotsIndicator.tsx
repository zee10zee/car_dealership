import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { latestCars } from '@/lib/data/data'
import { useCarousel } from '@/context/ScrollIindexContext'


const DotsIndicator = ({}) => {
const {currentIndex, setCurrentIndex,scrollInterVal, flatListRef, scrollToIndex, cars} = useCarousel()

  return (
    <View>
      {/* Dots Indicator */}
      <View className="flex-row justify-center items-center pb-10 ">
        {cars.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => scrollToIndex(index)}>
            <View
              className="mx-1 rounded-full"
              style={{
                width: currentIndex === index ? 8 : 6,
                height: currentIndex === index ? 8 : 6,
                backgroundColor: currentIndex === index ? '#000' : 'rgba(255,255,255,0.5)',
                marginHorizontal: 4,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default DotsIndicator

const styles = StyleSheet.create({})