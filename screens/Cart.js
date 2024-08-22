import React, { useContext } from 'react';
import { SafeAreaView, Text, Button, Image, View, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../context/cartContext';
import { ThemeContext } from '../context/themeContext';

export default function CartScreen() {
    const { cartItems, removeFromCart, updateItemQuantity, clearCart, proceedToCheckout } = useContext(CartContext);
    const [theme] = useContext(ThemeContext); // Access the theme context

    const getTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { backgroundColor: theme.cardBackgroundColor, shadowColor: theme.shadowColor }]}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={[styles.name, { color: theme.nameText }]}>{item.name}</Text>
                        <Text style={[styles.quantity, { color: theme.descriptionText }]}>Quantity: {item.quantity}</Text>
                        <Text style={[styles.price, { color: theme.priceText }]}>R {(item.price * item.quantity).toFixed(2)}</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Increase" onPress={() => updateItemQuantity(item.id, item.quantity + 1)} color="#f4511e" />
                            <Button title="Decrease" onPress={() => updateItemQuantity(item.id, item.quantity - 1)} color="#f4511e" />
                            <Button title="Remove" onPress={() => removeFromCart(item.id)} color="#f4511e" />
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.list}
            />
            <Text style={[styles.total, { color: theme.textColor }]}>Total Cost: R {getTotal()}</Text>
            <Button title="Proceed to Checkout" onPress={proceedToCheckout} color="#f4511e" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    list: {
        alignItems: 'center',
    },
    itemContainer: {
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        borderColor: "#f4511e",
        borderWidth: 1,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
        margin: 10,
        width: '90%',
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    quantity: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: '100%',
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
        textAlign: 'center',
    },
});
