import React from 'react';
import {render} from 'react-dom';
import App from './containers/App/App';

import {Provider} from 'react-redux';
import store from './redux/store';
import './assets/styles/global.scss';


render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);