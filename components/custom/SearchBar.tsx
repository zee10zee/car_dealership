import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

const SearchBar = () => {
  return (
             <View className="search-container flex-row justify-around items-center border-2 rounded-md">
                <TextInput className='w-[90%]' placeholder='search a car by name' />
                <FontAwesome6 name = {'magnifying-glass'} size= {18} />
             </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})