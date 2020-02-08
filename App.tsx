import React from 'react';
import ReactPage from './components/ReactPage';
import configureStore from './store/createStore';
import { Provider } from 'react-redux';

export default function App() {
    const store = configureStore();

    return <Provider store={store}>
        <ReactPage />
    </Provider>
}