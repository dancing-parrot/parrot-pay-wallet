import React, {Component} from 'react'
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import Expo from 'expo'
import Header from './../../components/headerParrot'
import ResetNavigation from './../../util/resetNavigation'

import Colors from './../../config/colors'

export default class Success extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor:'white'}}>
                <Header
                    navigation={this.props.navigation}
                    homeLeft
                />
                <View style={styles.balance}>
                    <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
                        Success
                    </Text>
                </View>
                <View style={styles.transaction}>
                    <Image
                        source={require('./../../../assets/icons/parrot.png')}
                        resizeMode="contain"
                        style={styles.image}/>
                </View>
                <TouchableHighlight style={styles.submit} onPress={()=>ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home")}>
                    <Text style={{color: 'white', fontSize: 20}}>
                        Cool
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    balance: {
        flex: 1,
        backgroundColor: Colors.orange,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    transaction: {
        flex: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    submit: {
        backgroundColor: Colors.lightblue,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        marginHorizontal:20
    },
    image: {
        maxWidth: 250,
        height: 150,
    },
})