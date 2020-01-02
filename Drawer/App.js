import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WelcomeScreen from './components/WelcomeScreen';
import DashboardScreen from './components/DashboardScreen';
import Feed from './components/Feed';
import Settings from './components/Settings';
import Profile from './components/Profile';
import TabNavigationView from 'react-navigation-tabs/src/navigators/createBottomTabNavigator';
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */



class DetailsScreen extends Component {
    render() {
        return (
            <View>
                <Text>Details</Text>
            </View>
        );
    }
}

const ProfileStack = createStackNavigator({
   Profile : {
       screen : Profile,
       navigationOptions : ({navigation}) => {
           return {
               headerTitle:  'Profile',
               headerLeft : ()=> (<Button onPress={()=>navigation.toggleDrawer()} title='-->'/>)
           }
       }
   },

    Details : DashboardScreen
});

const FeedStack = createStackNavigator({
    Feed : {
        screen : Feed,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle:  'Feed',
                headerLeft : ()=> (<Button onPress={()=>navigation.toggleDrawer()} title='-->'/>)
            }
        }
    }
});

const Settingstack = createStackNavigator({
    Settings : {
        screen : Settings,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle:  'Settings',
                headerLeft : ()=> (<Button onPress={()=>navigation.toggleDrawer()} title='-->'/>)
            }
        }
    }
});

const TabNavigator = createBottomTabNavigator(
    {
        ProfileStack,
        FeedStack,
        Settingstack,
}, {
        navigationOptions : ({navigation}) => {
            const {routeName} = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName,
            }
        }
    }
);

const StackNavigator = createStackNavigator({
   Tab : TabNavigator,
},{
    defaultNavigationOptions : ({navigation}) => ({
           headerLeft : (<Button onPress={()=>navigation.toggleDrawer()} title='-->'/>),
        header : null,
        headerStyle: {backgroundColor : 'red'},

    })
},
);

const DrawerNavigator = createDrawerNavigator({
    Home : {screen : WelcomeScreen},
    Dashboard : {screen : StackNavigator},
});

const AppSwitchNavigator = createSwitchNavigator({
    Welcome : {screen : WelcomeScreen},
    Dashboard : {screen : DrawerNavigator}
},

    );

const AppNavigator = createAppContainer(AppSwitchNavigator);

class App extends Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}

export default App;
