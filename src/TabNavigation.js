import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './screens/Feed/Feed';
import { blue, greyText } from './styles/global.colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <Icon name="home" size={size} color={color} />;
                    } else if (route.name === 'Profile') {
                        return (
                            <Icon name="user" size={size} color={color} />
                        );
                    } else if (route.name === 'Search') {
                        return (
                            <Icon name="search" size={size} color={color} />
                        );
                    } else if (route.name === 'Add') {
                        return (
                            <Icon name="wpexplorer" size={size} color={color} />
                        );
                    }
                },
                tabBarActiveTintColor: blue,
                tabBarInactiveTintColor: greyText,
                tabBarStyle: { backgroundColor: '#0D0D0D' },
                tabBarShowLabel: false
            })}
        >
            <Tab.Screen name="Home" component={Feed} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={Feed} options={{ headerShown: false }}/>
            <Tab.Screen name="Add" component={Feed} options={{ headerShown: false }}/>
            <Tab.Screen name="Profile" component={Feed} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}