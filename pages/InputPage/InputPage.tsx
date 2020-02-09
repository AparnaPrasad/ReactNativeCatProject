import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import Button from '../../ui-kit/Button';
import { useDispatch } from 'react-redux';
import { PageActionDispatcher } from '../../store/page-reducer';
interface ReduxProps {
    backgroundColor: string
}

export const InputPageContent: React.FC = () => {
    const dispatch = useDispatch();
    const pageActionDispatcher = new PageActionDispatcher(dispatch);
    const { backgroundColor } = useSelector<ApplicationState, ReduxProps>((state: ApplicationState) => {
        return {
            backgroundColor: state.pageState.backgroundColor,
        }
    });

    const [textInputBackgroundColor, setTextInputBackgroundColor] = useState(backgroundColor);
    const [isValidColor, setIsValidColor] = useState(true);
    
    const changeColorButtonHandler = () => {
        pageActionDispatcher.changeColor(textInputBackgroundColor);
    }

    const checkIsValidColor = (text: string) => {
        const hexVal = text.slice(1, text.length )
        return typeof text === 'string'
            && text.length === 7
            && text.charAt(0) === '#' 
            && !isNaN(Number('0x' + hexVal))
    }

    const onChangeText = (text: string) => {
        setTextInputBackgroundColor(text);
        setIsValidColor(checkIsValidColor(text));
    }

    return <View>
            <TextInput
                style={styles.colorInput}
                onChangeText={(text) => onChangeText(text)}
                value={textInputBackgroundColor}
            />
        {!isValidColor && <Text>Please enter a valid HEX color!</Text>}
        <View style={styles.buttonContainer}>
                {isValidColor && <Button
                    onPressHandler={changeColorButtonHandler}
                    disabled={!isValidColor}
                    color='green'>Set Color</Button>}
        </View>
    </View>
}

export const InputPageHeader: React.FC = () => {
    return <Text style={styles.headerStyle}>Input</Text>
}

const styles = StyleSheet.create({
    colorInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10
    },
    headerStyle: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "center"
    }
})