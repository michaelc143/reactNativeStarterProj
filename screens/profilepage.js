import React from 'react';
import {StyleSheet,
    View,
    Text,
    Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const profileScreen = (props) => {
    return (
        <View style={styles}>
            <StatusBar style="auto" />
                <Text style={styles.text}>Profile Screen</Text>
        </View>
    );
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    height: windowHeight,
    width: windowWidth,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    text: {
        fontSize: 18,
        marginTop: '-50%',
        marginBottom: '20%',
        marginLeft: '10%',
        marginRight: '10%',
    },
});

export default profileScreen;