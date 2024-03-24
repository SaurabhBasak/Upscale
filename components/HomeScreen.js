// HomeScreen.js
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
    const handleOpenForm = () => {
        // Navigate to the form screen where you can add multiple choice questions
        navigation.navigate("Form");
    };

    const TableType = (RiskType) => {
        navigation.navigate("Search", { RiskType }); // Pass the selected risk type to the SearchScreen
    };

    const route = useRoute();
    const profile = route.params?.profile || ""; // Access 'profile' safely

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile: {profile}</Text>
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
                        onPress={() => TableType("High")} // Pass "High" as the risk type
                    >
                        <Text style={styles.buttonText}>High Risk</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={[styles.button, styles.buttonSecondary]}
                        onPress={() => TableType("Low")} // Pass "Low" as the risk type
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
