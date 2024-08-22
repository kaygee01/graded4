import React, {useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/Menu';
import CartScreen from './screens/Cart';
import ProfileScreen from './screens/Profile';
import Form1Screen from './screens/form1';
import Form2Screen from './screens/form2';
import Form3Screen from './screens/form3';
import HomeScreen from './screens/HomeScreen';
import { CartProvider } from './context/cartContext';
import { FormProvider } from './context/formContext';
import { ThemeContext, ThemeProvider } from './context/themeContext';


const Stack = createStackNavigator();

export default function App() {
  return (
    <FormProvider>
      <ThemeProvider>
        <CartProvider>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              <ThemedStackNavigator />
            </SafeAreaView>
          </NavigationContainer>
        </CartProvider>
      </ThemeProvider>
    </FormProvider>
  );
}

const ThemedStackNavigator = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Personal Info"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.backgroundColor,
        },
        headerTintColor: theme.textColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Personal Info" component={Form1Screen} />
      <Stack.Screen name="Personal Address" component={Form2Screen} />
      <Stack.Screen name="Card Details" component={Form3Screen} />
    </Stack.Navigator>
  );
};