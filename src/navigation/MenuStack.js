import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailCourse from '~/screens/DetailCourse';
import DetailRecruitment from '~/screens/DetailRecruitment';
import EditProfile from '~/screens/EditProfile';
import MenuScreen from '~/screens/MenuScreen';
import MyCourse from '~/screens/MyCourse';
import MyRecruitment from '~/screens/MyRecruitment';
import PaymentResult from '~/screens/PaymentResult';

const Stack = createNativeStackNavigator();

function MenuStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Trở về',
      }}>
      <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
      <Stack.Screen name="MyCourse" component={MyCourse} />
      <Stack.Screen name="MyRecruitment" component={MyRecruitment} />
      <Stack.Screen name="DetailRecruitment" component={DetailRecruitment} />
      <Stack.Screen name="DetailCourse" component={DetailCourse} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="PaymentResult" component={PaymentResult} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default MenuStack;
