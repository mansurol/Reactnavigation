import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Routes from '../Utility/Routes'

export default function HomeScreen({navigation}) {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(Routes.NOTIFICATION)}> 
      <Text style={{alignSelf:"center",padding:30}}>HomeScreen</Text>
    </TouchableOpacity>
  )
}