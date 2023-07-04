import React from 'react';
import {ImageBackground, 
        StyleSheet,
        View,
        Text,
        Button,
        Dimensions } from 'react-native';
import { Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const HomeScreen = () => {
    return (
        <View style={styles}>
            <StatusBar />
            <Text style={styles.titleText}>Welcome to my new react application home screen! 
            This is the starting pape for when you open the app!
            This can either be used as a login page or you can just jump
            straight into the application!</Text>
            <Button onPress={createAlert} title='Click me!'/>
        </View>
    );
};


const createAlert = () =>
    Alert.alert('This is the alert title', 'This is the alert message', 
    [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {   text: 'OK',
            onPress: () => console.log('OK Pressed')
        },
]);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// This is the css for the homescreen component
const styles = StyleSheet.create({
    height: windowHeight,
    width: windowWidth,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    titleText: {
        fontSize: 18,
        marginTop: '-50%',
        marginBottom: '20%',
        marginLeft: '10%',
        marginRight: '10%',
    },
});

export default HomeScreen;