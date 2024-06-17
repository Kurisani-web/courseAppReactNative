import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import DrawerCustom from '~/components/DrawerCustom';
import HeaderDrawer from '~/components/HeaderDrawer';
import VectorIcon from '~/components/VectorIcon';
import DetailCourse from '~/screens/DetailCourse';
import DetailLesson from '~/screens/DetailLesson';
import DetailRecruitment from '~/screens/DetailRecruitment';
import HomeScreen from '~/screens/HomeScreen';
import PaymentResult from '~/screens/PaymentResult';

const Drawer = createDrawerNavigator();

function HomeStack() {
  const navigation = useNavigation();
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
        name="DetailRecruitment"
        component={DetailRecruitment}
        options={{
          header: () => <HeaderDrawer />,
        }}
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
