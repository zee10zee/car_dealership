import { Stack } from "expo-router";
import '../global.css'

/**
 * Root layout component that provides a stack navigator containing the onboarding route with headers hidden.
 *
 * @returns A React element rendering a Stack navigator with a single "(onboarding)" screen and `headerShown` set to `false`.
 */
export default function RootLayout() {
  return (
    
  <Stack screenOptions={{headerShown : false}}>
    <Stack.Screen name="(onboarding)" />
  </Stack>
  
  )
}
