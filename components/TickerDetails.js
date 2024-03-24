import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { restClient } from "@polygon.io/client-js";

export default function TickerDetails({ route }) {
    const { etf_ticker } = route.params;
    const [etf_price, setEtfPrice] = useState(null);

    useEffect(() => {
        const fetchData = async (apiKey) => { // Accept apiKey as a parameter
            try {
                const rest = restClient(apiKey); // Use the provided API key
                const data = await rest.stocks.aggregates(
                    etf_ticker,
                    1,
                    "day",
                    "2024-03-22",
                    "2024-03-24",
                    "true",
                    "asc",
                    1
                );
                setEtfPrice(data.results[0].c);
            } catch (error) {
                console.error("An error happened:", error);
                setEtfPrice(null); // Reset the etf_price state if there's an error
            }
        };

        // Manually specify the API key
        const apiKey = "CdlcmKnaGSxnTSYQw3fW9zxUXZjmVo8y"; 
        fetchData(apiKey); // Call fetchData with the API key
    }, [etf_ticker]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ticker Details Screen {etf_price !== null ? etf_price : "Loading..."}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
