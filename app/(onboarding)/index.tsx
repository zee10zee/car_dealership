import { Link, router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "@/assets/images/icon.png"

import {FontAwesome6} from '@expo/vector-icons'
  import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  Easing,
  withSequence,
  cancelAnimation
} from 'react-native-reanimated';

import { useEffect } from 'react';


 const carPosition = useSharedValue(-50); // Start from left
  const carRotation = useSharedValue(0);

export default function Index() {

//  function AnimatedOnboarding() {
//   // Create animated values
 
  
  useEffect(() => {
    // Continuous horizontal movement
    carPosition.value = withRepeat(
      withTiming(400, { 
        duration: 3000, 
        easing: Easing.linear 
      }),
      -1, // Infinite repeat
      true // Reverse direction (go back and forth)
    );
    
    // Optional: Smooth bouncing effect
    carRotation.value = withRepeat(
      withSequence(
        withTiming(-5, { duration: 500 }),
        withTiming(5, { duration: 500 })
      ),
      -1,
      true
    );
    
    // Cleanup animation on unmount
    return () => {
      cancelAnimation(carPosition);
      cancelAnimation(carRotation);
    };
  }, [])
//  }


  return (
    <SafeAreaView style = {{flex : 1}}>
      <View style = {style.container}>
         <View className="logo-container">
           <Image source = {logo} style = {style.logo} />
         </View>

         <Animated.View className="car-animation" style={[style.carAnimation, carAnimatedStyle]}>
          <FontAwesome6 name = {'car-side'} size = {50} />
         </Animated.View>

         <View className="title" style = {style.title}>
          <Text style = {{textAlign : 'center', fontSize : 18, fontFamily : 'montserrat', fontWeight : 'bold'}}>Brows 100,000 cars from your trusted dealership in your area
            
          </Text>

         </View>
          <Pressable onPress={() => router.push('/home')} style = {{ marginTop : 20}}>
            <Text style = {{backgroundColor : 'lightgreen', padding : 6, borderRadius : 10,}}>Get Started !</Text>
          </Pressable>
      </View>
    </SafeAreaView>
  );
}


 // Animated styles
  const carAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: carPosition.value },
      { rotate: `${carRotation.value}deg` }
    ]
  }));

const style = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center', 
    alignItems : 'center', 
    marginTop : '-90'
  },

  logo : {width : 200, height : 200}, 
  carAnimation : {position : 'relative', left : '-50'},
  title : {marginTop : '80'}
})

