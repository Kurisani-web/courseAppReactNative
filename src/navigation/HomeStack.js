import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailCourse from '~/screens/DetailCourse';
import HomeScreen from '~/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="DetailCourse" component={DetailCourse}/>
    </Stack.Navigator>
  );
}

export default HomeStack;
