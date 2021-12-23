import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MarketScreen from './screens/MarketScreen';
import TradeScreen from './screens/TradeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

function SettingsScreen({ navigation }) {
  return (
    <View style={{flex:1, backgroundColor: '#181b3e', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 22, color: 'white'}}>Settings Screen</Text>
    </View>
  );
}
const MarketStack = createNativeStackNavigator();
function MarketStackScreen() {
  return (
    <MarketStack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <MarketStack.Screen name="MarketScreen" component={MarketScreen} />
        <MarketStack.Screen name="Trade" component={TradeScreen} />
    </MarketStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <Tab.Screen 
            name="MarketStack" 
            component={MarketStackScreen}
            options={{
              tabBarLabel: 'Market',
              tabBarIcon: () => (
                <Entypo name="shop" size={18} />)
              }} />
          <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: () => (
              <AntDesign name="setting" size={18} />)
            }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}