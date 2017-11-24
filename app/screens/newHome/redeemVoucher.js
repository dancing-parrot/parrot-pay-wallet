import React,{Component} from 'react'

import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Image,
    Alert
} from 'react-native'
import UserInfoService from './../../services/userInfoService'
import Auth from './../../util/auth'
import Colors from './../../config/colors'
import Header from './../../components/header'
import ResetNavigation from './../../util/resetNavigation'

export default class RedeemVoucher extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Header
                    navigation={this.props.navigation}
                    drawer
                />
                <View style={styles.balance}>
                    <View >
                        <Text style={{fontSize: 25, color: Colors.black,textAlign:'center'}}>
                            Redeem Voucher
                        </Text>
                        {/*<Text style={{paddingLeft: 5, fontSize: 40, color: 'white'}}>
                         {this.state.balance.toFixed(4).replace(/0{0,2}$/, "")}
                         </Text>*/}
                    </View>
                    <View
                        style={{
                            alignSelf:'stretch',
                            justifyContent: 'space-around',
                            flex:1,
                            alignItems: 'flex-end',
                            paddingHorizontal:40,
                            flexDirection: 'row'
                        }}>
                        <View style={{borderColor:'black',borderWidth:2}}/>
                        <View style={{borderColor:'black',borderWidth:2}}/>
                        <View style={{borderColor:'black',borderWidth:2}}/>
                        <View style={{borderColor:'black',borderWidth:2}}/>
                        <View style={{borderColor:'black',borderWidth:2}}/>
                    </View>
                    <Image
                        source={require('./../../../assets/icons/flash.png')}
                        resizeMode="contain"
                        style={styles.image}/>
                </View>
                <TouchableHighlight style={styles.submit} onPress={
                    ()=>{
                        Alert.alert('Success',
                            "Your balance has been loaded with R100.00 credits.",
                            [{text: 'OK', onPress: () => console.log("Successful")}])

                    }}>
                    <Text style={{color: 'black', fontSize: 20}}>
                        Redeem
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.darkblue,
    },
    balance: {
        flex: 1,
        backgroundColor: Colors.darkblue,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    transaction: {
        flex: 5,
        backgroundColor: Colors.lightgray,
    },
    buttonbar: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        paddingHorizontal: 25,
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: 'transparent',
    },
    floatView: {
        position: 'absolute',
        width: 100,
        height: 100,
        top: 200,
        left: 40,
        backgroundColor: 'green',
    },
    input:{
        width: 30,
        height: 26,
        justifyContent: 'center',
        alignItems:'center',
        fontSize: 26
    },
    image: {
        maxWidth: 150,
        height: 100,
        alignSelf:'center',
        flex:2
    },
    submit: {
        backgroundColor: Colors.violet,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        marginHorizontal:20
    },
})