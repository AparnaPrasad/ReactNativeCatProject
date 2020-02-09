import { shallow } from "enzyme";
//import Image from 'react-native';
import React from 'react';
import CatPageDisplayContainer from './CatPageDisplayContainer';

describe('CatPageDisplayContainer should render correctly', () => {

    it('should render image with given url and given wodth', () => {
        const imageUrl = 'testurl';
        const width = 50;
        const expectedUrl = `${imageUrl}&width=${width}`
        const wrapper = shallow(<CatPageDisplayContainer imageUrl={imageUrl} content='test content' header='test header' imageWidth={width} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("Image").prop("source")).toEqual({ uri: expectedUrl});
    })
});