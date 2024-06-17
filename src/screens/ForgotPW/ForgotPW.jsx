import ResetPassword from './ResetPassword';
import SentEmail from './SentEmail';
import VerifyCode from './VerifyCode';
import {useSelector} from 'react-redux';
import {dataForgot} from '~/redux/features/forgotReducer';

function ForgotPW() {
  const {toggle} = useSelector(dataForgot);

  return (
    <>
      {toggle !== 'Default' ? (
        toggle === 'VerifyCode' ? (
          <VerifyCode />
        ) : (
          <ResetPassword />
        )
      ) : (
        <SentEmail />
      )}
    </>
  );
}

export default ForgotPW;
