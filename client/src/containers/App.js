import React,{Component} from 'react';

import './App.css';
import SearchableUserList from './SearchableUserList';

class App extends Component {

    render() {
        return (
            <div className="App">
                <SearchableUserList/>
            </div>
        );
    }
}

export default App;
