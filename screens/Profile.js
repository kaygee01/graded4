import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ThemeContext } from "../context/themeContext";
import { FormContext } from "../context/formContext";
import { CartContext } from "../context/cartContext";

export default function ProfileScreen() {
    const { formData } = useContext(FormContext);
    const [theme, setTheme] = useContext(ThemeContext);
    const { orders } = useContext(CartContext);

    const themeChange = () => {
        const newTheme = {
            textColor: theme.textColor === '#000000' ? '#f8f8f8' : '#000000',
            backgroundColor: theme.backgroundColor === '#f8f8f8' ? '#000000' : '#f8f8f8',
            cardBackgroundColor: theme.cardBackgroundColor === '#fff' ? '#333' : '#fff',
            nameText: theme.nameText === '#333' ? '#f8f8f8' : '#333',
            descriptionText: theme.descriptionText === '#666' ? '#999' : '#666',
            priceText: theme.priceText === '#000' ? '#fff' : '#000',
        };
        setTheme(newTheme);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={[styles.card, { backgroundColor: theme.cardBackgroundColor }]}>
                <Text style={[styles.text, { color: theme.textColor }]}>Name: {formData.name}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Email: {formData.email}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Phone: {formData.phone}</Text>
            </View>
            <View style={[styles.card, { backgroundColor: theme.cardBackgroundColor }]}>
                <Text style={[styles.text, { color: theme.textColor }]}>Address: {formData.address}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Change Theme" onPress={themeChange} color='#f4511e' />
            </View>

            <FlatList
                data={orders}
                renderItem={({ item }) => (
                    <View style={styles.orderContainer}>
                        <Text style={[styles.text, { color: theme.textColor }]}>Order Date: {item.date}</Text>
                        <Text style={[styles.text, { color: theme.textColor }]}>Total: R {item.total}</Text>
                        <FlatList
                            data={item.items}
                            renderItem={({ item }) => (
                                <Text style={[styles.text, { color: theme.textColor }]}>
                                    {item.quantity} x {item.name} - R {(item.price * item.quantity).toFixed(2)}
                                </Text>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
    buttonContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    orderContainer: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#f4511e',
        padding: 16,
        marginVertical: 8,
    },
});
