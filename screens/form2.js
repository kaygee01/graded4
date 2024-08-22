import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { FormContext } from '../context/formContext';
import { ThemeContext } from '../context/themeContext';

const validateAddress = (address) => {
  return address.trim().length > 0;
};

const validateCity = (city) => {
  return city.trim().length > 0;
};

const validateState = (state) => {
  return state.trim().length > 0;
};

const validateZipCode = (zipcode) => {
  return zipcode.trim().length >= 4;
};

const Form2Screen = ({ navigation }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [theme] = useContext(ThemeContext); // Access the theme context

  const handleNext = () => {
    const isAddressValid = validateAddress(formData.address);
    const isCityValid = validateCity(formData.city);
    const isStateValid = validateState(formData.state);
    const isZipCodeValid = validateZipCode(formData.zipcode);

    if (!isAddressValid) {
      Alert.alert('Validation Error', 'Please enter a valid address.');
      return;
    }
    if (!isCityValid) {
      Alert.alert('Validation Error', 'Please enter a valid city.');
      return;
    }
    if (!isStateValid) {
      Alert.alert('Validation Error', 'Please enter a valid state.');
      return;
    }
    if (!isZipCodeValid) {
      Alert.alert('Validation Error', 'Please enter a valid zip code (4 or more digits).');
      return;
    }

    navigation.navigate('Card Details');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor, color: theme.priceText}]}>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, { backgroundColor: theme.cardBackgroundColor, color: theme.priceText }]}
          placeholder="Address"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.address}
          onChangeText={(value) => updateFormData('address', value)}
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.cardBackgroundColor, color: theme.priceText}]}
          placeholder="City"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.city}
          onChangeText={(value) => updateFormData('city', value)}
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.cardBackgroundColor, color: theme.priceText }]}
          placeholder="State"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.state}
          onChangeText={(value) => updateFormData('state', value)}
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.cardBackgroundColor, color: theme.priceText }]}
          placeholder="Zip Code"
          placeholderTextColor={theme.placeholderTextColor}
          value={formData.zipcode}
          onChangeText={(value) => updateFormData('zipcode', value)}
          keyboardType="numeric"
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

export default Form2Screen;
