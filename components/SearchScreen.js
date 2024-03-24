import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
    const display_ETF_Price = (etf_ticker) => {
        navigation.navigate("Details", { etf_ticker: etf_ticker });
    };

    etfs_A = ["XLK", "IBIT", "SOXX", "XLF", "VCR", "IHE", "SCHH", "XLE"];

    etfs_B = ["GOVT", "VPU", "SOXX", "JEPQ", "XLK", "VCR", "IRBO", "SCHH"];

    col = etfs_A;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[0])}
                >
                    <Text>{col[0]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>18.1%</Text>
                <Text style={styles.cell}>25%</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[1])}
                >
                    <Text>{col[1]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>15.7%</Text>
                <Text style={styles.cell}>15%</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[2])}
                >
                    <Text>{col[2]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>21.3%</Text>
                <Text style={styles.cell}>15%</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[3])}
                >
                    <Text>{col[3]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>12.0%</Text>
                <Text style={styles.cell}>15%</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[4])}
                >
                    <Text>{col[4]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>10.8%</Text>
                <Text style={styles.cell}>10%</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[5])}
                >
                    <Text>{col[5]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>9.6%</Text>
                <Text style={styles.cell}>5%</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[6])}
                >
                    <Text>{col[6]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>2.4%</Text>
                <Text style={styles.cell}>5%</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[7])}
                >
                    <Text>{col[7]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>2.8%</Text>
                <Text style={styles.cell}>5%</Text>
            </View>
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
