
import React from 'react';
import './styles.local.scss';
import { Textbox } from '../Bootstrap';

import TextChatService from '../../services/TextChatService';


class MessageMaker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }
    }

    messageClear = () => {
        this.setState({ message: '' });
    }

    typingHandler = (event) => {
        if (event.which === 13) {
            this.messageSender();
        } else {
            //TODO

        }
    }

    messageSender = () => {
        //TODO
        //Sending message onto server
        TextChatService.send(this.state.message);
        this.props.onSentMessage(this.state.message);
        this.messageClear();
    }

    handleChange = (event) => {
        this.setState({ message: event.target.value });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3"></div>

                <div className="col-sm-6">
                    <Textbox style={{ border: 'none' }} defaultValue={this.state.message} onChange={this.handleChange} onKeyUp={this.typingHandler} />
                </div>
                <div className="col-sm-1">
                    <img width={45} height={45} src={"https://png.pngtree.com/svg/20170629/send_notification_334641.png"} />
                </div>

                <div className="col-sm-2"></div>
            </div>
        )
    }
}

export default MessageMaker