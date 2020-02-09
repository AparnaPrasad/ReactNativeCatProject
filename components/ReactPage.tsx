import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TabIdEnum, tabHeight } from '../utils/constants';
import PageTabs from './PageTabs';
import TabContentContainer from './TabContentContainer';
import useWidthHeight from './ScreenWidthHeightProvider';
import { ApplicationState } from '../store';
import { useSelector } from 'react-redux';

interface ReduxProps {
    backgroundColor: string
}

export default function ReactPage() {
    const [selectedTab, setSelectedTab] = React.useState(0)
    const scrollRef = React.useRef();
    const { screenHeight } = useWidthHeight();
    //const effectiveHeight = screenHeight;
    const { backgroundColor } = useSelector<ApplicationState, ReduxProps>((state: ApplicationState) => {
        return {
            backgroundColor: state.pageState.backgroundColor,
        }
    });

    const selectTab = (tabId: TabIdEnum) => {
        setSelectedTab(0);
        if (scrollRef && scrollRef.current) {
            scrollRef.current.scrollTo({ x: 0, y: (tabId * screenHeight), animated: true })
        }
    }

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <PageTabs selectedTab={selectedTab} selectTab={selectTab} />
            
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} style={styles.scrollView} ref={scrollRef} >
                <TabContentContainer/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        //height: '100vh'
    },
    //tabContainer: {
    //    //marginTop: 30,
    //    //marginTop:20,
    //    flexDirection: 'row',
    //    height: 50
    //},
    //tabItem: {
    //    padding: 10
    //},
    //logo: {
    //    width: 305,
    //    height: 159,
    //    marginBottom: 20,
    //},
    //instructions: {
    //    color: '#888',
    //    fontSize: 18,
    //    marginHorizontal: 15,
    //    marginBottom: 10,
    //},
    scrollView: {
        //backgroundColor: 'pink',
        //margin: 20,
        width: '100%'
    },
    //text: {
    //    fontSize: 42,
    //},
    
});