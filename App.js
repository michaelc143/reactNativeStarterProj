import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/homepage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <HomeScreen />
  );
}