import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPW from '~/screens/ForgotPW';
import LoginScreen from '~/screens/LoginScreen';
import RegisterScreen from '~/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function AuthenticationStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPW"
        component={ForgotPW}
        options={{headerShown: true, title: 'Hủy'}}
      />
    </Stack.Navigator>
  );
}

export default AuthenticationStack;
