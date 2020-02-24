import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './assets/styles/global.scss'

const App = () => {
    return (
        <div className="app">
        <h2>Webpack config is done!</h2>
    </div>
    )
};

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);