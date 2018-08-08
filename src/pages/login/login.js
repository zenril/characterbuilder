
import { scope } from '../../scope';
import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout  } from 'react-google-login';
import config from "../../../_config.js";

        

export class Login extends React.Component
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

    handleLogin(r) {
        scope.history.push('/character');
    }

    handleFail (r) {
    }

    render()
    {
        return (
            <div className="c-login">
                <GoogleLogin
                    clientId={config.gdriveAuthKey}
                    scope={config.scope}
                    onSuccess={r => this.handleLogin(r)}
                    onFailure={r => this.handleFail(r)} >
                </GoogleLogin>
            </div>
        );
    }
}
