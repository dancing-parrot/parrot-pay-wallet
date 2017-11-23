import React, {Component} from 'react'
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native'
import Expo from 'expo'

import Colors from './../../config/colors'

export default class Send extends Component {
    render() {
        return (
            <View style={{flex:1,paddingTop: Expo.Constants.statusBarHeight}}>
                <View style={styles.balance}>
                    <Text style={{color: 'white', fontSize: 25,textAlign:'center'}}>
                        You are about to pay R{this.state.reference} to eCommerce demo
                    </Text>
                </View>
                <View style={styles.transaction}>
                    <TouchableHighlight style={styles.submit} onPress={()=>this.props.navigation.navigate("Success")}>
                        <Text style={{color: 'white', fontSize: 20}}>
                            Confirm
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
        paddingHorizontal:20
    },
    transaction: {
        flex: 5,
        backgroundColor: 'white',
        justifyContent:'flex-end',
        paddingBottom:10,
        paddingHorizontal:20
    },
    submit: {
        backgroundColor: Colors.lightblue,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
})