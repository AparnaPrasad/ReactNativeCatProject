import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { tabDetails, TabIdEnum } from '../../utils/constants';

interface IOwnProps {
    selectedTab: TabIdEnum,
    selectTab: (selectedTab: TabIdEnum) => void
}

const PageTabs = ({ selectTab }: IOwnProps) => {
    return (<View style={styles.tabContainer}>
        {tabDetails.map((tab) => (<TouchableOpacity key={`tabs-${tab.tabId}`} style={[styles.tabItem, tab.tabId !== TabIdEnum.INPUT && styles.tabSeparator]} onPress={() => {
            selectTab(tab.tabId)
        }}><Text style={styles.tabText}>{tab.tabName}</Text></TouchableOpacity>))}
    </View>)
}

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        backgroundColor: '#ebebeb',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 80,
    },
    tabItem: {
        padding: 10,
    },
    tabText: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default PageTabs;