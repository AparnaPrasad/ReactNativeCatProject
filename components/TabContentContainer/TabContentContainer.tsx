import React from 'react';
import Card from '../../ui-kit/Card';
import CatPageDisplayContainer from '../CatPageDisplayContainer/CatPageDisplayContainer';
import { View, StyleSheet } from 'react-native';
import { cardHeight, tabDetails } from '../../utils/constants';
import useWidthHeight from '../ScreenWidthHeightProvider/ScreenWidthHeightProvider';
import pageContentAndImageProvider from '../PageContentAndImageProvider/PageContentAndImageProvider';



const TabContentContainer = () => {
    const { screenWidth, screenHeight } = useWidthHeight();
    
    return (<React.Fragment>
        {tabDetails.map((tab) => {
            const { header, content } = pageContentAndImageProvider(tab.tabId);
            return (<View key={`tabContent-${tab.tabId}`} style={[styles.cardContainer, { height: screenHeight }]}>
                <Card width={'100%'} height={cardHeight}>
                    <CatPageDisplayContainer imageWidth={screenWidth} imageUrl={tab.tabImageUrl} header={header} content={content} />
                </Card>
            </View>)
        })
        }
       </React.Fragment>)
}
const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: 'center'
        
    }
})
export default TabContentContainer;