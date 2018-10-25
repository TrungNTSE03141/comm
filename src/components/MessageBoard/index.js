
import React from 'react';
import './styles.local.scss';
import { Message } from '../Bootstrap';

class MessageBoard extends React.Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();

        // navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        //     .then(stream => {
        //         const video = document.getElementById("localStream");

        //         video.srcObject = stream;

        //         video.onloadedmetadata = function(){
        //             video.play();
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="row border-top" style={{ marginTop: 150 }}>
                <div className="col-sm-3 border-right" style={{ borderRight: 1 }}>
                    <video id="localStream" width="95%" controls style={{ paddingLeft: 20, paddingTop: 20 }}></video>
                </div>

                <div className="col-sm-6">
                    <div style={{ height: 'calc(100vh - 310px)', overflow: 'auto', marginTop: 10 }}>
                        {
                            this.props.messages.map((message, index) => {
                                return (
                                    <div key={index} className="row">
                                        <div className="col-sm-1">
                                            {
                                                message.friend ? <img width={50} height={50} style={{ marginBottom: 10 }} src={"https://www.w3schools.com/bootstrap4/paris.jpg"} className="rounded-circle" alt="AV" /> : null
                                            }
                                        </div>
                                        <div className="col-sm-11">
                                            {
                                                message.friend ? <Message content={message.content} /> : <Message content={message.content} style={{ float: 'right' }} />
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div style={{ float: "left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="col-sm-3 border-left">

                </div>
            </div>
        )
    }
}

export default MessageBoard