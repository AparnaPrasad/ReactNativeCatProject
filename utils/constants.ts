interface T_TabDetails {
    tabName: string,
    tabImageUrl: string,
    tabId: TabIdEnum
}

export enum TabIdEnum {
    HOME,
    ABOUT,
    CUSTOMIZE,
    INPUT
}

export const cardHeight = 450;
const imageUrlBase = 'https://cataas.com/cat?height=';
const imageHeight = cardHeight / 2;

export const tabDetails: T_TabDetails[] = [
    {
        tabId: TabIdEnum.HOME,
        tabName: 'Home',
        tabImageUrl: `${imageUrlBase}${imageHeight+TabIdEnum.HOME}` //adding enum val to get different images for different cards
        
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
    },
    {
        tabId: TabIdEnum.INPUT,
        tabName: 'Input',
        tabImageUrl: `${imageUrlBase}${imageHeight + TabIdEnum.INPUT}`
    }
]


export const defaultBackgroundColor = '#ebf6ff';

export const tabHeight = 80;

export const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Vestibulum morbi blandit cursus risus at ultrices mi. Sit amet est placerat in egestas erat imperdiet sed euismod. A lacus vestibulum sed arcu non odio euismod lacinia."