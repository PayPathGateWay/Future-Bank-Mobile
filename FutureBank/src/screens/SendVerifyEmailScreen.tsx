import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { AuthStackParamList } from '../types/AuthStackParamList';
import { Dispatch, RootState } from '../store/store';
import { FORM_IDS } from '../../constants/Index';
import { SafeAreaView } from 'react-native-safe-area-context';

const OTPSchema = Yup.object().shape({
  otp: Yup.string().length(5, 'OTP must be 5 digits').required('Required'),
});

interface OTPFormValues {
  otp: string;
}

const CombinedVerifyScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const dispatch = useDispatch<Dispatch>();
  const email = useSelector((state: RootState) => state.form[FORM_IDS.USER_REGISTRATION_FORM]?.emailAddress);

  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(40);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isResendDisabled) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setIsResendDisabled(false);
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isResendDisabled]);

  const handleOTPSubmit = (values: OTPFormValues) => {
    setIsLoading(true);

    // Simulate OTP verification
    setTimeout(() => {
      alert('OTP Verified Successfully!');
      setIsLoading(false);
      dispatch.form.removeOne({ formId: FORM_IDS.USER_REGISTRATION_FORM });
      // navigation.navigate('Home');
    }, 2000);
  };

  const handleResendOTP = () => {
    setIsResendDisabled(true);
    alert('OTP Re-sent!');
  };

  return (
    <SafeAreaView className="bg-black flex-1 justify-center items-center">


      {/* Readonly input for email */}
      <View className="mb-5 w-[350px]">
        <Text className="text-white text-2xl mb-3">Email Address Verification</Text>
        <Text className="text-[#6B698E] text-sm mb-1">Email Address:</Text>
        <View className="bg-[#262626] px-3 py-4 rounded-md border border-[#9491BB]">
          <Text className="text-white">{email}</Text>
        </View>
      </View>

      {/* OTP Input Section */}
      <Formik
        initialValues={{ otp: '' }}
        validationSchema={OTPSchema}
        onSubmit={handleOTPSubmit}
      >
        {({ handleSubmit, values, errors, touched, setFieldValue }) => (
          <>
            <View className="flex-row justify-center mb-8 pt-4 w-[350px]">
              {[...Array(5).keys()].map((index) => (
                <View
                  key={index}
                  className="w-[50px] h-14 border border-[#4D4D4D] bg-[#262626] rounded-lg mx-2 justify-center
                   items-center focus:border-red-600"
                >
                  <Text className="text-white text-xl">{values.otp[index] || ''}</Text>
                </View>
              ))}
            </View>

            {touched.otp && errors.otp && (
              <Text className="text-red-500 mb-4">{errors.otp}</Text>
            )}

            <View className="flex-wrap flex-row justify-center mb-6">
              {/* Numeric buttons */}
              {[...Array(9).keys()].map((num) => (
                <TouchableOpacity
                  key={num + 1}
                  className="w-16 h-16 bg-[#3B3B3B] rounded-full m-2 justify-center items-center shadow-lg"
                  onPress={() => {
                    if (values.otp.length < 5) {
                      setFieldValue('otp', values.otp + (num + 1));
                    }
                  }}
                >
                  <Text className="text-white text-xl">{num + 1}</Text>
                </TouchableOpacity>
              ))}


              {/* 0 button */}
              <TouchableOpacity
                className="w-16 h-16 bg-[#3B3B3B] rounded-full m-2 justify-center items-center shadow-lg"
                onPress={() => {
                  if (values.otp.length < 5) {
                    setFieldValue('otp', values.otp + '0');
                  }
                }}
              >
                <Text className="text-white text-xl">0</Text>
              </TouchableOpacity>

              {/* Clear button */}
              <TouchableOpacity
                className="w-16 h-16 bg-[#3B3B3B] rounded-full m-2 justify-center items-center shadow-lg"
                onPress={() => setFieldValue('otp', '')}
              >
                <Text className="text-white text-sm">Clear</Text>
              </TouchableOpacity>

              {/* Backspace button */}
              <TouchableOpacity
                className="w-16 h-16 bg-[#E74C3C] rounded-full m-2 justify-center items-center shadow-lg"
                onPress={() => {
                  if (values.otp.length > 0) {
                    setFieldValue('otp', values.otp.slice(0, -1));
                  }
                }}
              >
                <Text className="text-white text-xl">⌫</Text>
              </TouchableOpacity>
            </View>

            {/* Loading and Submit */}

            {isLoading ? (
              <ActivityIndicator size="large" color="yellow" className='pb-2 p-5' />
            ) : (
              <TouchableOpacity
                onPress={handleSubmit as any}
                disabled={values.otp.length < 5}
                className={`w-[350px] ml-3 py-4 justify-center rounded-full text-center ${values.otp.length < 5 ?
                  'bg-[#D6D3FF] opacity-25' :
                  'bg-[#D6D3FF]'
                  }`}
              >
                <Text className="text-black font-bold text-center">Verify</Text>
              </TouchableOpacity>
            )}

          </>
        )}
      </Formik>

      {/* Resend OTP Button */}
      <TouchableOpacity
        onPress={handleResendOTP}
        disabled={isResendDisabled}
        className={`w-[350px] ml-3 py-4 justify-center rounded-full text-center mt-2 ${isResendDisabled ?
          'bg-[#D6D3FF] opacity-30' : 'bg-[#D6D3FF]'}`}
      >
        <Text className={`${isResendDisabled ? 'text-white' : 'text-black'} font-bold text-center`}>
          {isResendDisabled ? `Re-send (${countdown}s)` : 'Re-send OTP'}
        </Text>

      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CombinedVerifyScreen;
