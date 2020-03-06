import React, {Component} from 'react';
import Input from '../../components/Input/Input';
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
            <div className="App">
                <Input handleChange={this.handleChangeInput} name={nameTracker} />
            </div>
        )
    }
}

export default App;