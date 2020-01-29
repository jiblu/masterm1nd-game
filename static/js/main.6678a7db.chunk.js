(this.webpackJsonpmastermind=this.webpackJsonpmastermind||[]).push([[0],{46:function(e,t,n){e.exports=n(79)},51:function(e,t,n){},75:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),c=n.n(i),l=n(23),o=(n(51),n(12)),u=n(13),s=n(15),d=n(14),m=n(16),h=n(17),f=function(e){return r.a.createElement("div",null,"Header")},b=n(38),v=n(7),p=n(39),g=n.n(p),E=n(22),j=n.n(E),O=(n(71),n(2)),x=n(3);function y(){var e=Object(O.a)(["\n  margin: 10px auto;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n"]);return y=function(){return e},e}var w=x.b.div(y()),C={primary:"#0288D1",primaryAccent:"#f8f8ff",secondary:"#303030",secondaryAccent:"#a9a9a9",black:"#000000",light:"#E8E8E8",white:"#FFFFFF"},k={buttonWidth:140,radiusSmall:5,fontSize:{small:10,medium:18,large:30}};function G(){var e=Object(O.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: ","px;\n  font-size: ","px;\n  width: ","px;\n  margin: 5px;\n  padding: 5px;\n  cursor: pointer;\n  &:hover {\n    font-size: calc(","px + 2px)\n  } \n\n"]);return G=function(){return e},e}var S=x.b.button(G(),C.primary,C.primaryAccent,k.radiusSmall,k.fontSize.medium,k.buttonWidth,k.fontSize.medium);function z(){var e=Object(O.a)(["\n    color: ","\n  "]);return z=function(){return e},e}function N(){var e=Object(O.a)(["\n    font-size: ","px\n  "]);return N=function(){return e},e}function M(){var e=Object(O.a)(["\n    text-align: ","\n  "]);return M=function(){return e},e}function H(){var e=Object(O.a)(["\n  ",";\n  ",";\n  ",";\n"]);return H=function(){return e},e}var A=x.b.div(H(),(function(e){return e.align&&Object(x.a)(M(),e.align)}),(function(e){return e.size&&Object(x.a)(N(),k.fontSize[e.size])}),(function(e){return e.color&&Object(x.a)(z(),C[e.color])}));function P(){var e=Object(O.a)(["\n    align-items: ","\n  "]);return P=function(){return e},e}function L(){var e=Object(O.a)(["\n    justify-content: ","\n  "]);return L=function(){return e},e}function F(){var e=Object(O.a)(["\n    flex-direction: column\n  "]);return F=function(){return e},e}function W(){var e=Object(O.a)(["\n  display: flex;\n  ",";\n  ",";\n  ","\n"]);return W=function(){return e},e}var Y=x.b.div(W(),(function(e){return e.vertical&&Object(x.a)(F())}),(function(e){return e.justify&&Object(x.a)(L(),e.justify)}),(function(e){return e.align&&Object(x.a)(P(),e.align)})),J=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,"Game rules"),r.a.createElement("div",null,"The computer will randomly select a pattern of four different numbers from a total of 8 different numbers (0 - 7)"),r.a.createElement("div",null,"You will have 10 attempts to guess the number combinations"),r.a.createElement("div",null,"At the end of each guess, the computer will provide blah blah blah"))},B=function(e){return r.a.createElement("div",null,"Leaderboard Page")},D=n(20),I=n.n(D);function T(){var e=Object(O.a)(["\n  color: ",";\n  display: inline-block;\n  width: 100px;\n"]);return T=function(){return e},e}var U=x.b.label(T(),C.black),$=function(e){return r.a.createElement(U,null,e.text)};function q(){var e=Object(O.a)(["\n  border-color: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: calc(","px - 2px);\n  font-size: ","px;\n  width: ","px;\n  margin: 5px;\n  padding: 5px;\n  cursor: pointer;\n"]);return q=function(){return e},e}var K=x.b.input(q(),C.secondaryAccent,C.light,C.secondary,k.radiusSmall,k.fontSize.small,k.buttonWidth),Q=function(e){return r.a.createElement("div",null,r.a.createElement($,{text:e.text}),r.a.createElement(K,{placeholder:e.placeholder,onChange:function(t){return e.onChangeHandler(e.id,t)},value:e.value}))};function R(){var e=Object(O.a)(["\n  margin: 15px;\n  padding: 15px;\n  border: 1px "," solid;\n  border-radius: ","px;\n"]);return R=function(){return e},e}var V=x.b.div(R(),C.light,k.radiusSmall),X=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"guest",level:1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChangeHandler",value:function(e,t){this.setState(Object(v.a)({},e,t.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement(V,null,r.a.createElement(Y,{vertical:!0,align:"center"},r.a.createElement(Y,{align:"center"},r.a.createElement(I.a,{color:"action"}),r.a.createElement(A,{size:"medium",color:"secondary"},"Game Settings"),r.a.createElement(I.a,{color:"action"})),r.a.createElement("div",{style:{margin:"10px 20px"}},r.a.createElement(Q,{text:"username",id:"username",placeholder:"leave blank for guest",onChangeHandler:this.onChangeHandler.bind(this)}),r.a.createElement(Q,{text:"level",id:"level",placeholder:"choose between 1-10",onChangeHandler:this.onChangeHandler.bind(this)})),r.a.createElement(S,{onClick:function(){return e.props.onCreateNewGame(e.state)}},"New Game")))}}]),t}(a.Component);function Z(){var e=Object(O.a)(["\n  padding: 1em;\n  background: ",";\n  border-bottom: 2px solid ",";\n  text-align: center\n"]);return Z=function(){return e},e}function _(){var e=Object(O.a)(["\n  padding: 1em;\n  background: ",";\n  border-bottom: 2px solid ",";\n"]);return _=function(){return e},e}function ee(){var e=Object(O.a)(["\n\n"]);return ee=function(){return e},e}function te(){var e=Object(O.a)(["\n  border-collapse: collapse;\n  border-radius: ","px;\n  overflow: hidden;\n"]);return te=function(){return e},e}var ne=x.b.table(te(),k.radiusSmall),ae=x.b.tr(ee()),re=x.b.th(_(),C.light,C.white),ie=x.b.td(Z(),C.light,C.white),ce=function(e){return r.a.createElement(ne,null,r.a.createElement(ae,null,r.a.createElement(re,null,"Your Guess"),r.a.createElement(re,null,"Correct Numbers"),r.a.createElement(re,null,"Correct Numbers AND Places")),e.guesses.map((function(e,t){return r.a.createElement(ae,{key:t},r.a.createElement(ie,null,e.guess),r.a.createElement(ie,null,e.feedback.nums),r.a.createElement(ie,null,e.feedback.numPlaces))})))};function le(){var e=Object(O.a)(["\n"]);return le=function(){return e},e}var oe=x.b.div(le()),ue=function(e){return r.a.createElement(oe,null,r.a.createElement(Y,{vertical:!0,align:"center"},r.a.createElement(A,{size:"medium"},e.result),r.a.createElement(S,{onClick:function(){return e.exitGame()}},"Play Again")))};function se(){var e=Object(O.a)(["\n  margin: 15px;\n  padding: 15px;\n  border: 1px "," solid;\n  border-radius: ","px;\n"]);return se=function(){return e},e}var de=x.b.div(se(),C.light,k.radiusSmall),me=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={guesses:[],currentGuess:"",notification:"",status:"playing",secretCode:n.props.secretCode,guessesLeft:10},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onSubmitGuess",value:function(){var e=this,t=this.state.currentGuess;this.validateGuess(t)?this.setState({notification:""},(function(){e.setState({guessesLeft:10-e.state.guesses.length,currentGuess:""})})):this.setState({notification:"guess must be a four digit number between 0 and 7"})}},{key:"validateGuess",value:function(e){var t=!0,n={},a={},r=0,i=0,c=this.state.secretCode;if(4!==e.length||isNaN(e))return!1;for(var l=0;l<e.length;l++){var o=e[l];8===Number(o)||9===Number(o)?t=!1:n.hasOwnProperty(o)?(n[o].indices[l]=l,n[o].count++):(n[o]={},n[o].indices=Object(v.a)({},l,l),n[o].count=1)}if(t){for(var u=0;u<c.length;u++){var s=c[u];a.hasOwnProperty(s)?(a[s].indices[u]=u,a[s].count++):(a[s]={},a[s].indices=Object(v.a)({},u,u),a[s].count=1)}for(var d in a)if(n.hasOwnProperty(d))for(var m in r+=Math.min(a[d].count,n[d].count),a[d].indices)n[d].indices.hasOwnProperty(m)&&(i++,r--),4===i&&this.setState({status:"win"});var h=this.state.guesses.slice(0),f={guess:e,feedback:{nums:r,numPlaces:i}};h.push(f),this.setState({guesses:h})}return t}},{key:"onChangeHandler",value:function(e,t){this.setState(Object(v.a)({},e,t.target.value))}},{key:"render",value:function(){var e=this;switch(this.state.status){case"win":return r.a.createElement(ue,{result:"You Win!",exitGame:this.props.onExitGame});case"lose":return r.a.createElement(ue,{result:"You Lose!",exitGame:this.props.onExitGame});default:return r.a.createElement(de,null,r.a.createElement(Y,{vertical:!0,align:"center"},r.a.createElement(Y,{align:"center"},r.a.createElement(I.a,{color:"action"}),r.a.createElement(A,{size:"medium",color:"secondary"},"Game"),r.a.createElement(I.a,{color:"action"})),r.a.createElement(S,{id:"confirmexit",onClick:function(t){return e.props.onExitGame(t)}},"I give up!"),r.a.createElement("div",{style:{margin:"10px 20px"}},r.a.createElement("div",null,"Guesses Left: ",this.state.guessesLeft),r.a.createElement("div",null,"Username: ",this.props.username),r.a.createElement("div",null,"SecretCode: ",JSON.stringify(this.props.secretCode)),r.a.createElement(Q,{text:"Current Guess",id:"currentGuess",placeholder:"please enter four digit number",onChangeHandler:this.onChangeHandler.bind(this),value:this.state.currentGuess}),this.state.notification),r.a.createElement(S,{id:"submitGuess",onClick:this.onSubmitGuess.bind(this)},"Submit Guess"),r.a.createElement(ce,{guesses:this.state.guesses})))}}}]),t}(a.Component),he=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showrules:!1,showleaderboard:!1,currentModal:"",live:!1,username:"",level:"",secretCode:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"showModal",value:function(e){var t,n="show".concat(e.target.id);this.setState((t={},Object(v.a)(t,n,!0),Object(v.a)(t,"currentModal",n),t))}},{key:"hideModal",value:function(){this.setState(Object(v.a)({},this.state.currentModal,!1))}},{key:"createNewGame",value:function(e){var t=this,n=e.username,a=e.level;this.generateCode().then((function(e){t.setState(Object(b.a)({},t.state,{secretCode:e,username:n,level:a,live:!0}))}))}},{key:"generateCode",value:function(){return g.a.get("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new").then((function(e){return e.data.split("\n").slice(0,4).join("")})).catch((function(e){return console.log("error getting code: ".concat(e))}))}},{key:"exitGame",value:function(){this.setState({live:!1})}},{key:"render",value:function(){var e=this.state.live?r.a.createElement(me,{username:this.state.username,onExitGame:this.exitGame.bind(this),secretCode:this.state.secretCode}):r.a.createElement(X,{onCreateNewGame:this.createNewGame.bind(this)});return r.a.createElement(w,null,r.a.createElement(A,{align:"center",size:"large"},"Mastermind"),r.a.createElement(Y,{justify:"center"},r.a.createElement(S,{id:"rules",onClick:this.showModal.bind(this)},"How To Play"),r.a.createElement(S,{id:"leaderboard",onClick:this.showModal.bind(this)},"Leaderboard")),e,r.a.createElement(j.a,{visible:this.state.showrules,onClose:this.hideModal.bind(this)},r.a.createElement(J,null)),r.a.createElement(j.a,{visible:this.state.showleaderboard,onClose:this.hideModal.bind(this)},r.a.createElement(B,null)),r.a.createElement(j.a,{visible:this.state.showconfirmexit,onClose:this.hideModal.bind(this)},r.a.createElement(B,null)))}}]),t}(a.Component),fe=(n(75),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",render:function(){return r.a.createElement(he,null)}}),r.a.createElement(h.a,{path:"/rules",render:function(){return r.a.createElement(J,null)}})))}}]),t}(a.Component)),be=Object(h.f)(fe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.6678a7db.chunk.js.map