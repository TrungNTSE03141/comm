import React, { Component } from 'react';
import MessageBoard from './components/MessageBoard';
import MessageMaker from './components/MessageMaker';

import Login from '../src/screens/Login';

import TextMessageService from './services/TextChatService';


Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [

      ],
      isLoggedIn: false
    }
  }

  componentDidMount() {
    TextMessageService.receive(this.messageReceived);
  }

  messageReceived = (message) => {
    this.onSentMessage(message.message);
  }

  onSentMessage = (message) => {
    let messages = this.state.messages;
    messages = messages.splice(messages.length, 0, {
      content: message,
      friend: false
    });

    this.setState({ message: messages });
  }

  onLoginResponse = (response) => {
    if(response.code === 1){
      this.setState({isLoggedIn: true});
    }else{

    }
  }


  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="App">
          <header className="App-header"></header>

          <MessageBoard messages={this.state.messages} />

          <MessageMaker onSentMessage={this.onSentMessage} />
        </div>
      )
    } else {
      return (
        <div className="App" style={{ backgroundColor: 'black' }}>
          <Login onLoginResponse={this.onLoginResponse} />
        </div>
      )
    }
  }
}

export default App;
