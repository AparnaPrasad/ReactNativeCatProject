import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
interface IOwnProps {
    onPressHandler?: () => void,
    children?: React.ReactNode,
    color?: string,
    disabled?: boolean,
    testID?: string
}

const defaultColor = 'gray';

const Button = ({ onPressHandler, children, color, disabled,testID }: IOwnProps) => {
    return <TouchableOpacity testID={testID} disabled={disabled || false} style={[styles.buttonPadding, { backgroundColor: `${color || defaultColor}` }]} onPress={onPressHandler}><Text>{children}</Text></TouchableOpacity>
}

export default Button;

const styles = StyleSheet.create({
    buttonPadding: {
        padding: 10
    }
})