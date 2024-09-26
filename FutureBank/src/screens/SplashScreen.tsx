// src/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { logoImage } from '../../constants/Index'; // Ensure the logo path is correct

const SplashScreen = ({ onFinish }:any) => {
  useEffect(() => {
    // Set a timer to call onFinish after 3 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds

    // Cleanup timer when the component unmounts
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        style={styles.logoContainer}
      >
        <Image 
          source={logoImage} 
          style={styles.logo}
        />

      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Gray 700
    position: 'relative',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E2E8F0', // Gray 200
    textAlign: 'center',
    opacity: 0.9,
  },
});

export default SplashScreen;
