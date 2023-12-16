import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import AddScreen from '../screens/AddScreen';
import UpdateScreen from '../screens/UpdateScreen';
import HomeScreen from '../screens/HomeScreen';
import {useColorScheme} from 'react-native';

const Stack = createStackNavigator()

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main"
                          component={MainScreen}
                          options={{title:'Загрузка'}}/>
            <Stack.Screen name="Home"
                          component={HomeScreen}
                           />
            <Stack.Screen name="Add"
                          component={AddScreen}
                          options={{title:'Добавление'}}/>
            <Stack.Screen name="Update"
                          component={UpdateScreen}
                          options={{title:'Обновление'}}/>
        </Stack.Navigator>
    </NavigationContainer>
}