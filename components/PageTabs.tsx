import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { tabDetails, TabIdEnum } from '../utils/constants';

interface IOwnProps {
    selectedTab: TabIdEnum,
    selectTab: (selectedTab: TabIdEnum) => void
}

const PageTabs = ({ selectTab }: IOwnProps) => {
     return (<View style={styles.tabContainer}>
        {tabDetails.map((tab) => (<TouchableOpacity key={`tabs-${tab.tabId}`} style={styles.tabItem} onPress={() => {
            selectTab(tab.tabId)
        }}><Text>{tab.tabName}</Text></TouchableOpacity>))}
    </View>)
}

const styles = StyleSheet.create({
    tabContainer: {
        //marginTop: 30,
        //marginTop:20,
        width: '100%',
        backgroundColor: '#ebebeb',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 80
        //height: 70,
        //marginTop: 30,
        //backgroundColor: '#0d0d0d'

    },
    tabItem: {
        padding: 10,
        //marginTop: 10,
        borderColor: 'white',
        borderWidth: 1
        //height: 50
    }
});

export default PageTabs;