interface T_TabDetails {
    tabName: string,
    tabImageUrl: string,
    tabId: TabIdEnum
}

export enum TabIdEnum {
    HOME,
    ABOUT,
    CUSTOMIZE
}

export const tabDetails: T_TabDetails[] = [
    {
        tabId: TabIdEnum.HOME,
        tabName: 'Home',
        tabImageUrl: '',
        
    },
    {
        tabId: TabIdEnum.ABOUT,
        tabName: 'About',
        tabImageUrl: ''
    },
    {
        tabId: TabIdEnum.CUSTOMIZE,
        tabName: 'Customize',
        tabImageUrl: ''
    }
]

export const cardHeight = 300;

export const defaultBackgroundColor = '#4c4453';