import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
    width?: number | string,
    height?: number,
    children?: React.ReactNode

}


const Card = ({ width, height, children }: CardProps) => {
    return <View style={[styles.cardContainer, { width: width||0, height: height||0 }]}>
        {children}
    </View>
}
        
const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2.22,
        shadowOpacity: 0.22,
        elevation: 3

    }   
});

export default Card;