import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { FormContext } from '../context/formContext';
import { ThemeContext } from '../context/themeContext';

const validateCardNumber = (cardNumber) => {
  const cardPattern = /^[0-9]{16}$/; // Ensures the card number is exactly 16 digits
  return cardPattern.test(cardNumber);
};

const validateExpiryDate = (expiryDate) => {
  const expiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
  return expiryPattern.test(expiryDate);
};

const validateCVV = (cvv) => {
  const cvvPattern = /^[0-9]{3}$/;
  return cvvPattern.test(cvv);
};

const Form3Screen = ({ navigation }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [theme] = useContext(ThemeContext); // Access the theme context

  const handleSubmit = () => {
    const isCardNumberValid = validateCardNumber(formData.cardNumber);
    const isExpiryDateValid = validateExpiryDate(formData.expiryDate);
    const isCVVValid = validateCVV(formData.cvv);

    if (!isCardNumberValid) {
      Alert.alert('Validation Error', 'Please enter a valid 16-digit card number.');
      return;
    }
    if (!isExpiryDateValid) {
      Alert.alert('Validation Error', 'Please enter a valid expiry date in MM/YY format.');
      return;
    }
    if (!isCVVValid) {
      Alert.alert('Validation Error', 'Please enter a valid 3-digit CVV.');
      return;
    }

    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, { backgroundColor: theme.cardBackgroundColor, color: theme.priceText }]}
          placeholder="Card Number"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.cardNumber}
          onChangeText={(value) => updateFormData('cardNumber', value)}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.cardBackgroundColor, color: theme.priceText }]}
          placeholder="Expiry Date (MM/YY)"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.expiryDate}
          onChangeText={(value) => updateFormData('expiryDate', value)}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.cardBackgroundColor, color: theme.priceText }]}
          placeholder="CVV"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.cvv}
          onChangeText={(value) => updateFormData('cvv', value)}
          keyboardType="numeric"
          secureTextEntry
        />
        <Button title="Submit" onPress={handleSubmit} color="#f4511e" />
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

export default Form3Screen;
