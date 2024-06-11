import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailRecruitment from '~/screens/DetailRecruitment';
import PaymentResult from '~/screens/PaymentResult';
import Recruitment from '~/screens/Recruitment';

const Stack = createNativeStackNavigator();

function RecruitmentStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: 'Trở về',
      }}>
      <Stack.Screen
        name="Recruitment"
        component={Recruitment}
        options={{headerShown: false}}
      />
      <Stack.Screen name="DetailRecruitment" component={DetailRecruitment} />
      <Stack.Screen name="PaymentResult" component={PaymentResult} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default RecruitmentStack;
