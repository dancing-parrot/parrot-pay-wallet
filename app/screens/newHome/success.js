import React, {Component} from 'react'
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import Expo from 'expo'

import Colors from './../../config/colors'

export default class Success extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: Expo.Constants.statusBarHeight}}>
                <View style={styles.balance}>
                    <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
                        Success
                    </Text>
                </View>
                <View style={styles.transaction}>
                    {/*<Image
                        source={require('./../../../assets/icons/flash.png')}
                        resizeMode="contain"
                        style={styles.image}/>*/}
                    <TouchableHighlight style={styles.submit}>
                        <Text style={{color: 'white', fontSize: 20}}>
                            Cool
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    balance: {
        flex: 2,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    transaction: {
        flex: 5,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    submit: {
        backgroundColor: Colors.lightblue,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        maxWidth: 250,
        height: 150,
    },
})