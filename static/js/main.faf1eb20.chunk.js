(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);n(43),n(45);var a=n(0),s=n.n(a),o=n(41),r=n.n(o),c=(n(51),n(2)),i=n(3),l=n(6),m=n(5),u=n(7);n(53),n(55);function d(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"message",style:e.style},e.content))}function h(e){return s.a.createElement("textarea",{placeholder:"Type a message here",value:e.defaultValue,onChange:e.onChange,onKeyUp:e.onKeyUp,className:"form-control",rows:"3",id:e.id,style:e.style})}var p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).scrollToBottom=function(){n.messagesEnd.scrollIntoView({behavior:"smooth"})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"row border-top",style:{marginTop:150}},s.a.createElement("div",{className:"col-sm-3 border-right",style:{borderRight:1}},s.a.createElement("video",{id:"localStream",width:"95%",controls:!0,style:{paddingLeft:20,paddingTop:20}}),s.a.createElement("video",{id:"remoteStream",width:"95%",controls:!0,style:{paddingLeft:20,paddingTop:20}})),s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{style:{height:"calc(100vh - 310px)",overflow:"auto",marginTop:10}},this.props.messages.map(function(e,t){return s.a.createElement("div",{key:t,className:"row"},s.a.createElement("div",{className:"col-sm-1"},e.friend?s.a.createElement("img",{width:50,height:50,style:{marginBottom:10},src:"https://www.w3schools.com/bootstrap4/paris.jpg",className:"rounded-circle",alt:"AV"}):null),s.a.createElement("div",{className:"col-sm-11"},e.friend?s.a.createElement(d,{content:e.content}):s.a.createElement(d,{content:e.content,style:{float:"right"}})))}),s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}})),s.a.createElement("hr",null)),s.a.createElement("div",{className:"col-sm-3 border-left"}))}}]),t}(s.a.Component),g=(n(57),n(22)),f=n.n(g),v="http://ec2-18-136-198-209.ap-southeast-1.compute.amazonaws.com:4002",E=f()(v),y=function(){function e(){Object(c.a)(this,e),E||(E=f()(v))}return Object(i.a)(e,null,[{key:"register",value:function(e){E.emit(b.EMIT_TYPES.REGISTER,e)}},{key:"registerResponse",value:function(e){E.on(b.EMIT_TYPES.REGISTER,function(t){e(t)})}},{key:"send",value:function(e){E.emit(b.EMIT_TYPES.TEXT_MESSAGE,e)}},{key:"receive",value:function(e){E.on(b.EMIT_TYPES.TEXT_MESSAGE,function(t){e(t)})}}]),e}(),b={EMIT_TYPES:{REGISTER:"Register",TEXT_MESSAGE:"Text Message"}},w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).messageClear=function(){n.setState({message:""})},n.typingHandler=function(e){13===e.which&&n.messageSender()},n.messageSender=function(){y.send(n.state.message),n.props.onSentMessage(n.state.message),n.messageClear()},n.handleChange=function(e){n.setState({message:e.target.value})},n.state={message:""},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-3"}),s.a.createElement("div",{className:"col-sm-6"},s.a.createElement(h,{style:{border:"none"},defaultValue:this.state.message,onChange:this.handleChange,onKeyUp:this.typingHandler})),s.a.createElement("div",{className:"col-sm-1"},s.a.createElement("img",{width:45,height:45,src:"https://png.pngtree.com/svg/20170629/send_notification_334641.png"})),s.a.createElement("div",{className:"col-sm-2"}))}}]),t}(s.a.Component),S=(n(86),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).onTypingHandler=function(e){n.setState({username:e.target.value})},n.onKeyUp=function(e){13===e.which&&""!=n.state.username.trim()&&y.register(n.state.username)},n.onResponse=function(e){n.props.onLoginResponse(e)},n.state={username:""},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){y.registerResponse(this.onResponse)}},{key:"render",value:function(){return s.a.createElement("div",{style:{height:"100vh",width:"100vw",backgroundColor:"black"}},s.a.createElement("div",{className:"form"},s.a.createElement("h3",{className:"title"},"What's your nickname?"),s.a.createElement("input",{onChange:this.onTypingHandler,onKeyUp:this.onKeyUp,className:"usernameInput",type:"text",maxLength:"14"})))}}]),t}(s.a.Component)),T=n(23),j=n.n(T),k="lwjd5qra8257b9",O=new(function(){function e(){var t=this;Object(c.a)(this,e),this.peerInstance=null,this.openStream=function(){return navigator.mediaDevices.getUserMedia({audio:!1,video:!0})},this.playVideoStream=function(e,t){e.srcObject=t,e.play()},this.openConnect=function(e){t.peerInstance.on("open",e)},this.ReceiveCall=function(e,n){t.peerInstance.on("call",function(a){t.openStream().then(function(s){a.answer(s),t.playVideoStream(e,s),a.on("stream",function(e){return t.playVideoStream(n,e)})})})},this.Call=function(e,n,a){t.openStream().then(function(s){t.playVideoStream(n,s),t.peerInstance.call(e,s).on("stream",function(e){return t.playVideoStream(a,e)})})},this.peerInstance||(this.peerInstance=new j.a({key:k}))}return Object(i.a)(e,[{key:"PeerInstance",get:function(){return this.peerInstance||(this.peerInstance=new j.a({key:k})),this.peerInstance}}]),e}()),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).messageReceived=function(e){n.onShowMessage(e)},n.onSentMessage=function(e){n.onShowMessage(e)},n.onLoginResponse=function(e){1===e.code?n.setState({isLoggedIn:!0,username:e.username}):alert(e.message)},n.onShowMessage=function(e){var t=n.state.messages;t=e.username?t.splice(t.length,0,{content:e.message,friend:e.username!=n.state.username,username:e.username}):t.splice(t.length,0,{content:e,friend:!1,username:n.state.username}),n.setState({message:t})},n.state={messages:[],isLoggedIn:!1,username:""},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){y.receive(this.messageReceived),O.openConnect(function(e){console.log(e)})}},{key:"render",value:function(){return this.state.isLoggedIn?s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"}),s.a.createElement(p,{messages:this.state.messages}),s.a.createElement(w,{onSentMessage:this.onSentMessage})):s.a.createElement("div",{className:"App",style:{backgroundColor:"black"}},s.a.createElement(S,{onLoginResponse:this.onLoginResponse}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,n){e.exports=n(105)},51:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},83:function(e,t){},86:function(e,t,n){}},[[42,2,1]]]);
//# sourceMappingURL=main.faf1eb20.chunk.js.map