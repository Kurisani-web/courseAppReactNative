import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorIcon from '~/components/VectorIcon';

import MenuStack from './MenuStack';
import HomeStack from './HomeStack';
import RecruitmentStack from './RecruitmentStack';
import CourseStack from './CourseStack';

const Tab = createBottomTabNavigator();

function MainStack({routeName}) {
  const show =
    routeName === 'Home' ||
    routeName === 'Recruitment' ||
    routeName === 'Course' ||
    routeName === 'Menu';

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
        name="RecruitmentStack"
        component={RecruitmentStack}
        options={{
          tabBarLabel: 'Tuyển dụng',
          tabBarStyle: {display: show ? 'flex' : 'none'},
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
        name="CourseStack"
        component={CourseStack}
        options={{
          tabBarLabel: 'Khóa học',
          tabBarStyle: {display: show ? 'flex' : 'none'},
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
          tabBarStyle: {display: show ? 'flex' : 'none'},
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
