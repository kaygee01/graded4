import React, { useContext } from 'react';
import { SafeAreaView, Button, StyleSheet, View, Text } from 'react-native';
import { ThemeContext } from '../context/themeContext';

export default function HomeScreen({ navigation }) {
    const [theme] = useContext(ThemeContext);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.title, { color: theme.textColor }]}>Food Delivery 🚗</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Menu"
                    onPress={() => navigation.navigate('Menu')}
                    color="#f4511e"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Cart"
                    onPress={() => navigation.navigate('Cart')}
                    color="#f4511e"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Profile, orders"
                    onPress={() => navigation.navigate('Profile')}
                    color="#f4511e"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="User details"
                    onPress={() => navigation.navigate('Personal Info')}
                    color="#f4511e"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', // Center align buttons horizontally
        padding: 20,
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 20,
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 40,
    },
});
