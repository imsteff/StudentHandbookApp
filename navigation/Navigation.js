import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import VisionMissionScreen from '../screens/VisionMissionScreen';
import StoryScreen from '../screens/StoryScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: 'maroon', 
            },
            headerTintColor: 'white', 
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Vision, Mission and Goal"
          component={VisionMissionScreen}
          options={{
            headerStyle: {
              backgroundColor: 'maroon', 
            },
            headerTintColor: 'white', 
            headerTitleAlign: 'center', 
          }}
        />
        <Stack.Screen
          name="The MSEUF Story"
          component={StoryScreen}
          options={{
            headerStyle: {
              backgroundColor: 'maroon', 
            },
            headerTintColor: 'white', 
            headerTitleAlign: 'center', 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
