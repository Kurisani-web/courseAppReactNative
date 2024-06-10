import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorIcon from '~/components/VectorIcon';

import HomeScreen from '~/screens/HomeScreen';
import MenuStack from './MenuStack';

const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({color, size}) => (
            <VectorIcon.EntypoVectorIcon
              color={color}
              size={20}
              name={'home'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ListRecruitment"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Tuyển dụng',
          tabBarIcon: ({color, size}) => (
            <VectorIcon.EntypoVectorIcon
              color={color}
              size={20}
              name={'newsletter'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MenuStack"
        component={MenuStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color, size}) => (
            <VectorIcon.EntypoVectorIcon
              color={color}
              size={20}
              name={'menu'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainStack;
