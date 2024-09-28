import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { AuthStackParamList } from '../types/AuthStackParamList';
import { FORM_IDS } from '../../constants/Index';
import { Dispatch, RootState } from '../store/store';

const OTPSchema = Yup.object().shape({
  otp: Yup.string().length(4, 'OTP must be 4 digits').required('Required'),
});

interface OTPFormValues {
  otp: string;
}

const VerifyOTPScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const dispatch = useDispatch<Dispatch>();
  const email = useSelector((state: RootState) => state.form[FORM_IDS.USER_REGISTRATION_FORM]?.emailAddress);

  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleOTPSubmit = (values: OTPFormValues) => {
    setIsLoading(true); // Start loading

    // Simulate OTP verification
    setTimeout(() => {
      alert('OTP Verified Successfully!');
      setIsLoading(false); // End loading

      dispatch.form.removeOne({ formId: FORM_IDS.USER_REGISTRATION_FORM });
      // navigation.navigate('Home'); // Navigate to Home screen after successful verification
    }, 2000); // Mock delay for OTP verification
  };

  const handleCustomKeyboardInput = (num: string, values: OTPFormValues, setFieldValue: any) => {
    if (values.otp.length < 4) {
      setFieldValue('otp', values.otp + num); // Append the number to the OTP string
    }
  };

  const handleBackspace = (values: OTPFormValues, setFieldValue: any) => {
    if (values.otp.length > 0) {
      setFieldValue('otp', values.otp.slice(0, -1)); // Remove the last digit
    }
  };

  return (
    <Formik
      initialValues={{ otp: '' }}
      validationSchema={OTPSchema}
      onSubmit={handleOTPSubmit}
    >
      {({ handleSubmit, values, errors, touched, setFieldValue }) => (
        <View className="bg-black flex-1 justify-center items-left p-6 px-5">
          <Text className="text-white text-2xl mb-3 text-left">Email Address Verification</Text>
          <Text className='text-white text-sm mb-5 w-72'>
            Varius facilisis in duis volutpat. Viverra fermentum nibh consectetur purus.
          </Text>

          {/* Readonly input for email */}
          <View className="mb-5">
            <Text className="text-white text-sm mb-1">Email Address:</Text>
            <View className="bg-gray-700 p-3 rounded-md">
              <Text className="text-white">{email}</Text>
            </View>
          </View>

          {/* OTP Input Section */}
          <View className="flex-row justify-center mb-8">
            {[...Array(4).keys()].map(index => (
              <View key={index} className="w-10 h-14 border border-[#4D4D4D]
               bg-[#262626] rounded-lg
               mx-2 justify-center items-center">
                <Text className="text-white text-xl">
                  {values.otp[index] || ''}
                </Text>
              </View>
            ))}
          </View>

          {/* Validation Error */}
          {touched.otp && errors.otp && <Text className="text-red-500 mb-4">{errors.otp}</Text>}

          {/* Custom Numeric Keyboard */}
          <View className="flex-wrap flex-row justify-center mb-6">
            {[...Array(10).keys()].map(num => (
              <TouchableOpacity
                key={num}
                className="w-16 h-16 bg-transparent  rounded-full m-2 justify-center items-center"
                onPress={() => handleCustomKeyboardInput(num.toString(), values, setFieldValue)}
              >
                <Text className="text-white text-xl">{num}</Text>
              </TouchableOpacity>
            ))}
            {/* Backspace */}
            <TouchableOpacity
              className="w-16 h-16 bg-red-700 rounded-full m-2 justify-center items-center"
              onPress={() => handleBackspace(values, setFieldValue)}
            >
              <Text className="text-white text-xl">⌫</Text>
            </TouchableOpacity>
          </View>

          {/* Loading Indicator */}
          {isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <TouchableOpacity
              onPress={handleSubmit as any}
              disabled={values.otp.length < 4} // Disable the button if OTP is not fully entered
              className={`w-full py-4 rounded-lg text-center ${values.otp.length < 4 ? 'bg-gray-600' : 'bg-green-500'
                }`}
            >
              <Text className="text-white text-xl">Verify OTP</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </Formik>
  );
};

export default VerifyOTPScreen;
