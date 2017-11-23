import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Colors from './../config/colors'
import Icon from "react-native-vector-icons/Ionicons";

export default class TextInputCustomize extends Component {
    constructor() {
        super();
        this.state = {
            textColor: Colors.black,
            borderColor: Colors.lightgray
        }
    }

    render() {
        return (
            <View style={[styles.inputContainer]}>
                <TextInput
                    {...this.props}
                    style={[styles.input, {fontSize: this.props.fontSize ? this.props.fontSize : 22}]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 26,
        paddingLeft: 0,
        color: Colors.black,
        fontWeight: 'normal',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        paddingBottom: 15,
    },
    inputContainer: {
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        paddingVertical: 10,
    },
})
