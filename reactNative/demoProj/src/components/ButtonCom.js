import React, { Component } from 'react';
import { Button, Alert } from 'react-native';

class ButtonCom extends Component {
    render() {
        return (
            <Button 
                onPress={() => {
                    Alert.alert("你点击了按钮！");
                }}
                title="点我！"
            />
        )
    }
}

export default ButtonCom