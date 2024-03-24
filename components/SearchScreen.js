import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function SearchScreen({ navigation }) {
    const display_ETF_Price = (etf_ticker) => {
        navigation.navigate("Details", { etf_ticker: etf_ticker });
    };

    const route = useRoute();
    const RiskType = route.params.RiskType;
    console.log(RiskType);

    etfs_A = ["XLK", "IBIT", "SOXX", "XLF", "VCR", "IHE", "SCHH", "XLE"];

    etfs_B = ["GOVT", "VPU", "SOXX", "JEPQ", "XLK", "VCR", "IRBO", "SCHH"];

    if (RiskType == "High") {
        col = etfs_A;
    } else {
        col = etfs_B;
    }
    // rest.stocks
    //     .aggregates(
    //         "XLF",
    //         1,
    //         "day",
    //         "2024-03-22",
    //         "2024-03-24",
    //         "true",
    //         "asc",
    //         1
    //     )
    //     .then((data) => {
    //         console.log(data.results[0].c);
    //     })
    //     .catch((e) => {
    //         console.error("An error happened:", e);
    //     });

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[0])}
                >
                    <Text>{col[0]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>C %</Text>
                <Text style={styles.cell}>G %</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[1])}
                >
                    <Text>{col[1]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>C %</Text>
                <Text style={styles.cell}>G %</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[2])}
                >
                    <Text>{col[2]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>C %</Text>
                <Text style={styles.cell}>G %</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[3])}
                >
                    <Text>{col[3]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>C %</Text>
                <Text style={styles.cell}>G %</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[4])}
                >
                    <Text>{col[4]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>C %</Text>
                <Text style={styles.cell}>G %</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[5])}
                >
                    <Text>{col[5]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>C %</Text>
                <Text style={styles.cell}>G %</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[6])}
                >
                    <Text>{col[6]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>C %</Text>
                <Text style={styles.cell}>G %</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => display_ETF_Price(col[7])}
                >
                    <Text>{col[7]}</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>C %</Text>
                <Text style={styles.cell}>G %</Text>
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
