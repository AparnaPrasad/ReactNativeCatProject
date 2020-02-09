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

export const cardHeight = 450;
const imageUrlBase = 'https://cataas.com/cat?height=';
const imageHeight = cardHeight / 2;

export const tabDetails: T_TabDetails[] = [
    {
        tabId: TabIdEnum.HOME,
        tabName: 'Home',
        tabImageUrl: `${imageUrlBase}${imageHeight+TabIdEnum.HOME}` //adding to get random inage for different cards
        
    },
    {
        tabId: TabIdEnum.ABOUT,
        tabName: 'About',
        tabImageUrl: `${imageUrlBase}${imageHeight+TabIdEnum.ABOUT}`
    },
    {
        tabId: TabIdEnum.CUSTOMIZE,
        tabName: 'Customize',
        tabImageUrl: `${imageUrlBase}${imageHeight+TabIdEnum.CUSTOMIZE}`
    }
]


export const defaultBackgroundColor = '#ebf6ff';

export const tabHeight = 80;