import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { AuthStackParamList } from '../types/AuthStackParamList';

const PersonalDataSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const UserRegistrationForm = ({ initialValues, onSubmit }:any) => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PersonalDataSchema}
      onSubmit={(values) => {
        onSubmit(values); // Updates values in redux
        navigation.navigate('SendVerifyEmail');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name ? <Text>{errors.name}</Text> : null}
          
          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email ? <Text>{errors.email}</Text> : null}
          
          <Button onPress={handleSubmit} title="Next" />
        </View>
      )}
    </Formik>
  );
};

export default UserRegistrationForm;
