/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MainNavigation from './src/component/MainNavigation';
// import {Provider} from 'react-redux';
// import {store} from './src/Test/store';

/////////////////////////
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src_2/screens/HomeScreen';
import MovieScreen from './src_2/screens/MovieScreen';
import SearchBar from './src_2/screens/SearchBar';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
const App = () => {
  return (
    //------movie app---------------
    //<MainNavigation />

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="movie"
          component={MovieScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="search"
          component={SearchBar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
