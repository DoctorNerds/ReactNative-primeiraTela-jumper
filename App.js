
import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import Jogo from './src/telas/Jogo';
import mock from './src/mocks/jogo';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada]=useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,  
  });

  if (!fonteCarregada){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Jogo {...mock}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

