import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TabIdEnum } from '../../utils/constants';
import PageTabs from '../PageTabs/PageTabs';
import TabContentContainer from '../TabContentContainer/TabContentContainer';
import useWidthHeight from '../ScreenWidthHeightProvider/ScreenWidthHeightProvider';
import { ApplicationState } from '../../store';
import { useSelector } from 'react-redux';

interface ReduxProps {
    backgroundColor: string
}

export default function CatPageTabContainer() {
    const [selectedTab, setSelectedTab] = React.useState(0)
    const scrollRef = React.useRef(null);
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
            <ScrollView contentContainerStyle={styles.scrollViewContainerStyle} style={styles.scrollView} ref={scrollRef} >
                <TabContentContainer/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        width: '100%'
    },
    scrollViewContainerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between'
    }
});