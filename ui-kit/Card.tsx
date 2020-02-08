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
        backgroundColor: '#fff'
    }   
});

export default Card;