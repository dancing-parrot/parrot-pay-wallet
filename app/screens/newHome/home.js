import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    AsyncStorage,
    TouchableHighlight,
    Text,
    Image,
    KeyboardAvoidingView,
    TextInput,
    TouchableWithoutFeedback,
    Button
} from 'react-native'
import moment from 'moment'
import PopupDialog from 'react-native-popup-dialog'
import UserInfoService from './../../services/userInfoService'
import Auth from './../../util/auth'
import Colors from './../../config/colors'
import Header from './../../components/header'

export default class Home extends Component {
    static navigationOptions = {
        label: 'Home',
    }

    constructor(props) {
        super(props)
        this.state = {
            balance: 0,
            showTransaction: false,
            symbol: '',
            dataToShow: {
                currency: {},
            },
            reference: '',
            digit1:'',
            digit2:'',
            digit3:'',
            digit4:'',
            digit5:'',
            digit:''
        }
    }

    async componentWillMount() {
        try {
            const token = await AsyncStorage.getItem('token')
            if (token === null) {
                this.logout()
            }
            return token
        }
        catch (error) {
        }
    }

    componentDidMount() {
        this.getBalanceInfo()
        this.getUserInfo()
    }

    setBalance = (balance, divisibility) => {
        for (let i = 0; i < divisibility; i++) {
            balance = balance / 10
        }

        return balance
    }

    getUserInfo = async () => {
        let responseJson = await UserInfoService.getUserDetails()
        if (responseJson.status === "success") {
            AsyncStorage.removeItem('user')
            AsyncStorage.setItem('user', JSON.stringify(responseJson.data))
            const token = await AsyncStorage.getItem('token')
            if (token === null) {
                await this.logout()
            }
        }
        else {
            this.logout()
        }
    }

    getBalanceInfo = async () => {
        let responseJson = await UserInfoService.getActiveAccount()
        if (responseJson.status === "success") {
            const account = responseJson.data.results[0].currencies[0]
            AsyncStorage.setItem('currency', JSON.stringify(account.currency))
            this.setState({
                symbol: account.currency.symbol,
                reference: responseJson.data.results[0].reference
            })
            this.setState({balance: this.setBalance(account.available_balance, account.currency.divisibility)})
        }
        else {
            this.logout()
        }
    }

    logout = () => {
        Auth.logout(this.props.navigation)
    }

    showDialog = (item) => {
        this.setState({dataToShow: item});
        this.popupDialog.show()
    }

    getAmount = (amount = 0, divisibility) => {
        for (let i = 0; i < divisibility; i++) {
            amount = amount / 10
        }

        return amount.toFixed(8).replace(/\.?0+$/, "")
    }

    render() {
        /*let swipeBtns = [{
         text: 'Show',
         backgroundColor: Colors.lightgray,
         underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
         onPress: () => this.props.navigation.navigate(
         'AccountCurrencies',
         {reference: this.state.reference}
         )
         }];*/
        return (
            <View style={styles.container}>
                <Header
                    navigation={this.props.navigation}
                    drawer
                    right
                />
                <View style={styles.balance}>
                    <View >
                        <Text style={{fontSize: 25, color: Colors.black,textAlign:'center'}}>
                            Your balance is
                        </Text>

                        <Text style={{fontSize: 25, color: Colors.black,textAlign:'center'}}>
                            R 50.00
                        </Text>
                        {/*<Text style={{paddingLeft: 5, fontSize: 40, color: 'white'}}>
                            {this.state.balance.toFixed(4).replace(/0{0,2}$/, "")}
                        </Text>*/}
                    </View>
                    <KeyboardAvoidingView
                        style={{
                            alignSelf: 'stretch',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flex: 1,
                            paddingHorizontal:40,
                            flexDirection: 'row'
                        }}
                        behavior={'padding'}>
                        <TextInput maxLength={1}
                                   onChangeText={(digit)=>this.setState({digit1:digit})}
                                   style={styles.input}/>
                        <TextInput maxLength={1}
                                   onChangeText={(digit)=>this.setState({digit2:digit})}
                                   style={styles.input}/>
                        <TextInput maxLength={1}
                                   onChangeText={(digit)=>this.setState({digit3:digit})}
                                   style={styles.input}/>
                        <TextInput maxLength={1}
                                   onChangeText={(digit)=>this.setState({digit4:digit})}
                                   style={styles.input}/>
                        <TextInput maxLength={1}
                                   onChangeText={(digit)=>this.setState({digit5:digit})}
                                   style={styles.input}/>
                    </KeyboardAvoidingView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
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
    submit: {
        backgroundColor: Colors.lightblue,
        height: 50,
        borderRadius: 25,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        width: 30,
        height: 26,
        justifyContent: 'center',
        alignItems:'center',
        fontSize: 26
    }
})

