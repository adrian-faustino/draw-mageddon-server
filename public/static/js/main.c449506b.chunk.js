(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},116:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),c=n.n(r),i=n(4),l=n(1),s=n(3),u=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},m={randomNumAllInclusive:u,generateLobbyID:function(e){for(var t="ABCDEFGHIJKLMNPQRSTUVWXYZ123456789",n="",a=0;a<e;a++){n+=t[u(0,t.length-1)]}return n},errorListener:function(e){e.on("success",(function(e){return console.log("Success:",e)})),e.on("err",(function(e){return console.log("Error:",e)}))}},b=(n(52),n(46)),f=n.n(b),d=.9*window.innerHeight,y={VIEW_TIME:7e3,ROUND_TIME:6e4,API:"https://draw-mageddon.herokuapp.com/",MIN_RENDER_TIME:5e3,CANVAS_W:.8*d,CANVAS_H:d},p=(n(86),n(5)),g=n.n(p),h={togglePalette:function(e,t,n){e.preventDefault();var a=!t.openColor;n((function(e){return Object(l.a)(Object(l.a)({},e),{},{openColor:a})}))},toggleLineSize:function(e,t,n){e.preventDefault();var a=!t.openLineSize;n((function(e){return Object(l.a)(Object(l.a)({},e),{},{openLineSize:a})}))},updateColor:function(e,t,n){console.log("Updating color to",e),n((function(t){return Object(l.a)(Object(l.a)({},t),{},{currentColor:e,openColor:!1})}))},updateLineSize:function(e,t,n){console.log("Updating lineSize to",e),n((function(t){return Object(l.a)(Object(l.a)({},t),{},{currentLineSize:e,openLineSize:!1})}))}},E=n(47),w={onMouseOutHandler:function(e){e((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawing:!1})}))},onMouseDownHandler:function(e){e((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawing:!0})}))},onMouseUpHandler:function(e){e((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawing:!1})}))},onMouseMoveHandler:function(e,t,n,a,o){var r=t.coordinates,c=t.drawing,i=t.currentColor,s=t.currentLineSize;if(c){var u=window.innerWidth/2-a/2,m=window.innerHeight/2-o/2,b=e.clientX-u,f=e.clientY-m,d={x:b/=a,y:f/=o,color:i,lineSize:s};n((function(e){return Object(l.a)(Object(l.a)({},e),{},{coordinates:[].concat(Object(E.a)(r),[d]),maxWidth:a,maxHeight:o})}))}},draw:function(e,t){var n=t.x,a=t.y,o=t.color,r=t.lineSize,c=r<20?.8:.2;e.globalAlpha=c,e.strokeStyle=o,e.lineWidth=r,e.lineCap="round",e.beginPath(),e.lineTo(n,a),e.stroke()}};n(103);function _(e){return o.a.createElement("div",null,o.a.createElement("button",{className:"NavButton__btn App__colorScheme--button",onClick:function(t){return function(t){t.preventDefault(),e.changeViewHandler(e.nextView)}(t)}},e.buttonTitle))}n(104);function v(e){var t=e.updateColor,n=e.state,a=e.setState;return o.a.createElement("ul",{className:"Palette__container"},o.a.createElement("li",{onClick:function(){t("brown",n,a)}},o.a.createElement("i",{id:"brownColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("silver",n,a)}},o.a.createElement("i",{id:"silverColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("pink",n,a)}},o.a.createElement("i",{id:"pinkColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("green",n,a)}},o.a.createElement("i",{id:"greenColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("red",n,a)}},o.a.createElement("i",{id:"redColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("orange",n,a)}},o.a.createElement("i",{id:"orangeColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("yellow",n,a)}},o.a.createElement("i",{id:"yellowColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("khaki",n,a)}},o.a.createElement("i",{id:"khakiColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("blue",n,a)}},o.a.createElement("i",{id:"blueColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("violet",n,a)}},o.a.createElement("i",{id:"violetColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("black",n,a)}},o.a.createElement("i",{id:"blackColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("white",n,a)}},o.a.createElement("i",{id:"whiteColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("lightskyblue",n,a)}},o.a.createElement("i",{id:"lightskyblueColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("lightgreen",n,a)}},o.a.createElement("i",{id:"lightgreenColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("purple",n,a)}},o.a.createElement("i",{id:"purpleColor",className:"fas fa-tint"})),o.a.createElement("li",{onClick:function(){t("coral",n,a)}},o.a.createElement("i",{id:"coralColor",className:"fas fa-tint"})))}var j=n(7),O=n.n(j),S=(n(105),{imgStyles:function(e,t){var n={height:"800px",width:"600px",transform:"translate(0, -50%)"};return e&&(n[e]=t),n},imgContainerStyles:function(e,t){var n={height:"400px",width:"300px",overflow:"hidden"};return e&&(n[e]=t),n},containerWrapperStyles:function(e,t){var n={height:"100vh",width:"100vw",display:"grid",justifyContent:"center",alignItems:"center"};return e&&(n[e]=t),n}}),L=S.imgStyles,N=S.imgContainerStyles,C=S.containerWrapperStyles;function V(e){var t=e.myQuadrant,n=e.draggable,a=L(),r=N(),c=C();return"quadrant_1"===t?a.transform="translate(0, 0)":"quadrant_2"===t?a.transform="translate(-50%, 0)":"quadrant_3"===t?a.transform="translate(0, -50%)":"quadrant_4"===t&&(a.transform="translate(-50%, -50%)"),o.a.createElement("div",{style:c},o.a.createElement("div",{className:"MainImage__reference",style:r},o.a.createElement("img",{className:"MainImage__IMG",draggable:n,style:a,src:O.a})))}n(106);function I(e){var t=e.updateLineSize,n=e.state,a=e.setState;return o.a.createElement("ul",{className:"LineSize__container"},o.a.createElement("li",{onClick:function(){t(80,n,a)}},o.a.createElement("i",{id:"sizeXL",className:"fas fa-paint-brush"})),o.a.createElement("li",{onClick:function(){t(45,n,a)}},o.a.createElement("i",{id:"sizeL",className:"fas fa-paint-brush"})),o.a.createElement("li",{onClick:function(){t(20,n,a)}},o.a.createElement("i",{id:"sizeM",className:"fas fa-paint-brush"})),o.a.createElement("li",{onClick:function(){t(6,n,a)}},o.a.createElement("i",{id:"sizeS",className:"fas fa-paint-brush"})))}n(107);var k={formatZero:function(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n},formatMS:function(e){var t=e,n=Math.floor(t/36e5);n>0&&(t-=60*n*60*1e3);var a=Math.floor(t/6e4);a>0&&(t-=60*a*1e3);var o=Math.floor(t/1e3);return o>0&&(t-=1e3*o),{h:n,m:a,s:o,ms:t}}},H={timerStyles:function(e,t){var n={};return e&&(n[e]=t),n}}.timerStyles,D=k.formatZero,A=k.formatMS;function M(e){var t=e.timeInMS,n=e.warningOn,r=Object(a.useState)({ROUND_TIME:t,startTime:Date.now()}),c=Object(s.a)(r,2),i=c[0],l=(c[1],i.ROUND_TIME),u=i.startTime,m=H(),b=l-(new Date-u);b<=0&&(b=0),b<=3e4&&n&&(m.animation="flash--warning 0.4s infinite",m.animationDirection="alternate-reverse");var f=A(b),d=(f.h,f.m),y=f.s,p=(f.ms,D(d,2)),g=D(y,2);return o.a.createElement("div",{className:"InstructionsView__header--timer"},o.a.createElement("span",{style:m,className:""},p,":",g))}var P={silhouetteStyles:function(e,t){var n={transform:"translate(25%, -25%)"};return e&&(n[e]=t),n},slicerStyles:function(e,t){var n={height:null,width:null};return e&&(n[e]=t),n}},x=y.API,z=y.ROUND_TIME,G=y.CANVAS_W,R=y.CANVAS_H,U=P.silhouetteStyles,T=P.slicerStyles;function W(e){var t=e.setGamePromptHandler,n=e.lobbyID,r=e.socket,c=e.changeViewHandler,i=e.myQuadrant,u=e.myLobbyObj,m=e.setFinalCoordinatesHandler,b=Object(a.useState)({coordinates:[],drawing:!1,currentColor:"black",currentLineSize:6,openLineSize:!1,openColor:!1,roundFinished:!1,maxWidth:null,maxHeight:null,opacity:1}),f=Object(s.a)(b,2),d=f[0],y=f[1],p=d.coordinates,E=(d.drawing,d.currentColor),_=(d.currentLineSize,d.openLineSize),j=d.openColor,S=(d.roundTime,d.roundFinished),L=d.maxWidth,N=d.maxHeight,C=d.opacity,V=h.togglePalette,k=h.toggleLineSize,H=h.updateLineSize,D=h.updateColor,A=w.onMouseOutHandler,P=w.onMouseUpHandler,W=w.onMouseDownHandler,q=w.onMouseMoveHandler,Q=w.draw;Object(a.useEffect)((function(){r.on("roundFinished",(function(){console.log("Round finished!");y((function(e){return Object(l.a)(Object(l.a)({},e),{},{roundFinished:!0})}))})),r.on("finalCoordinates",(function(e){console.log("Updating final coordinates....."),m(e),c("ResultsView")})),r.on("fadeSilhouette",(function(e){y((function(t){return Object(l.a)(Object(l.a)({},t),{},{opacity:e})}))})),r.on("err",(function(e){t(e)}))}),[]),Object(a.useEffect)((function(){if(S){var e=Object.keys(u.players).length,t={coordinates:p,lobbyID:n,myQuadrant:i,PLAYERS_IN_ROOM:e};console.log("Game finished. Sending final coordinates...",p),g.a.post(x+"/finalCoords",t).then((function(){})).catch((function(e){return console.log(e)}))}}),[S]);var F=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=F.current.getContext("2d");e.clearRect(0,0,window.innerHeight,window.innerWidth),p.forEach((function(t){var n=t.x,a=t.y,o=t.color,r=t.lineSize;Q(e,{x:n*L,y:a*N,color:o,lineSize:r})}))}));var B,J,Y=U(),X=T(),Z=.9*window.innerHeight*2,K=.8*Z;"quadrant_1"===i?(B="50%",J="50%"):"quadrant_2"===i?(B="50%",J="150%"):"quadrant_3"===i?(B="-50%",J="50%"):"quadrant_4"===i&&(B="-50%",J="150%"),Y.top=B,Y.right=J,Y.opacity=C,X.height=R,X.width=G;return o.a.createElement("div",null,o.a.createElement("div",{className:"InstructionsView__header App__colorScheme--header"},o.a.createElement(M,{warningOn:!0,timeInMS:z}),o.a.createElement("button",{className:"App__colorScheme--palette",onClick:function(e){return function(e){y((function(e){return Object(l.a)(Object(l.a)({},e),{},{openLineSize:!1})})),V(e,d,y)}(e)}},o.a.createElement("i",{style:{color:E},className:"fas fa-palette"})),o.a.createElement("button",{className:"App__colorScheme--palette",onClick:function(e){return function(e){y((function(e){return Object(l.a)(Object(l.a)({},e),{},{openColor:!1})})),k(e,d,y)}(e)}},o.a.createElement("i",{style:{color:E},className:"fas fa-paint-brush"}))),j&&o.a.createElement(v,{setState:y,state:d,updateColor:D}),_&&o.a.createElement(I,{setState:y,state:d,updateLineSize:H}),o.a.createElement("div",{className:"DrawGameView--container"},o.a.createElement("div",{className:"DrawGameView--slicer",style:X},o.a.createElement("img",{className:"DrawGameView--silhouette",style:Y,height:Z,width:K,src:O.a,alt:"silhouette"})),o.a.createElement("canvas",{className:"DrawGameView--canvas",ref:F,width:G,height:R,onMouseOut:function(e){return A(y)},onMouseDown:function(e){return W(y)},onMouseUp:function(e){return P(y)},onMouseMove:function(e){return q(e,d,y,G,R)}})))}n(108),n(109);function q(e){return o.a.createElement("li",null,e.username+" is in the lobby.",o.a.createElement("i",{className:"fas fa-user-minus HostLobbyView__namesList--deleteBtn"}))}var Q=y.API;function F(e){var t=e.myUsername,n=e.socket,r=e.lobbyID,c=e.myLobbyObj,i=e.setMyLobbyObjHandler,u=e.setMyPlayerIDHandler,b=e.setLobbyIDHandler,f=e.changeViewHandler,d=e.setGamePromptHandler,y=(e.myPlayerID,Object(a.useState)({tempInput:"",host:null})),p=Object(s.a)(y,2),h=p[0],E=p[1],w=h.tempInput,v=h.host;Object(a.useEffect)((function(){r&&n.on("newUserJoined",(function(e){var t="".concat(e," has joined the lobby.");d(t),g.a.post(Q+"/reqLobbyInfo",{lobbyID:r}).then((function(e){var t=e.data.myLobbyObj;i(t)})).catch((function(e){d(e)}))}))}),[r]),Object(a.useEffect)((function(){n.on("changeView",(function(e){f(e)})),n.on("userLeft",(function(e){var t=e.myLobbyObj,n=e.leaver,a="".concat(n," has left the lobby.");d(a),i(t)}))}),[]);var j,O=0===t.trim().length?"Hello!":"Hello, ".concat(t,"!");(Object(a.useEffect)((function(){if(c){var e=c.host;E((function(t){return Object(l.a)(Object(l.a)({},t),{},{host:e})})),n.on("cancelGame",(function(t){d("".concat(e," cancelled the game.")),f(t)}))}}),[c]),c&&c.players)&&(console.log("Updating player list..."),j=Object.keys(c.players).map((function(e){var t=c.players[e].username;return o.a.createElement(q,{key:m.generateLobbyID(4),username:t})})));return o.a.createElement("div",{className:"scrolling-background"},o.a.createElement("h1",{className:"GuestLobbyView__container--title App__colorScheme--title"},O),!r&&o.a.createElement("form",{className:"GuestLobbyView__container--IdField"},o.a.createElement("input",{className:"GuestLobbyView__form--codeInput App__colorScheme--inputField",onChange:function(e){var t=e.target.value;E((function(e){return Object(l.a)(Object(l.a)({},e),{},{tempInput:t})}))},placeholder:"Enter Lobby ID"}),o.a.createElement("button",{className:"GuestLobbyView__form--btn App__colorScheme--button",type:"submit",onClick:function(e){return function(e){e.preventDefault(),console.log("Joining room: ".concat(w));var a={lobbyID:w,myUsername:t};g.a.post(Q+"/joinLobby",a).then((function(e){var a=e.data,o=a.myLobbyObj,r=a.myPlayerID;console.log("Successfully joined room:",e.data),u(r),i(o),b(w),n.emit("joinLobby",{lobbyID:w,myUsername:t})})).catch((function(e){var t=e.response.data.err;d(t)}))}(e)}},"Join"),o.a.createElement(_,{nextView:"LandingView",buttonTitle:"Back",changeViewHandler:f})),v&&o.a.createElement("div",{className:"GuestLobbyView__container--namesList"},o.a.createElement("h2",{className:"GuestLobbyView__welcomeMessage App__colorScheme--message"},"Welcome to ",v,"'s lobby!"),"}",o.a.createElement("h2",{className:"GuestLobbyView__namesList--message App__colorScheme--message"},"Waiting for ",v," to start the game..."),"}",o.a.createElement("ul",{className:"GuestLobbyView__namesList App__colorScheme--namesList"},j),"}"))}n(110);var B=m.generateLobbyID,J=y.API;function Y(e){var t=e.setGamePromptHandler,n=e.myUsername,r=e.socket,c=e.lobbyID,i=e.myLobbyObj,l=e.setMyLobbyObjHandler,s=e.setMyPlayerIDHandler,u=e.setLobbyIDHandler,b=e.changeViewHandler;Object(a.useEffect)((function(){var e=B(6),t={genLobbyID:e,myUsername:n};g.a.post(J+"/createLobby",t).then((function(t){var n=t.data;console.log("Created lobby:",n),l(n),u(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){if(c){console.log("Host joining lobby...");var e={lobbyID:c,myUsername:n};g.a.post(J+"/joinLobby",e).then((function(e){var t=e.data,a=t.myLobbyObj,o=t.myPlayerID;console.log("Successfully joined room:",e.data),s(o),l(a),r.emit("joinLobby",{lobbyID:c,myUsername:n})})).catch((function(e){return console.log(e)}))}}),[c]),Object(a.useEffect)((function(){c&&r.on("newUserJoined",(function(e){var n="".concat(e," has joined the lobby.");t(n),g.a.post(J+"/reqLobbyInfo",{lobbyID:c}).then((function(e){var t=e.data.myLobbyObj;console.log("Recieved updated lobbyObj:",t),l(t)})).catch((function(e){return console.log(e)}))}))}),[c]),Object(a.useEffect)((function(){r.on("changeView",(function(e){b(e)})),r.on("userLeft",(function(e){var n=e.myLobbyObj,a=e.leaver,o="".concat(a," has left the lobby.");t(o),l(n)}))}),[]);var f,d=0===n.trim().length?"Hello!":"Hello, ".concat(n,"!");i&&i.players&&(f=Object.keys(i.players).map((function(e){var t=i.players[e].username;return o.a.createElement(q,{key:m.generateLobbyID(4),username:t})})));return o.a.createElement("div",{className:"scrolling-background"},o.a.createElement("h1",{className:"HostLobbyView__container--title App__colorScheme--title"},d),o.a.createElement("div",{className:"HostLobbyView__container--IdField"},o.a.createElement("h2",{className:"App__colorScheme--message"},"Share this code with your friends:"),o.a.createElement("p",{onMouseDown:function(e){return function(e){var n=e.target.innerHTML,a=document.createElement("textarea");a.value=n,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),t("Copied to clipboard!")}(e)},className:"App__colorScheme--code"},c)),o.a.createElement("ul",{className:"HostLobbyView__container--namesList App__colorScheme--namesList"},f),"}",o.a.createElement("div",{className:"HostLobbyView__container--button"},o.a.createElement("button",{className:"HostLobbyView__btn App__colorScheme--button",onClick:function(e){return function(e){e.preventDefault(),console.log("Starting game..."),r.emit("startGame",{lobbyID:c,nextView:"InstructionsView"})}(e)}},"Start game"),o.a.createElement("button",{className:"HostLobbyView__btn App__colorScheme--button",onClick:function(e){return function(e){e.preventDefault();var t={lobbyID:c,nextView:"LandingView"};r.emit("cancelGame",t),b(t.nextView)}(e)}},"Cancel game")))}n(111),n(112);var X=y.VIEW_TIME;function Z(e){var t=e.socket,n=e.changeViewHandler,r=e.myQuadrant,c=Object(a.useState)({tick:!0,interval:null}),i=Object(s.a)(c,2),u=i[0],m=i[1],b=u.tick;u.interval;return Object(a.useEffect)((function(){var e=setInterval((function(){m((function(e){return Object(l.a)(Object(l.a)({},e),{},{tick:!b})})),console.log("RERENDERING!?")}),900);return t.on("changeView",(function(e){n(e)})),function(){clearInterval(e)}}),[]),o.a.createElement("div",{className:"InstructionsView__canvasBackground"},o.a.createElement("div",{className:"InstructionsView__header App__colorScheme--header"},o.a.createElement(M,{timeInMS:X}),o.a.createElement("button",{className:"App__colorScheme--palette"},o.a.createElement("i",{className:"fas fa-palette"})),o.a.createElement("button",{className:"App__colorScheme--palette"},o.a.createElement("i",{className:"fas fa-paint-brush"}))),o.a.createElement("p",{className:"InstructionsView__message--top App__colorScheme--title"},"Your goal is to draw a picture as a team!"),o.a.createElement(V,{draggable:!1,myQuadrant:r}),o.a.createElement("p",{className:"InstructionsView__message--bottom App__colorScheme--title"},"This is your section of the final image. You can choose you colors and brush size above. Good Luck!"))}n(113),n(116);function K(e){var t=e.myUsername,n=e.inputChangeHandler,a=e.changeViewHandler,r=e.setGamePromptHandler,c=t?"Change your username!":"Enter your name!";return o.a.createElement("div",{className:"scrolling-background"},o.a.createElement("h1",{className:"LandingView__titleAnimation"},"Draw-mageddon!"),o.a.createElement("form",{className:"LandingView__container--nameForm"},o.a.createElement("input",{autocomplete:"off",className:"LandingView__form--inputField App__colorScheme--inputField",type:"text",id:"username",placeholder:c,onChange:n})),o.a.createElement("div",{className:"LandingView__btnContainer"},o.a.createElement("div",{onClick:function(){if(!t){r("Please enter a username."),a("LandingView")}}},o.a.createElement(_,{nextView:"HostLobbyView",buttonTitle:"Create a lobby",changeViewHandler:a}),o.a.createElement(_,{nextView:"GuestLobbyView",buttonTitle:"Join a lobby",changeViewHandler:a}))))}n(45);var $=y.MIN_RENDER_TIME,ee=y.CANVAS_W,te=y.CANVAS_H,ne=function(e,t){var n=t._x,a=t._y,o=t.color,r=t.lineSize,c=r<20?.8:.2;e.globalAlpha=c,e.strokeStyle=o,e.lineWidth=r,e.lineCap="round",e.strokeStyle=o,e.lineWidth=r,e.lineTo(n,a),e.stroke()},ae={renderQuadrants:function(e,t){Object.keys(t).forEach((function(n){var a=t[n];"quadrant_1"===n?function(e,t){var n=0;t.forEach((function(a){var o=a.x,r=a.y,c=a.color,i=a.lineSize,l={_x:.5*o*ee,_y:.5*r*te,color:c,lineSize:i};n+=$/t.length+3,setTimeout((function(){e.beginPath(),ne(e,l)}),n)}))}(e,a):"quadrant_2"===n?function(e,t){var n=0;t.forEach((function(a){var o=a.x,r=a.y,c=a.color,i=a.lineSize,l={_x:(.5*o+.5)*ee,_y:.5*r*te,color:c,lineSize:i};n+=$/t.length+3,setTimeout((function(){e.beginPath(),ne(e,l)}),n)}))}(e,a):"quadrant_3"===n?function(e,t){var n=0;t.forEach((function(a){var o=a.x,r=a.y,c=a.color,i=a.lineSize,l={_x:.5*o*ee,_y:(.5*r+.5)*te,color:c,lineSize:i};n+=$/t.length+3,setTimeout((function(){e.beginPath(),ne(e,l)}),n)}))}(e,a):"quadrant_4"===n&&function(e,t){var n=0;t.forEach((function(a){var o=a.x,r=a.y,c=a.color,i=a.lineSize,l={_x:(.5*o+.5)*ee,_y:(.5*r+.5)*te,color:c,lineSize:i};n+=$/t.length+3,setTimeout((function(){e.beginPath(),ne(e,l)}),n)}))}(e,a)}))}},oe=y.CANVAS_W,re=y.CANVAS_H;function ce(e){e.socket;var t=e.changeViewHandler,n=e.finalCoordinates,r=Object(a.useState)({toggleReplay:!1}),c=Object(s.a)(r,2),i=c[0],u=c[1],m=i.toggleReplay,b=ae.renderQuadrants,f=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=f.current.getContext("2d");e.clearRect(0,0,window.innerHeight,window.innerWidth),n&&(console.log("Rendering..."),b(e,n))}));return o.a.createElement("div",{className:"ResultsView__background"},o.a.createElement("div",{className:"ResultsView--container"},o.a.createElement("canvas",{className:"ResultsView--canvas",ref:f,width:oe,height:re}),o.a.createElement("img",{draggable:!1,width:oe,height:re,className:"ResultsView--origImg",src:O.a})),o.a.createElement("div",{className:"ResultsView__container--button"},o.a.createElement("button",{className:"ResultsView__btn App__colorScheme--button",onClick:function(e){return function(e){e.preventDefault(),u((function(e){return Object(l.a)(Object(l.a)({},e),{},{toggleReplay:!m})}))}(e)}},"Replay"),o.a.createElement("button",{className:"ResultsView__btn App__colorScheme--button",onClick:function(e){e.preventDefault(),t("LandingView")}},"Done")))}function ie(e){return o.a.createElement("div",{className:"scrolling-background"},o.a.createElement(_,{nextView:"LandingView",buttonTitle:"New Game",changeViewHandler:e.changeViewHandler}))}var le=y.API;var se=function(){var e,t=Object(a.useState)({view:"LandingView",myUsername:"",socket:null,lobbyID:null,myPlayerID:null,myLobbyObj:null,myQuadrant:null,gamePrompt:null,finalCoordinates:null}),n=Object(s.a)(t,2),r=n[0],c=n[1],u=r.view,b=r.myUsername,d=r.socket,y=r.lobbyID,p=r.myPlayerID,g=r.myLobbyObj,h=r.myQuadrant,E=r.gamePrompt,w=r.finalCoordinates;Object(a.useEffect)((function(){var e=f()(le);c((function(t){return Object(l.a)(Object(l.a)({},t),{},{socket:e})})),m.errorListener(e)}),[]),Object(a.useEffect)((function(){E&&setTimeout((function(){c((function(e){return Object(l.a)(Object(l.a)({},e),{},{gamePrompt:null})}))}),2700)}),[E]),Object(a.useEffect)((function(){"LandingView"===u&&(console.log("Back to App ====>"),c((function(e){return Object(l.a)(Object(l.a)({},e),{},{lobbyID:null,myPlayerID:null,myLobbyObj:null,myQuadrant:null})})))}),[u]);var _=function(e){c((function(t){return Object(l.a)(Object(l.a)({},t),{},{gamePrompt:e})}))},v=function(e){console.log("Setting App component myLobbyObj to",e),c((function(t){return Object(l.a)(Object(l.a)({},t),{},{myLobbyObj:e})}))},j=function(e){console.log("Setting App component myPlayerID to",e),c((function(t){return Object(l.a)(Object(l.a)({},t),{},{myPlayerID:e})}))},O=function(e){console.log("Setting App component lobbyID to",e),c((function(t){return Object(l.a)(Object(l.a)({},t),{},{lobbyID:e})}))},S=function(e){console.log("Updating view to:",e),c((function(t){return Object(l.a)(Object(l.a)({},t),{},{view:e})}))};return Object(a.useEffect)((function(){if(g&&p&&g.players)try{var e=g.players[p].myQuadrant;c((function(t){return Object(l.a)(Object(l.a)({},t),{},{myQuadrant:e})}))}catch(t){console.log("Failed to set quadrant")}}),[p,g]),o.a.createElement("div",{className:"App__container"},E&&o.a.createElement("div",{className:"App__generalGamePrompt-container"},o.a.createElement("h2",{className:"App__generalGamePrompt"},E)),"LandingView"===r.view&&o.a.createElement(K,{setGamePromptHandler:_,myUsername:b,inputChangeHandler:function(e){var t=e.target.value;c((function(e){return Object(l.a)(Object(l.a)({},e),{},{myUsername:t})}))},changeViewHandler:S}),"GuestLobbyView"===r.view&&o.a.createElement(F,(e={setGamePromptHandler:_,myPlayerID:p},Object(i.a)(e,"setGamePromptHandler",_),Object(i.a)(e,"myUsername",r.myUsername),Object(i.a)(e,"socket",d),Object(i.a)(e,"lobbyID",y),Object(i.a)(e,"myLobbyObj",g),Object(i.a)(e,"setMyLobbyObjHandler",v),Object(i.a)(e,"setMyPlayerIDHandler",j),Object(i.a)(e,"setLobbyIDHandler",O),Object(i.a)(e,"changeViewHandler",S),e)),"HostLobbyView"===r.view&&o.a.createElement(Y,{setGamePromptHandler:_,myUsername:b,socket:d,lobbyID:y,myLobbyObj:g,setMyLobbyObjHandler:v,setMyPlayerIDHandler:j,setLobbyIDHandler:O,changeViewHandler:S}),"InstructionsView"===r.view&&o.a.createElement(Z,{myQuadrant:h,socket:r.socket,changeViewHandler:S}),"DrawGameView"===r.view&&o.a.createElement(W,{setGamePromptHandler:_,setFinalCoordinatesHandler:function(e){console.log("Updating final coordinates... in App"),c((function(t){return Object(l.a)(Object(l.a)({},t),{},{finalCoordinates:e})}))},myLobbyObj:r.myLobbyObj,myQuadrant:h,socket:r.socket,lobbyID:r.lobbyID,changeViewHandler:S}),"ResultsView"===r.view&&o.a.createElement(ce,{finalCoordinates:w,socket:r.socket,changeViewHandler:S}),"ShareView"===r.view&&o.a.createElement(ie,{changeViewHandler:S}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(117),n(118);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,n){},48:function(e,t,n){e.exports=n(119)},52:function(e,t,n){},7:function(e,t,n){e.exports=n.p+"static/media/mona-lisa.8ecc35e3.jpg"},83:function(e,t){},86:function(e,t,n){}},[[48,1,2]]]);
//# sourceMappingURL=main.c449506b.chunk.js.map