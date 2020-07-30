import { View, Text } from 'react-native';
import *as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./Atom/Home";
import { List } from "./Atom/List";

const Tab = createBottomTabNavigator();

export default class RootView extends React.Component {
    render() {
        return (
           <View>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="List" component={List} />
            </Tab.Navigator>
            </View>
        )
    }
}