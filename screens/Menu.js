import React, { useContext } from "react";
import { SafeAreaView, Text, Button, Image, View, StyleSheet, FlatList } from "react-native";
import { CartContext } from "../context/cartContext";
import { ThemeContext } from "../context/themeContext";

const foodItems = [
    {id: 1, name: 'Margherita Pizza', description: 'A classic pizza topped with fresh mozzarella, ripe tomatoes, and fragrant basil leaves.', price: 219.99, image: require('../assets/food/Margherita Pizza.jpg')},
    {id: 2, name: 'Spaghetti Carbonara', description: 'Creamy spaghetti pasta tossed with crispy pancetta, eggs, and Parmesan cheese.', price: 245.50, image: require('../assets/food/Spaghetti Carbonara.jpg')},
    {id: 3, name: 'Caesar Salad', description: 'Crisp romaine lettuce topped with grilled chicken, Parmesan, croutons, and Caesar dressing.', price: 187.00, image: require('../assets/food/Caesar Salad.jpg')},
    {id: 4, name: 'Beef Burger with Cheddar', description: 'Juicy beef patty topped with melted cheddar, lettuce, tomato, and pickles in a sesame seed bun.', price: 205.00, image: require('../assets/food/Beef Burger with Cheddar.webp')},
    {id: 5, name: 'Vegetable Stir-Fry', description: 'A colorful mix of fresh vegetables stir-fried in a savory soy and ginger sauce, served with steamed rice.', price: 299.99, image: require('../assets/food/Vegetable Stir-Fry.jpg')},
    {id: 6, name: 'Salmon Teriyaki', description: 'Grilled salmon fillet glazed with a sweet and tangy teriyaki sauce, served with rice and steamed broccoli.', price: 255.50, image: require('../assets/food/Salmon Teriyaki.jpg')},
    {id: 7, name: 'Chicken Alfredo Pasta', description: 'Tender chicken pieces in a creamy Alfredo sauce, served over fettuccine pasta.', price: 149.99, image: require('../assets/food/Chicken Alfredo Pasta.jpg')},
    {id: 8, name: 'Mushroom Risotto', description: 'Creamy Arborio rice cooked with a medley of mushrooms, Parmesan cheese, and a hint of truffle oil.', price: 179.99, image: require('../assets/food/Mushroom Risotto.jpg')},
];

export default function MenuScreen() {
    const { addToCart } = useContext(CartContext);
    const [theme] = useContext(ThemeContext); // Destructure theme from the array

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <FlatList
                data={foodItems}
                renderItem={({ item }) => (
                    <View style={[styles.card, { backgroundColor: theme.cardBackgroundColor }]}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={[styles.name, { color: theme.textColor }]}>{item.name}</Text>
                        <Text style={[styles.description, { color: theme.descriptionText }]}>{item.description}</Text>
                        <Text style={[styles.price, { color: theme.priceText }]}>R {item.price.toFixed(2)}</Text>
                        <Button title="Add to cart" onPress={() => addToCart(item)} color="#f4511e" />
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    list: {
        alignItems: 'center',
    },
    card: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        borderColor: '#f4511e',
        borderWidth: 1,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
        margin: 10,
        width: '45%',
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 10,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
