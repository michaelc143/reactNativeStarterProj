import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';

const screens = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
                    title: 'Home'
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
                    title: 'Profile'
        }
    }
}

const homeStack = createNativeStackNavigator(screens);

createNavigationContainerRef();