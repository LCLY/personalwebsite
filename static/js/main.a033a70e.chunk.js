(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=n(3),s=n(4),l=n(7),u=n(5),m=n(8),d=(n(15),n(6)),p=n.n(d),v=function(){return r.a.createElement("div",{class:"ui container"},r.a.createElement("div",{class:"ui large secondary inverted pointing menu"},r.a.createElement("div",{class:"right item"},r.a.createElement("a",{class:"ui inverted button"},"Resume"),r.a.createElement("a",{class:"ui inverted button"},"Contact"))))},g={play:{iconName:"play"},pause:{iconName:"pause"}},h=!1,y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={condition:h},n.onInputChange=function(e){h=!0!==h,n.typed.toggle(),n.setState({condition:h}),console.log(n.state.condition)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e={strings:this.props.strings,typeSpeed:100,backSpeed:50,loop:!0,shuffle:!1};this.typed=new p.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this,t=!0===this.state.condition?"play":"pause",n=g[t].iconName;return r.a.createElement("div",null,r.a.createElement("div",{className:"pusher"},r.a.createElement("div",{className:"wrap ui inverted vertical masthead center aligned segment"},r.a.createElement(v,null),r.a.createElement("div",{className:"ui text container"},r.a.createElement("h1",{className:"ui inverted header"},"HENRY"),r.a.createElement("div",{className:"type-wrap"},r.a.createElement("h2",null,r.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}})))),r.a.createElement("div",{className:"buttonsDiv"},r.a.createElement("br",null),"Control: ",r.a.createElement("i",{className:"".concat(n," icon buttonHover buttonHover1"),onClick:this.onInputChange}),r.a.createElement("i",{className:"redo alternate icon buttonHover buttonHover2",onClick:function(){return e.typed.reset()}}),r.a.createElement("i",{className:"trash icon buttonHover buttonHover3",onClick:function(){return e.typed.destroy()}})))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(y,{strings:["Hi, I'm Henry.","I am a <strong><i>Software Developer.</i></strong>","I graduated from <strong>Purdue University.</strong>","I do <strong>Web Development.</strong>","I do other exciting stuffs too!","I am trilingual.","I am a <strong>team player.</strong>"]}),document.querySelector("#root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a033a70e.chunk.js.map