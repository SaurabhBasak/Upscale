import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Animated, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
    const handleOpenForm = () => {
        // Navigate to the form screen where you can add multiple choice questions
        navigation.navigate("Form");
    };

    const TableType = (RiskType) => {
        navigation.navigate("Search", { RiskType });
    };

    const route = useRoute();
    const profile = route.params?.profile || ""; // Access 'profile' safely

    const headerAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(headerAnimation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(headerAnimation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
            { iterations: -1 }
        ).start();
    }, []);

    const headerTranslateY = headerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 2],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.background, { transform: [{ translateY: headerTranslateY }] }]} />
            <Image source={require('../assets/images.png')} style={styles.image} />
            <Animated.Text style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>Welcome to Upscale!</Animated.Text>
            {profile != '' && <Text style={styles.text}>Profile: {profile}</Text>}
            <TouchableOpacity
                style={[styles.button, styles.buttonPrimary]}
                onPress={handleOpenForm}
            >
                <Text style={styles.buttonText}>Open Form</Text>
            </TouchableOpacity>
            {profile !== "" &&
                (profile == "High Risk, High Return" ? (
                    <TouchableOpacity
                        style={[styles.button, styles.buttonSecondary]}
                        onPress={() => TableType("High")}
                    >
                        <Text style={styles.buttonText}>High Risk</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={[styles.button, styles.buttonSecondary]}
                        onPress={() => TableType("Low")}
                    >
                        <Text style={styles.buttonText}>Low Risk</Text>
                    </TouchableOpacity>
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa", // Light gray background color
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    image: {
        width: 200, // Adjust the width as needed
        height: 200, // Adjust the height as needed
        resizeMode: "cover", // Make sure the image covers its container
        borderRadius: 100, // Make the image round
        marginBottom: 50, // Adjust the margin as needed
        zIndex: 1, // Ensure the image is on top of the background
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "black", // Text color
        zIndex: 1, // Ensure text is on top of the background
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: "#007bff", // Blue button color
        alignItems: "center",
        justifyContent: "center",
    },
    buttonPrimary: {
        backgroundColor: "#007bff", // Blue button color
    },
    buttonSecondary: {
        backgroundColor: "#6c757d", // Gray button color
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
