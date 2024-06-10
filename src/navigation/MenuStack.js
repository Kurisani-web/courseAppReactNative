import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuScreen from '~/screens/MenuScreen';

const Stack = createNativeStackNavigator();

function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}

export default MenuStack;
