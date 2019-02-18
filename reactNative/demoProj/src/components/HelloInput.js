import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class HelloInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    render() {
        return (
            <View style={styles.helloWorld}>
                <Text>{this.props.name}</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type here to translate!"
                    onChangeText={(inputValue) => this.setState({inputValue})}
                />
                <Text>{this.state.inputValue}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    helloWorld: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "powderblue"
    }
})

export default HelloInput