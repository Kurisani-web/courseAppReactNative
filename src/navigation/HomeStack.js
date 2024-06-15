import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerCustom from '~/components/DrawerCustom';
import DetailCourse from '~/screens/DetailCourse';
import DetailLesson from '~/screens/DetailLesson';
import HomeScreen from '~/screens/HomeScreen';
import PaymentResult from '~/screens/PaymentResult';

const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{
        title: 'Trở về',
        swipeEnabled: false,
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
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

export default HomeStack;
