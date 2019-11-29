(window["webpackJsonpstarnavi-game"]=window["webpackJsonpstarnavi-game"]||[]).push([[0],{20:function(e,t,n){e.exports={leader__list:"LeaderListSection_leader__list__2AzYC",leader__container:"LeaderListSection_leader__container__3qDAs"}},33:function(e,t,n){e.exports={game__display:"GameDisplaySection_game__display__1lzDW"}},34:function(e,t,n){e.exports={game__container:"MainPage_game__container__3kgEm"}},36:function(e,t,n){e.exports=n(67)},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(10),c=n.n(l),i=n(2),s=n(16),o=n(8),u=n(31),m=n.n(u),d=function e(t,n){var r,a=(r=t,Math.floor(Math.random()*r));return 0===a?e(t,n):(n.includes(a)&&(a+=1),n.includes(a)||a>t?e(t,n):a)},p=function(e){var t=e.setPlayerName,n=e.disabled;return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"text",onChange:function(e){var n=e.target.value;t(n)},disabled:n}))},f=function(e){var t=e.options,n=e.setGameOptions,r=e.disabled,l=t&&t.length?t.map(function(e){return Object.keys(e).map(function(t){return a.a.createElement("option",{key:e[t],value:t},e[t])})}):null;return a.a.createElement(a.a.Fragment,null,a.a.createElement("select",{onChange:function(e){var t=e.target.value;n(t)},disabled:r},a.a.createElement("option",{value:""},"select game mode"),l))},_=n(5),E=n(11),v=n(12),O=n(14),g=n(13),C=n(15),b=n(9),h=n.n(b),y=function(e){function t(){var e,n;Object(E.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={userActiveCell:!1,computerActiveCell:!1},n.handleClick=function(){var e=n.props,t=e.gamerClick,r=e.activeCell;n.setState({userActiveCell:!0}),t(r)},n.computerClick=function(){var e=n.props,t=e.computerClick,r=e.activeCell;n.setState({computerActiveCell:!0}),t(r)},n}return Object(C.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.cellId;this.state.userActiveCell||t===e.activeCell&&this.computerClick()}},{key:"render",value:function(){var e=this,t=this.props,n=t.activeCell,r=t.cellId,l=this.state,c=l.userActiveCell,i=l.computerActiveCell;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"".concat(h.a.game__cell," ").concat(r===n?h.a.game__cell_active:""," ").concat(c?h.a.game__cell_user:""," ").concat(i?h.a.game__cell_computer:""),onClick:r===n?function(){e.handleClick()}:null,"aria-hidden":"true"}))}}]),t}(a.a.Component),j=Object(i.b)(function(e){return{activeCell:e.gameDisplay.activeCell}},null)(y),S=n(32),w=n.n(S),N=n(4),A=n.n(N),k=function(){return A.a.get("/game-settings")},L=function(e){return A.a.post("/winners",e)},G={ERROR:"ERROR",SET_GAME_OPTIONS:"SET_GAME_OPTIONS",SET_GAME_VALUES:"SET_GAME_VALUES",SET_ACTIVE_CELL:"SET_ACTIVE_CELL",SET_WINNER:"SET_WINNER"},R=function(){return{type:G.ERROR}},T=function(e){return{type:G.SET_GAME_OPTIONS,data:e}},P=function(e){return{type:G.SET_GAME_VALUES,data:e}},I=function(e){return{type:G.SET_ACTIVE_CELL,data:e}},D=function(e){return{type:G.SET_WINNER,data:e}},M=function(){return{type:G.CLEAR_WINNER_NAME}},U=function(){return A.a.get("/winners")},W={ERROR_LOAD:"ERROR_LOAD",SET_DATA:"SET_DATA"},V=function(){return{type:W.ERROR_LOAD}},x=function(e){return{type:W.SET_DATA,data:Object(_.a)(e)}},Y=function(){return function(e){U().then(function(t){var n=t.data;return e(x(n))}).catch(function(){return e(V())})}},B=Y,F=function(e){function t(){var e,n;Object(E.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={totalCellNumber:null,usedCells:[],userCLickedCells:0,computerUsedCells:0},n.gameStart=function(){var e=n.props.selectedGame;n.setState({totalCellNumber:Math.pow(e.field,2),usedCells:[],userCLickedCells:0,computerUsedCells:0},function(){n.startInterval()})},n.startInterval=function(){var e=n.props.selectedGame;n.changeActiveCell=setInterval(function(){n.checkGameProgress()},e.delay)},n.restartInterval=function(){n.stopIntnerval(),n.checkGameProgress(),n.startInterval()},n.stopIntnerval=function(){var e=n.props.setNewActiveCell;clearInterval(n.changeActiveCell),e(null)},n.checkGameProgress=function(){var e=n.state,t=e.usedCells,r=e.totalCellNumber,a=n.props.setNewActiveCell;if(t.length>=r)return n.stopIntnerval(),void n.setWinner();a(d(r,t))},n.gamerClick=function(e){var t=n.state,r=t.usedCells,a=t.userCLickedCells;n.setState({usedCells:[].concat(Object(_.a)(r),[e]),userCLickedCells:a+1},function(){n.restartInterval()})},n.computerClick=function(e){var t=n.state,r=t.usedCells,a=t.computerUsedCells;n.setState({usedCells:[].concat(Object(_.a)(r),[e]),computerUsedCells:a+1})},n.setWinner=function(){var e=n.props,t=e.setNewWinner,r=e.gamerName,a=n.state;t(a.userCLickedCells>a.computerUsedCells?r:"computer")},n}return Object(C.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.gameStart()}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.state,r=n.usedCells,a=n.userCLickedCells,l=n.computerUsedCells,c=this.props.isGameProcess;return r.length===t.usedCells.length&&(a===t.userCLickedCells&&(l===t.computerUsedCells&&(e.isGameProcess!==c&&!0===e.isGameProcess&&this.gameStart(),!0)))}},{key:"componentWillUnmount",value:function(){this.stopIntnerval()}},{key:"render",value:function(){var e=this,t=this.props.selectedGame;return a.a.createElement("div",{className:"game-field"},a.a.createElement(function(){var n=[],r=1;if(t.field){for(var l=[],c=0;c<t.field;c+=1){for(var i=0;i<t.field;i+=1)l.push(a.a.createElement(j,{key:r,cellId:r,gamerClick:e.gamerClick,computerClick:e.computerClick})),r+=1;n.push(a.a.createElement("div",{className:"l-row",key:c},l)),l=[]}return n}return null},null))}}]),t}(a.a.Component),q=Object(i.b)(function(e){var t=e.gameDisplay;return{selectedGame:t.selectedGameValue,gamerName:t.gamerName}},function(e){return{setNewActiveCell:function(t){return e(function(e){return I(e)}(t))},setNewWinner:function(t){return e(function(e){return function(t){var n=w()().format("HH:mm; DD MMMM YYYY");L({winner:e,date:n}).then(function(){return t(Y()),t(D(e))}).catch(function(){t(R())})}}(t))}}})(F),z=n(33),H=n.n(z),J=Object(i.b)(function(e){var t,n=e.gameDisplay;return{gameSelectOptions:(t=n.gameOptions,t?Object.keys(t).map(function(e){return Object(o.a)({},e,m()(e).replace("_"," "))}):[]),selectedGame:n.selectedGameValue,winner:n.winner}},function(e){return{getOptions:function(){return e(function(e){k().then(function(t){var n=t.data;return e(T(n))}).catch(function(){return e(R())})})},setGame:function(t){return e(P(t))},deleteWinner:function(){return M()}}})(function(e){var t=e.getOptions,n=e.gameSelectOptions,l=e.setGame,c=e.selectedGame,i=e.winner,o=e.deleteWinner,u=Object(r.useState)(""),m=Object(s.a)(u,2),d=m[0],_=m[1],E=Object(r.useState)(""),v=Object(s.a)(E,2),O=v[0],g=v[1],C=Object(r.useState)(!1),b=Object(s.a)(C,2),h=b[0],y=b[1];Object(r.useEffect)(function(){t()},[]),Object(r.useEffect)(function(){y(!1)},[i]);return a.a.createElement("div",{className:"".concat(H.a.game__display," l-row")},a.a.createElement("div",{className:"l-column"},a.a.createElement("div",{className:"l-row"},a.a.createElement(f,{options:n,setGameOptions:function(e){_(e)},disabled:!!h||null}),a.a.createElement(p,{setPlayerName:function(e){g(e)},disabled:!!h||null}),a.a.createElement("button",{type:"button",onClick:function(){y(!0),o(),l({gameMode:d,userName:O})},disabled:!(d&&O&&!h)||null},"Play")),i&&a.a.createElement("h1",null,"".concat(i," WIN!")),c&&Object.keys(c).length&&a.a.createElement(q,{isGameProcess:h})))}),X=function(e){var t=e.winner,n=e.date;return a.a.createElement("div",{className:"l-row"},t&&a.a.createElement("p",null,t),n&&a.a.createElement("p",null,n))},K=n(20),Q=n.n(K),Z=Object(i.b)(function(e){var t=e.leaderBoard;return{isGetListError:t.isError,leaderList:t.leaderList}},function(e){return{getLeaderList:function(){return e(B())}}})(function(e){Object(r.useEffect)(function(){e.getLeaderList()},[]);var t=e.isGetListError,n=e.leaderList,l=n&&n.length?n.map(function(e,t){return n.length-5<t?a.a.createElement(X,{winner:e.winner,date:e.date,key:e.id}):null}):null;return a.a.createElement("div",{className:"".concat(Q.a.leader__list," l-row")},a.a.createElement("div",{className:"l-column"},a.a.createElement("h2",null,"Leader Board"),t&&a.a.createElement("h3",null,"Sorry, we can't load leader's tabble"),a.a.createElement("div",{className:"".concat(Q.a.leader__container," l-column")},l)))}),$=n(34),ee=n.n($),te=function(){return a.a.createElement("section",{className:ee.a.game__container},a.a.createElement(J,null),a.a.createElement(Z,null))},ne=function(){return a.a.createElement(te,null)},re=(n(66),n(6)),ae=n(35);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ie={leaderList:null,isError:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.SET_DATA:return ce({},e,{leaderList:Object(_.a)(t.data),isError:!1});case W.ERROR:return ce({},e,{isError:!0});default:return e}};function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var me={isError:!1,gameOptions:null,selectedGameValue:null,activeCell:2,winner:"",gamerName:""},de=Object(re.c)({leaderBoard:se,gameDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.SET_GAME_OPTIONS:return ue({},e,{gameOptions:t.data});case G.SET_GAME_VALUES:return ue({},e,{selectedGameValue:e.gameOptions[t.data.gameMode],gamerName:t.data.userName});case G.ERROR:return ue({},e,{isError:!0});case G.SET_ACTIVE_CELL:return ue({},e,{activeCell:t.data});case G.SET_WINNER:return ue({},e,{winner:t.data});case G.CLEAR_WINNER_NAME:return ue({},e,{winner:""});default:return e}}}),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,fe=Object(re.e)(de,pe(Object(re.a)(ae.a)));A.a.defaults.baseURL="https://starnavi-frontend-test-task.herokuapp.com/",c.a.render(a.a.createElement(i.a,{store:fe},a.a.createElement(ne,null)),document.getElementById("root"))},9:function(e,t,n){e.exports={game__cell:"GameCell_game__cell__17sRD",game__cell_active:"GameCell_game__cell_active__2RgYo",game__cell_user:"GameCell_game__cell_user__3wGC6",game__cell_computer:"GameCell_game__cell_computer__3usvq"}}},[[36,1,2]]]);
//# sourceMappingURL=main.61fce090.chunk.js.map