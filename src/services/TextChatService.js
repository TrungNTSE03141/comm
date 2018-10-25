import socketIOClient from 'socket.io-client';

const END_POINT = "http://ec2-18-136-198-209.ap-southeast-1.compute.amazonaws.com:4002"
let socketClient = socketIOClient(END_POINT);

export default class TextChatService {

    constructor(){
        if(!socketClient){
            socketClient = socketIOClient(END_POINT);
        }
    }

    static register(username){
        socketClient.emit(CONFIGURATIONS.EMIT_TYPES.REGISTER, username);
    }

    static registerResponse(responseCallback){
        socketClient.on(CONFIGURATIONS.EMIT_TYPES.REGISTER, (response) => {
            responseCallback(response);
        })
    }

    static send(message){
        socketClient.emit(CONFIGURATIONS.EMIT_TYPES.TEXT_MESSAGE, message);
    }

    static receive(callback_func){
        socketClient.on(CONFIGURATIONS.EMIT_TYPES.TEXT_MESSAGE, (message) => {
            callback_func(message);
        })
    }
}

const CONFIGURATIONS = {
    EMIT_TYPES: {
        REGISTER: 'Register',
        TEXT_MESSAGE: 'Text Message'
    }
}