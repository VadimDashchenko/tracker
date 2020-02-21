export default class App {
    constructor(title, img){
        this.title = title;
        this.date = new Date();
        this.img = img;
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date,
            img: this.img
        })
    }
    get uppercaseTitle() {
        return this.title.toUpperCase()
    }
}