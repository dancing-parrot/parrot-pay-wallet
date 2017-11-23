import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableHighlight, Alert} from 'react-native'
import Expo, {Permissions} from 'expo'
import Colors from './../../config/colors'
import Header from './../../components/header'
import TransactionService from './../../services/transactionService'
import ResetNavigation from './../../util/resetNavigation'

export default class QRcodeScanner extends Component {
    static navigationOptions = {
        title: 'QR code scanner',
    }

    constructor(props) {
        super(props)
        this.state = {
            camera: true,
            reference: "",
        }
    }

    async componentWillMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({hasCameraPermission: status === 'granted'})
    }

    transferConfirmed = async () => {
        let responseJson = await TransactionService.sendMoneyWithData(this.state.reference.amount, "helghardt+parrot@rehive.com", this.state.reference.code)
        if (responseJson.status === "success") {
            ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Success")
        }
        else {
            Alert.alert('Error',
                responseJson.message,
                [{text: 'OK'}])
        }
    }

    render() {
        const {hasCameraPermission} = this.state
        if (hasCameraPermission === null) {
            return <Text>No access to camera</Text>
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>
        } else {
            if (this.state.camera === true) {
                return (
                    <View style={{flex: 1}}>
                        <Header
                            navigation={this.props.navigation}
                            back
                            title="QR code scanner"
                        />
                        <Expo.BarCodeScanner
                            onBarCodeRead={this._handleBarCodeRead}
                            style={{flex: 1}}
                        />
                    </View>
                )
            }
            else {
                return (
                    <View style={{flex: 1, paddingTop: Expo.Constants.statusBarHeight}}>
                        <View style={styles.balance}>
                            <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
                                You are about to pay R to eCommerce demo
                            </Text>
                        </View>
                        <View style={styles.transaction}>
                            <Text>
                                {this.state.reference}
                            </Text>
                            <TouchableHighlight style={styles.submit}
                                                onPress={this.transferConfirmed}>
                                <Text style={{color: 'white', fontSize: 20}}>
                                    Confirm
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                )
            }
        }
    }

    _handleBarCodeRead = (data) => {
        this.setState({camera: false, reference: JSON.stringify(data.data)})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    footer: {
        height: 65,
        flexDirection: 'row',
        width: "100%",
        alignSelf: 'stretch',
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 60,
        width: "100%",
        padding: 10,
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 1,
    },
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
