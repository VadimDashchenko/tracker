import App from './app';
import './styles/styles.css';
import json from './assets/json';
import WebpackLogo from './assets/webpack-logo.png';

const app = new App('Tracker with webpack config', WebpackLogo);
console.log('APP:', app.toString());
console.log('JSON:', json);