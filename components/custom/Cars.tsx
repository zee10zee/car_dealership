import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { latestCars } from '@/lib/data/data'
import Car from './Car'

const Cars = () => {
  return (
    <View className=' w-full'>
    
      <FlatList
       data = {latestCars}
       keyExtractor={(item : any)=> item.id}
       ListHeaderComponent={()=>(
         <Text>All Cars !</Text>
       )}
       numColumns={2}
        columnWrapperStyle = {{ display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}

       renderItem={({item})=>(
       <Car item = {item} />
       )}
      >

      </FlatList>
    </View>
  )
}

export default Cars

const styles = StyleSheet.create({})