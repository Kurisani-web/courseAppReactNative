import {useState} from 'react';
import {Text, View} from 'react-native';
import SentEmail from './SentEmail';
import VerifyCode from './VerifyCode';
import {useSelector} from 'react-redux';
import {dataForgot} from '~/features/forgotReducer';

function ForgotPW() {
  const {toggle} = useSelector(dataForgot);

  return <>{toggle ? <VerifyCode /> : <SentEmail />}</>;
}

export default ForgotPW;
