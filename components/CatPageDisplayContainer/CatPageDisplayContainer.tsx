import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

interface IOwnProps {
    imageWidth: number,
    header?: React.ReactNode,
    content?: React.ReactNode,
    imageUrl: string
}

const CatPageDisplayContainer = ({ imageWidth, header, content, imageUrl }: IOwnProps) => {
    return (<View style={styles.imageAndContentContainer}>
        <Image
            testID='catImage'
            style={styles.catImageContainer}
            source={{ uri: `${imageUrl}&width=${imageWidth}` }} />
        <View style={styles.contentContainer}>
            <View style={styles.headerPadding}>
                {header}
            </View>
            <ScrollView style={styles.scrollStyle}>
                {content}
            </ScrollView>
        </View>
    </View>)
}

export default CatPageDisplayContainer;

const styles = StyleSheet.create({
    imageAndContentContainer: {
        flex: 1
    },
    scrollStyle: {
        flex: 1
    },
    catImageContainer: {
        width: '100%',
        height: '50%'
    },
    contentContainer: {
        padding: 20,
        height: '50%'
    },
    headerPadding: {
        paddingVertical: 20
    }
})