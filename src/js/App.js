import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from "./store/index";
import MainComponent from "./components/pages";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <MainComponent/>
                </BrowserRouter>
            </Provider>

        );
    }
}

export default App;
