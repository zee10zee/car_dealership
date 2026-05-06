import { FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { latestCars } from '@/lib/data/data';

import { createContext, useContext } from 'react';

interface CarouselContextType {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  scrollToIndex: (index: number) => void;
  flatListRef: React.RefObject<FlatList>;
  scrollInterVal : number;
  cars : [];
}

const CarourselContext = createContext<CarouselContextType | undefined>(undefined)

export const CarouselProvider = ({children} : {children : React.ReactNode})=>{
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollInterVal = useRef<NodeJS.Timeout | null>(null)
  const flatListRef = useRef<FlatList>(null)
  const cars = latestCars


    // Scroll to specific index
  const scrollToIndex = (index: number) => {
    if (index < 0) index = cars.length - 1;
    if (index >= cars.length) index = 0;
    
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
    setCurrentIndex(index);
  };

  return (
    <CarourselContext.Provider 
     value={{currentIndex,setCurrentIndex, scrollToIndex, scrollInterVal,flatListRef, cars}}>
     {children}
    </CarourselContext.Provider>
  )
}

export  const useCarousel = () =>{
 const context = useContext(CarourselContext)

 if(!context) {
    throw new Error('this pageis not covered by the provider')
 }

 return context
}



