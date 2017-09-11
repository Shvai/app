import React,{Component} from 'react';

import './App.css';
import TopNav from './components/TopNav/TopNav';
import UserList from './components/User/UserList/UserList';

class App extends Component {

    render() {
        return (
            <div className="App">
                <UserList/>
            </div>
        );
    }
}

export default App;
