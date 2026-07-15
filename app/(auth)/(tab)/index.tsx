import "@/global.css"

import { Link } from "expo-router";
import {Text } from "react-native";
import { styled } from "nativewind"
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context"

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className= "flex-1 bg-background p-5">

      <Text className="text-5xl font-sans-extrabold">Home</Text>


      <Link href="/Onboarding" className="mt-4 rounded bg-primary text-white p-4">go to Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">go to sign-in</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">go to sign-up</Link>
      <Link href="/Subscriptions/sportify">sportify  subscriptions</Link>
      <Link href={{
        pathname : "/Subscriptions/[id]",
        params : {id : "claude"},
      }}>claude max subscriptions</Link>
    </SafeAreaView>
    
  );
}