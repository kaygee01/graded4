import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { FormContext } from '../context/formContext';
import { ThemeContext } from '../context/themeContext';

const validateName = (name) => {
  return name.trim().length > 0;
};

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const validatePhone = (phone) => {
  const phonePattern = /^[0-9]{10}$/;
  return phonePattern.test(phone);
};

const Form1Screen = ({ navigation }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [theme] = useContext(ThemeContext); 

  const handleNext = () => {
    const isNameValid = validateName(formData.name);
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);

    if (!isNameValid) {
      Alert.alert('Validation Error', 'Please enter a valid name.');
      return;
    }
    if (!isEmailValid) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }
    if (!isPhoneValid) {
      Alert.alert('Validation Error', 'Please enter a valid phone number (10 digits).');
      return;
    }

    navigation.navigate('Personal Address');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, {  backgroundColor: theme.cardBackgroundColor, color: theme.priceText }]}
          placeholder="Name"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.name}
          onChangeText={(value) => updateFormData('name', value)}
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.cardBackgroundColor, color: theme.priceText }]}
          placeholder="Email"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.email}
          onChangeText={(value) => updateFormData('email', value)}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.cardBackgroundColor, color: theme.priceText }]}
          placeholder="Phone"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.phone}
          onChangeText={(value) => updateFormData('phone', value)}
          keyboardType="phone-pad"
        />
        <Button title="Next" onPress={handleNext} color="#f4511e" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Form1Screen;
