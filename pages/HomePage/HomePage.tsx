import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { loremIpsumText } from '../../utils/constants';

export const HomePageContent: React.FC = () => {
    return <Text>{loremIpsumText}</Text>
}

export const HomePageHeader: React.FC = () => {
    return <Text style={styles.headerStyle}>Home</Text>
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})