import { shallow } from "enzyme";
import React from 'react';
import CatPageTabContainer from './CatPageTabContainer';
import { View } from "react-native";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

describe('it should render app without crashing', () => {

    it('should render a view with a background color', () => {
        const wrapper = shallow(<View style={{ backgroundColor: '#fff' }} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should render a view with background color in the redux store', () => {
        const backgroundColor ="#fff"
        let store = mockStore({
            pageState: {
                backgroundColor: backgroundColor
            }
        });

        const CatPageTabContainerRenderer = renderer.create(<Provider store={store}> <CatPageTabContainer /></Provider >)
        const CatPageTabContainerRoot = CatPageTabContainerRenderer.root;
        expect(CatPageTabContainerRoot.findByType(View).props.style).toEqual(expect.arrayContaining([{ backgroundColor}]));
    })
})

