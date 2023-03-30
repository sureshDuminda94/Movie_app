import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../Screens/HomeScreen';
import MovieScreen from '../Screens/MovieScreen';
import { View } from 'react-native/Libraries/Components/View/View';

const Stack = createStackNavigator();

const MainNavigation = ({navigatio}) => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator  >
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View>
         <TouchableOpacity 
            activeOpacity={0.5} 
            onPress={() =>data.goBack('home') }>
            <Icon name="chevron-left" size={35} color={COLORS.BLACK}/>
            </TouchableOpacity>

    </View>
  );
};

export default MainNavigation;
