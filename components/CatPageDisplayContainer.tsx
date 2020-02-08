import React from 'react';
import { View, Image } from 'react-native';

interface IOwnProps {
    imageWidth: number,
    header?: React.ReactNode,
    content?: React.ReactNode
}

const CatPageDisplayContainer = ({ imageWidth, header, content }: IOwnProps) => {
    return (<View style={{ flex: 1}}>
        <Image
            style={{ width: '100%', height: '50%' }}
            source={{ uri: `https://cataas.com/cat?width=${imageWidth}&height=149` }} />
        <View>
            {header}
        </View>
        <View>
            {content}
        </View>
        
    </View>)
}

export default CatPageDisplayContainer;