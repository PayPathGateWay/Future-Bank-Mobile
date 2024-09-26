// VerifyOTPScreen.tsx

import { View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { AuthStackParamList } from '../types/AuthStackParamList';
import { FORM_IDS } from '../../constants/Index';
import { Dispatch } from '../store/store';

const OTPSchema = Yup.object().shape({
  otp: Yup.string().min(4, 'Invalid OTP').required('Required'),
});

interface OTPFormValues {
  otp: string;
}

const VerifyOTPScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const dispatch = useDispatch<Dispatch>();


  const handleOTPSubmit = (values: OTPFormValues) => {
    // Verify OTP logic here (mocked)
    alert('OTP Verified Successfully!');

    // Clear form state
    dispatch.form.removeOne({ formId: FORM_IDS.USER_REGISTRATION_FORM });

    // Navigate to the home screen or dashboard
    // navigation.navigate('Home');
  };

  return (
    <Formik
      initialValues={{ otp: '' }}
      validationSchema={OTPSchema}
      onSubmit={handleOTPSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput
            placeholder="Enter OTP"
            onChangeText={handleChange('otp')}
            onBlur={handleBlur('otp')}
            value={values.otp}
          />
          {touched.otp && errors.otp ? <Text>{errors.otp}</Text> : null}

          <Button onPress={handleSubmit as any} title="Verify OTP" />
        </View>
      )}
    </Formik>
  );
};

export default VerifyOTPScreen;
