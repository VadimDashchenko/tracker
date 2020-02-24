import React from 'react';
import {render} from 'react-dom';
import './assets/styles/global.scss'

const App = () => {
    return (
        <div className="app">
        <h2>Webpack config is done!</h2>
    </div>
    )
}

render(<App />, document.getElementById('root'));