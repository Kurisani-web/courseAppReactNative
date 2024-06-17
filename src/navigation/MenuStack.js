import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerCustom from '~/components/DrawerCustom';
import HeaderDrawer from '~/components/HeaderDrawer';
import DetailCourse from '~/screens/DetailCourse';
import DetailLesson from '~/screens/DetailLesson';
import DetailRecruitment from '~/screens/DetailRecruitment';
import EditProfile from '~/screens/EditProfile';
import MenuScreen from '~/screens/MenuScreen';
import MyCourse from '~/screens/MyCourse';
import MyRecruitment from '~/screens/MyRecruitment';
import PaymentResult from '~/screens/PaymentResult';

const Drawer = createDrawerNavigator();

function MenuStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{
        title: 'Trở về',
        swipeEnabled: false,
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="MyCourse"
        component={MyCourse}
        options={{
          header: () => <HeaderDrawer />,
        }}
      />
      <Drawer.Screen
        name="MyRecruitment"
        component={MyRecruitment}
        options={{
          header: () => <HeaderDrawer />,
        }}
      />
      <Drawer.Screen
        name="DetailRecruitment"
        component={DetailRecruitment}
        options={{
          header: () => <HeaderDrawer />,
        }}
      />
      <Drawer.Screen
        name="DetailCourse"
        component={DetailCourse}
        options={{
          swipeEnabled: true,
          header: () => <HeaderDrawer swipeEnabled={true} />,
        }}
      />
      <Drawer.Screen
        name="DetailLesson"
        component={DetailLesson}
        options={{
          swipeEnabled: true,
          header: () => <HeaderDrawer swipeEnabled={true} />,
        }}
      />
      <Drawer.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          header: () => <HeaderDrawer />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default MenuStack;
