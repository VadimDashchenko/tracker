import './styles/styles.css';
import json from './assets/json';

let newString = '';

export default class App {
    constructor(title){
        this.title = title;
        this.date = new Date()
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date
        })
    }
    get uppercaseTitle() {
        return this.title.toUpperCase()
    }
}