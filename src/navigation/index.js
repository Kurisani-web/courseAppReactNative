import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './AuthenticationStack';
import MainStack from './MainStack';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import {dataUser } from '~/features/userReducer';

function Navigation() {
  const {token} = useSelector(dataUser)

  return (
    <>
      <NavigationContainer>
        {token ? <MainStack /> : <AuthenticationStack />}
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default Navigation;
