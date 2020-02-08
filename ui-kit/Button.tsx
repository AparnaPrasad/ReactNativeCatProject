import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
interface IOwnProps {
    onPressHandler?: () => void,
    children?: React.ReactNode,
    color?: string
}

const defaultColor = 'gray';

const Button = ({ onPressHandler, children, color }: IOwnProps) => {
    return <TouchableOpacity style={[styles.buttonPadding, { backgroundColor: `${color || defaultColor}` }]} onPress={onPressHandler}><Text>{children}</Text></TouchableOpacity>
}

export default Button;

const styles = StyleSheet.create({
    buttonPadding: {
        padding: 10
    }
})