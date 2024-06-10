import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import AuthenticationStack from './AuthenticationStack';
import MainStack from './MainStack';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {dataUser} from '~/features/userReducer';
import {useState} from 'react';

const ref = createNavigationContainerRef();

function Navigation() {
  const {token} = useSelector(dataUser);
  const [routeName, setRouteName] = useState();

  return (
    <>
      <NavigationContainer
        ref={ref}
        onReady={() => {
          setRouteName(ref.getCurrentRoute().name);
        }}
        onStateChange={async () => {
          const currentRouteName = ref.getCurrentRoute().name;
          setRouteName(currentRouteName);
        }}>
        {token ? <MainStack routeName={routeName} /> : <AuthenticationStack />}
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default Navigation;
