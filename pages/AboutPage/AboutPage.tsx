import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { loremIpsumText } from '../../utils/constants';

export const AboutPageContent: React.FC = () => {
    return <Text>{loremIpsumText}</Text>
}

export const AboutPageHeader: React.FC = () => {
    return <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>About</Text>
        <Text style={styles.newText}>NEW!!</Text>
    </View>
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    newText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red'
    }
})