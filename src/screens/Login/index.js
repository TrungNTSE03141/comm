
import React from 'react';
import './styles.local.scss';

import TextChatService from '../../services/TextChatService';

class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            username: ''
        }
    }

    componentDidMount(){
        TextChatService.registerResponse(this.onResponse);
    }

    onTypingHandler = (event) => {
        this.setState({username: event.target.value});
    }

    onKeyUp = (event) => {
        if(event.which === 13 && this.state.username.trim() != ''){
            TextChatService.register(this.state.username);
        }
    }

    onResponse = (response) => {
        this.props.onLoginResponse(response)
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}>
                <div className="form">
                    <h3 className="title">What's your nickname?</h3>
                    <input onChange={this.onTypingHandler} onKeyUp={this.onKeyUp} className="usernameInput" type="text" maxLength="14" />
                </div>
            </div>
        )
    }
}

export default Login