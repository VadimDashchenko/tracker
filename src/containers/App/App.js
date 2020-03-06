import React, {Component} from 'react';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import TrackerItem from "@/components/TrackerItem/TrackerItem";
import '../../assets/styles/global.scss';

class App extends Component {

    state = {
        nameTracker: ''
    };

    handleChangeInput = (event) => {
        event.preventDefault();
        this.setState({
            nameTracker: event.target.value
        });
    };

    render() {
        const {nameTracker} = this.state;
        return (
            <div className="app">
                <Title title="tracker" />
                <Input handleChange={this.handleChangeInput} name={nameTracker} />
                <TrackerItem />
            </div>
        )
    }
}

export default App;