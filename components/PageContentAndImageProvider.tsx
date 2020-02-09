import React from 'react';
import { TabIdEnum } from '../utils/constants';
import { HomePageContent, HomePageHeader } from '../pages/HomePage'
import { AboutPageContent, AboutPageHeader } from '../pages/AboutPage';
import { CustomizePageContent, CustomizePageHeader } from '../pages/Customize'
const pageContentAndImageProvider = (tabId: TabIdEnum) => { //A provider to provide content for the pages
    let header = <HomePageHeader />;
    let content = <HomePageContent />
    switch (tabId) {
        case TabIdEnum.HOME:
            return {
                header,
                content
            }
        case TabIdEnum.ABOUT:
            return {
                header: <AboutPageHeader />,
                content: <AboutPageContent/>
            }
        case TabIdEnum.CUSTOMIZE:
            return {
                header: <CustomizePageHeader />,
                content: <CustomizePageContent />
            }
        default:
            return {
                header,
                content
            }
    }
}

export default pageContentAndImageProvider;