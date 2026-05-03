import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
      <Text>Home page </Text>
      {/* //expo does not see the (auth) folder as it uses file routing */}
      <Link href="/signup" >Go to signup </Link> 
    </ScrollView >
    </SafeAreaView>
  );
}
