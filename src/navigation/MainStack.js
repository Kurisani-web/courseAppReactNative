import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorIcon from '~/components/VectorIcon';

import MenuStack from './MenuStack';
import Recruitment from '~/screens/Recruitment';
import Courses from '~/screens/Courses';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

function MainStack({routeName}) {
  const show =
    routeName === 'Home' ||
    routeName === 'Recruitment' ||
    routeName === 'Courses' ||
    routeName === 'MenuStack';

    return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarStyle: {display: show ? 'flex' : 'none'},
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
        name="Recruitment"
        component={Recruitment}
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
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: 'Khóa học',
          tabBarIcon: ({color, size}) => (
            <VectorIcon.EntypoVectorIcon
              color={color}
              size={20}
              name={'shopping-cart'}
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
