import React from 'react';
import {render} from 'react-dom';
import './babel';
// import App from './app';
import './styles/styles.css';
import './styles/sass.scss';


const App = () => (
    <div>
        <div className="container">
            <h2>Webpack</h2>
        </div>
        <div className="box">
            <h2> Webpack sass!</h2>
        </div>
        <hr />
        <div className="logo" />
    </div>
);


render(
    <App />
    , document.getElementById('root')
);