import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class Settings extends Component {
    render() {
        return (
            <View>
                <Button title='Goto Dashboard' onPress={()=>this.props.navigation.navigate('Details')}/>
            </View>
        );
    }
}

export default Settings;
