import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface IOwnProps {
    imageWidth: number,
    header?: React.ReactNode,
    content?: React.ReactNode,
    imageUrl: string
}

const CatPageDisplayContainer = ({ imageWidth, header, content, imageUrl }: IOwnProps) => {
    return (<View style={styles.imageAndContentContainer}>
        <Image
            style={styles.catImageContainer}
            source={{ uri: `${imageUrl}&width=${imageWidth}` }} />
        <View style={styles.contentContainer}>
            <View>
                {header}
            </View>
            <View>
                {content}
            </View>
        </View>
        
    </View>)
}

export default CatPageDisplayContainer;

const styles = StyleSheet.create({
    imageAndContentContainer: {
        flex: 1
    },
    catImageContainer: {
        width: '100%',
        height: '50%'
    },
    contentContainer: {
        padding: 20
    }
})