import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Adjust the import path accordingly

const RegisterScreen: React.FC = () => {
  const { register, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    await register(email, password);
  };

  return (
    <View>

    </View>
  );
};

export default RegisterScreen;
