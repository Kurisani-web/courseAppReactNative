import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '~/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
