import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, StyleSheet, View,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

class Routes extends Component {

    render(){
        return (
            <View style={styles.container}>
                 {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <NavigationContainer>
                    <Stack.Navigator>

                        <Stack.Screen name="List" 
                        component={HomeScreen}
                        options={{
                            title: 'List of Characters',
                            headerStyle: {
                                backgroundColor: '#f4511e',
                              },
                            headerTitleAlign:'center',
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                fontWeight: 'bold',
                              },
                          }}
                        />
                        <Stack.Screen name = "Details"
                        component={DetailScreen}
                        options={{
                          title: 'Character Details',
                          headerStyle: {
                              backgroundColor: '#f4511e',
                            },
                          headerTitleAlign:'center',
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            },
                        }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

  export default Routes;