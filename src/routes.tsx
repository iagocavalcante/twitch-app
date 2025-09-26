import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';
import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          paddingTop: 8,
          paddingBottom: 8
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 4
        },
        tabBarIconStyle: {
          flex: 0,
          width: 24,
          height: 24,
          marginBottom: 2
        },
        tabBarLabelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 2
        },
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.purple
      }}
    >
      <Screen 
        name="Following" 
        component={Following} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="heart"
              size={24}
              color={focused ? colors.purple : colors.black}
            />
          )
        }} 
      />
      <Screen 
        name="Discover" 
        component={ComingSoon} 
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              size={24}
              color={focused ? colors.purple : colors.black}
            />
          )
        }} 
      />
      <Screen 
        name="Browse" 
        component={View} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="browsers"
              size={24}
              color={focused ? colors.purple : colors.black}
            />
          )
        }} 
      />
      <Screen 
        name="Esports" 
        component={View} 
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="trophy-outline"
              size={24}
              color={focused ? colors.purple : colors.black}
            />
          )
        }} 
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;