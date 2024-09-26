// src/screens/PersonalDataScreen.tsx
import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Animated,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { AuthStackParamList } from '../types/AuthStackParamList';
import { Dispatch } from '../store/store';
import { FORM_IDS } from '../../constants/Index';

// Define the navigation prop type
type PersonalDataScreenProp = StackNavigationProp<AuthStackParamList, 'PersonalData'>;

// Validation schema
const PersonalDataSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').required('Required'),
  emailAddress: Yup.string().email('Invalid email').required('Required'),
  day: Yup.number()
    .typeError('Must be a number')
    .min(1, 'Invalid day')
    .max(31, 'Invalid day')
    .required('Required'),
  month: Yup.number()
    .typeError('Must be a number')
    .min(1, 'Invalid month')
    .max(12, 'Invalid month')
    .required('Required'),
  year: Yup.number()
    .typeError('Must be a number')
    .min(1900, 'Invalid year')
    .max(new Date().getFullYear(), 'Invalid year')
    .required('Required'),
});

const PersonalDataScreen: React.FC = () => {
  const [isFocused, setIsFocused] = useState<{ [key: string]: boolean }>({
    firstName: false,
    lastName: false,
    emailAddress: false,
    day: false,
    month: false,
    year: false,
  });

  const navigation = useNavigation<PersonalDataScreenProp>();

  const labelPosition = useRef({
    firstName: new Animated.Value(15),
    lastName: new Animated.Value(15),
    emailAddress: new Animated.Value(15),
    day: new Animated.Value(15),
    month: new Animated.Value(15),
    year: new Animated.Value(15),
  }).current;

  const labelFontSize = useRef({
    firstName: new Animated.Value(16),
    lastName: new Animated.Value(16),
    emailAddress: new Animated.Value(16),
    day: new Animated.Value(16),
    month: new Animated.Value(16),
    year: new Animated.Value(16),
  }).current;

  const animateLabel = (focus: boolean, field: string) => {
    Animated.timing(labelPosition[field], {
      toValue: focus ? -15 : 15,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(labelFontSize[field], {
      toValue: focus ? 12 : 16,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleFocus = (field: string) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
    animateLabel(true, field);
  };

  const handleBlur = (field: string, value: string, validateField: (field: string) => void) => {
    if (!value) {
      setIsFocused((prev) => ({ ...prev, [field]: false }));
      animateLabel(false, field);
    }
    validateField(field);
  };

  const dispatch = useDispatch<Dispatch>();
  const onSubmit = (values: any) => {
    console.log(values);

    // Dispatch the form values to Redux store
    dispatch.form.setOne({
      formId: FORM_IDS.USER_REGISTRATION_FORM,
      formValues: values,
    });

    navigation.navigate('SendVerifyEmail');
  }
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', emailAddress: '', day: '', month: '', year: '' }}
      validationSchema={PersonalDataSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, validateField }) => {
        const inputStyle = (field: string) => [
          styles.input,
          touched[field] && !errors[field] ? styles.validInput : null,
          touched[field] && errors[field] ? styles.errorInput : null,
        ];

        return (
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
          >
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
              <Text style={styles.title}>Personal Details</Text>

              {/* First Name Field */}
              <SafeAreaView style={styles.inputContainer}>
                <Animated.Text
                  style={[
                    styles.label,
                    {
                      top: labelPosition.firstName,
                      fontSize: labelFontSize.firstName,
                    },
                  ]}
                >
                  First Name
                </Animated.Text>
                <TextInput
                  style={inputStyle('firstName')}
                  onFocus={() => handleFocus('firstName')}
                  onBlur={() => handleBlur('firstName', values.firstName, validateField)}
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  placeholder={!isFocused.firstName ? 'First Name' : ''}
                  placeholderTextColor="#777"
                />
                {touched.firstName && errors.firstName ? (
                  <Text style={styles.errorText}>{errors.firstName}</Text>
                ) : null}
              </SafeAreaView>

              {/* Last Name Field */}
              <SafeAreaView style={styles.inputContainer}>
                <Animated.Text
                  style={[
                    styles.label,
                    {
                      top: labelPosition.lastName,
                      fontSize: labelFontSize.lastName,
                    },
                  ]}
                >
                  Last Name
                </Animated.Text>
                <TextInput
                  style={inputStyle('lastName')}
                  onFocus={() => handleFocus('lastName')}
                  onBlur={() => handleBlur('lastName', values.lastName, validateField)}
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  placeholder={!isFocused.lastName ? 'Last Name' : ''}
                  placeholderTextColor="#777"
                />
                {touched.lastName && errors.lastName ? (
                  <Text style={styles.errorText}>{errors.lastName}</Text>
                ) : null}
              </SafeAreaView>

              {/* Email Address Field */}
              <SafeAreaView style={styles.inputContainer}>
                <Animated.Text
                  style={[
                    styles.label,
                    {
                      top: labelPosition.emailAddress,
                      fontSize: labelFontSize.emailAddress,
                    },
                  ]}
                >
                  Email Address
                </Animated.Text>
                <TextInput
                  style={inputStyle('emailAddress')}
                  onFocus={() => handleFocus('emailAddress')}
                  onBlur={() => handleBlur('emailAddress', values.emailAddress, validateField)}
                  onChangeText={handleChange('emailAddress')}
                  value={values.emailAddress}
                  placeholder={!isFocused.emailAddress ? 'Email Address' : ''}
                  placeholderTextColor="#777"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {touched.emailAddress && errors.emailAddress ? (
                  <Text style={styles.errorText}>{errors.emailAddress}</Text>
                ) : null}
              </SafeAreaView>

              {/* Birthday Section */}
              <Text style={styles.subtitle}>Birthday</Text>
              <SafeAreaView style={styles.row}>
                {/* Day Field */}
                <SafeAreaView style={[styles.inputContainer, styles.halfWidthContainer]}>
                  <Animated.Text
                    style={[
                      styles.label,
                      {
                        top: labelPosition.day,
                        fontSize: labelFontSize.day,
                      },
                    ]}
                  >
                    Day
                  </Animated.Text>
                  <TextInput
                    style={inputStyle('day')}
                    onFocus={() => handleFocus('day')}
                    onBlur={() => handleBlur('day', values.day, validateField)}
                    onChangeText={handleChange('day')}
                    value={values.day}
                    placeholder={!isFocused.day ? 'Day' : ''}
                    placeholderTextColor="#777"
                    keyboardType="numeric"
                  />
                  {touched.day && errors.day ? (
                    <Text style={styles.errorText}>{errors.day}</Text>
                  ) : null}
                </SafeAreaView>

                {/* Month Field */}
                <SafeAreaView style={[styles.inputContainer, styles.halfWidthContainer]}>
                  <Animated.Text
                    style={[
                      styles.label,
                      {
                        top: labelPosition.month,
                        fontSize: labelFontSize.month,
                      },
                    ]}
                  >
                    Month
                  </Animated.Text>
                  <TextInput
                    style={inputStyle('month')}
                    onFocus={() => handleFocus('month')}
                    onBlur={() => handleBlur('month', values.month, validateField)}
                    onChangeText={handleChange('month')}
                    value={values.month}
                    placeholder={!isFocused.month ? 'Month' : ''}
                    placeholderTextColor="#777"
                    keyboardType="numeric"
                  />
                  {touched.month && errors.month ? (
                    <Text style={styles.errorText}>{errors.month}</Text>
                  ) : null}
                </SafeAreaView>
              </SafeAreaView>

              {/* Year Field */}
              <SafeAreaView style={styles.inputContainer}>
                <Animated.Text
                  style={[
                    styles.label,
                    {
                      top: labelPosition.year,
                      fontSize: labelFontSize.year,
                    },
                  ]}
                >
                  Year
                </Animated.Text>
                <TextInput
                  style={inputStyle('year')}
                  onFocus={() => handleFocus('year')}
                  onBlur={() => handleBlur('year', values.year, validateField)}
                  onChangeText={handleChange('year')}
                  value={values.year}
                  placeholder={!isFocused.year ? 'Year' : ''}
                  placeholderTextColor="#777"
                  keyboardType="numeric"
                />
                {touched.year && errors.year ? (
                  <Text style={styles.errorText}>{errors.year}</Text>
                ) : null}
              </SafeAreaView>

              {/* Submit Button */}
              <TouchableOpacity style={styles.button} onPress={handleSubmit} className=''>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

// Styles
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  label: {
    position: 'absolute',
    left: 15,
    color: '#aaa',
  },
  input: {
    height: 50,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: '#262626',
  },
  validInput: {
    borderColor: 'green',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidthContainer: {
    width: '48%',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#D6D3FF',
    alignItems: 'center',
    marginTop: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonalDataScreen;
