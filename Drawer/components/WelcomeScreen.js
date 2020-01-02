import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class WelcomeScreen extends Component {
    render() {
        return (
            <View  style={{alignSelf : 'center',justifyContent : 'center'}}>
                <Button title='Login' onPress={()=> this.props.navigation.navigate('Dashboard')}/>
                <Button title='Signup' onPress={()=> this.props.navigation.navigate('Dashboard')}/>
            </View>
        );
    }
}

export default WelcomeScreen;
