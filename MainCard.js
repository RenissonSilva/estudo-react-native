import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Título do cartão</Text>
            <Text style={styles.cardSubtitle}>Subtitulo do cartão</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#006b52',
        padding: 12,
        borderRadius: 3,
        marginVertical: 6
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#011f18'
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#011f18'
    }
});