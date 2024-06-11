import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Courses from '~/screens/Courses';
import DetailCourse from '~/screens/DetailCourse';
import PaymentResult from '~/screens/PaymentResult';

const Stack = createNativeStackNavigator();

function CourseStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Trở về',
      }}>
      <Stack.Screen
        name="Course"
        component={Courses}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="DetailCourse" component={DetailCourse} />
      <Stack.Screen name="PaymentResult" component={PaymentResult} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default CourseStack;
