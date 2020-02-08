import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../ui-kit/Button';
import { useDispatch } from 'react-redux';
import { PageActionDispatcher } from '../store/page-reducer';

export const CustomizePageContent: React.FC = () => {
    const dispatch = useDispatch();
    const pageActionDispatcher = new PageActionDispatcher(dispatch);

    

    const resetButtonHandler = () => {
        pageActionDispatcher.changeColor()
    }

    const getRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    }

    const randomColorButtonHandler = () => {
        const randomColor = getRandomColor();
        pageActionDispatcher.changeColor(randomColor);
    }

    return <View>
        <Text>Customize Page content</Text>
        <View style={styles.buttonContainer}>
            <Button onPressHandler={resetButtonHandler}>Reset</Button>
            <Button onPressHandler={randomColorButtonHandler} color={'green'}>Test button</Button>
        </View>
        </View>
}

export const CustomizePageHeader: React.FC = () => {
    return <Text>Customize  page header</Text>
}

const styles = StyleSheet.create({
    buttonContainer: {
        //display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
})