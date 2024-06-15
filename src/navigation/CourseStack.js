import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerCustom from '~/components/DrawerCustom';
import Courses from '~/screens/Courses';
import DetailCourse from '~/screens/DetailCourse';
import DetailLesson from '~/screens/DetailLesson';
import PaymentResult from '~/screens/PaymentResult';

const Drawer = createDrawerNavigator();

function CourseStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{
        title: 'Trở về',
        swipeEnabled: false,
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Course"
        component={Courses}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="DetailCourse"
        component={DetailCourse}
        options={{swipeEnabled: true, headerShown: false}}
      />
      <Drawer.Screen
        name="DetailLesson"
        component={DetailLesson}
        options={{swipeEnabled: true, headerShown: false}}
      />
      <Drawer.Screen
        name="PaymentResult"
        component={PaymentResult}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default CourseStack;
