// SearchScreen.js
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function SearchScreen({ navigation, route }) {
    const displayETFPrice = (etf_ticker) => {
        navigation.navigate("Details", { etf_ticker }); // Navigate to the Details screen with the ETF ticker
    };
    
    const riskType = route.params?.RiskType;
    const etfs = (riskType === 'High') 
        ? ["XLK", "IBIT", "SOXX", "XLF", "VCR", "IHE", "SCHH", "XLE"]
        : ["GOVT", "VPU", "SOXX", "JEPQ", "XLK", "VCR", "IRBO", "SCHH"];

    return (
        <View style={styles.container}>
            {etfs.map((etf, index) => (
                <View key={index} style={styles.row}>
                    <TouchableOpacity
                        style={styles.cell}
                        onPress={() => displayETFPrice(etf)}
                    >
                        <Text>{etf}</Text>
                    </TouchableOpacity>
                    <Text style={styles.cell}>18.1%</Text>
                    <Text style={styles.cell}>25%</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        textAlign: "center",
    },
});
