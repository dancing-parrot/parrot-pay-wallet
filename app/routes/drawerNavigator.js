import React from 'react'
import {ScrollView, View, StyleSheet} from 'react-native'
import {DrawerNavigator, DrawerItems} from 'react-navigation'
import Home from './../screens/home/home'
import NewHome from './../screens/newHome/home'
import Deposit from './../screens/deposit/deposit'
import Settings from './../screens/settings/settings'
import Withdraw from './../screens/withdraw/withdraw'
import About from './../screens/about/about'
import Accounts from './../screens/accounts/accounts'
import Receive from './../screens/receive/receive'
import Logout from './../screens/auth/logout'
import DrawerHeader from './../components/drawerHeader'
import Colors from './../config/colors'

const RouteConfigs = {
    Home: {
        screen: NewHome,
    },
    Transactions: {
        screen: Home,
    },
    Deposit: {
        screen: Deposit,
    },
    Settings: {
        screen: Settings,
    },
    About: {
        screen: About,
    },
    Logout: {
        screen: Logout,
    },
}

export default DrawerNavigator(RouteConfigs, {
    drawerWidth: 300,
    contentComponent: (props) => (
        <View style={styles.container}>
            <DrawerHeader navigation={props.navigation}/>
            <ScrollView>
                <DrawerItems
                    {...props}
                    activeTintColor="#6EBDF7"
                    activeBackgroundColor="#485159"
                    inactiveTintColor="white"
                    inactiveBackgroundColor="transparent"
                    labelStyle={{margin: 15, alignItems: 'center', fontSize: 16, fontWeight: 'normal'}}
                />
            </ScrollView>
        </View>
    ),
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.drawerColor,
    },
})
