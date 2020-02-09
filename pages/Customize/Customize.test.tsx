//import { shallow } from "enzyme";
import React from 'react';
import { CustomizePageContent } from './Customize';
//import { View } from "react-native";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';
import {  PageActionType } from '../../store/page-reducer';
const mockStore = configureStore([]);

describe('Test customize component', () => {
    let store: MockStoreEnhanced<unknown, {}>;
    let component: renderer.ReactTestRenderer;
    beforeEach(() => {
        store = mockStore({
            myState: 'sample text',
        });
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <CustomizePageContent />
            </Provider>
        );

    });

    it('should call changeColor action with undefined on reset button click', () => {

        renderer.act(() => {
            component.root.findAllByType(TouchableOpacity)[0].props.onPress();
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(store.dispatch).toHaveBeenCalledWith(
                {
                    type: PageActionType.CHANGE_COLOR,
                    payload: { backgroundColor: undefined }
                }
            );
        });
    })

    it('should call changeColor action with some random color on randomize button click', () => {

        renderer.act(() => {
            component.root.findAllByType(TouchableOpacity)[1].props.onPress();
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(store.dispatch).toHaveBeenCalledWith(
                {
                    type: PageActionType.CHANGE_COLOR,
                    payload: { backgroundColor: expect.any(String) }
                }
            );
        });
    })
})

