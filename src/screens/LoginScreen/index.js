import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginView from "./view";
import { Alert } from 'react-native';

const LoginScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false)

  const handleBackButton = () => {
    navigation.goBack();
  }

  const handleEmail = (text) => {
    setEmail(text)
  }

  const handlePassword = (text) => {
    setPassword(text);
  }

  const handleEyeIcon = () => {
    setShow(!show)
  }

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      Alert.alert('Please Enter Email id');
    }
    else if (!emailRegex.test(email)) {
      Alert.alert('Please Enter Valid Email');
    } else if (!password) {
      Alert.alert('Please Enter Password');
    } else {
      login();
    }
  }

  const login = () => {
    navigation.navigate('HomeScreen')
  }
  return (
    <LoginView
      handleBackButton={handleBackButton}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleLogin={handleLogin}
      handleEyeIcon={handleEyeIcon}
      show={show}
    />
  );
}
LoginScreen.navigationOptions = () => ({
});

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // Access state from Store.
});

export default connect(mapStateToProps)(LoginScreen);
