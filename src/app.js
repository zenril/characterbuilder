import { scope } from './scope';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from "react-router-dom";
import { Character } from './pages/character';
import { Login } from './pages/login';
import config from "../_config.js";
import { settings } from './helper/AppSettings';
import { GoogleLogin, GoogleLogout  } from 'react-google-login';

class App extends React.Component
{
    constructor(props){
        super(props);
        var _this = this;

        this.state = {
            loaded : false
        }
    }

    componentWillUnmount()
    {
    }

    componentDidMount()
    {
    }

    render()
    {
        return (
            <div className="c-sheet">
                <Router history={scope.history}>
                    <div>
                        <Route path="/login" component={Login} />
                        <Route path="/character" component={Character} />
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("interface"));
