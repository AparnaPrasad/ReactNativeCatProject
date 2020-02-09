import React from 'react';
import CatPageTabContainer from './components/CatPageTabContainer/CatPageTabContainer';
import configureStore from './store/createStore';
import { Provider } from 'react-redux';

export default function App() {
    const store = configureStore();

    return <Provider store={store}>
        <CatPageTabContainer />
    </Provider>
}