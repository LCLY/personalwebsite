(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{280:function(e,t,a){e.exports=a.p+"static/media/personalwebsite.041051ed.PNG"},286:function(e,t,a){e.exports=a(668)},492:function(e,t,a){},668:function(e,t,a){"use strict";a.r(t);a(287),a(296);var n=a(0),i=a.n(n),r=a(47),c=a.n(r),o=a(48),s=a(49),l=a(52),m=a(51),d=a(53),u=(a(492),a(276)),p=a.n(u),h=a(33),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui menu__bar"},i.a.createElement("div",{className:"ui large secondary inverted pointing menu menu__flex"},i.a.createElement("div",{className:"item menu__flex--start",id:"navProject"},i.a.createElement("a",{onClick:function(){return h.animateScroll.scrollTo(window.innerHeight)}},"Projects")),i.a.createElement("div",{className:"right item menu__flex--end"},i.a.createElement("a",{className:"ui inverted button",href:"./resume.pdf",target:"_blank"},"Resume"),"\xa0",i.a.createElement("a",{className:"ui inverted button",onClick:function(){return h.animateScroll.scrollToBottom({duration:2e3})}},"Contact"))))}}]),t}(i.a.Component),v=a(50),b=a(669),g=function(e){return i.a.createElement("div",{className:"hidden__background"})},y=a(72),E="Hide the supposed to be hidden navbar",w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).scrollToBottom=function(){h.animateScroll.scrollToBottom()},a.state={iconColor:"white",fontColor:"white",iconName:"fa-bars",activated:!1,firstTime:!1},a.handleBarClick=a.handleBarClick.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=90*window.innerHeight/100;window.onscroll=function(){window.pageYOffset<e?this.setState({iconColor:"white",fontColor:"white"}):window.pageYOffset>=e-30&&window.pageYOffset<window.innerHeight-50?this.setState({iconColor:"white",fontColor:"black"}):window.pageYOffset>=window.innerHeight-50&&this.setState({iconColor:"black",fontColor:"black"});var t=30*window.innerHeight/100;window.pageYOffset>t?(this.props.showNavbar(!0),this.props.domInsertion(!0)):0===window.pageYOffset?this.props.domInsertion(!1):window.pageYOffset<t&&this.props.showNavbar(!1)}.bind(this)}},{key:"componentWillUnmount",value:function(){window.onscroll=null}},{key:"handleBarClick",value:function(){!1===this.state.firstTime&&this.setState({firstTime:!0}),!1===this.state.activated?this.setState({iconName:"fa-times",activated:!0}):this.setState({iconName:"fa-bars",activated:!1})}},{key:"render",value:function(){var e=i.a.createElement("div",{className:"hidden--list",style:{color:"".concat(this.state.fontColor),fontSize:"1.5rem"}},i.a.createElement("div",{className:"col"},i.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:300,exit:700},classNames:"bg-icon-1"},i.a.createElement("div",{className:"row row--1"},i.a.createElement("i",{className:"fas fa-home",onClick:function(){return h.animateScroll.scrollToTop()}}))),i.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:500,exit:600},classNames:"bg-icon-2"},i.a.createElement("div",{className:"row row--2"},i.a.createElement(h.Link,{activeClass:"active",to:"section1",spy:!0,smooth:!0,offset:70,duration:500},i.a.createElement("i",{className:"fas fa-file-code"})))),i.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:700,exit:500},classNames:"bg-icon-3"},i.a.createElement("div",{className:"row row--3"},i.a.createElement("a",{href:"./resume.pdf",target:"_blank",style:{color:"".concat(this.state.fontColor)}},i.a.createElement("i",{className:"fas fa-file-pdf"})))),i.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:800,exit:500},classNames:"bg-icon-4"},i.a.createElement("div",{className:"row row--4"},i.a.createElement("i",{className:"fas fa-mobile-alt",onClick:this.scrollToBottom,style:{fontSize:"1.7rem"}})))));return i.a.createElement("div",{className:"hidden"},this.state.firstTime?i.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:500,exit:1e3},classNames:"menuBG"},i.a.createElement(g,null)):"",i.a.createElement("i",{className:"fas ".concat(this.state.iconName," hidden--bar"),style:{color:"".concat(this.state.iconColor)},onClick:this.handleBarClick}),this.state.firstTime?e:"")}}]),t}(i.a.Component),N=Object(y.b)(function(e){return{show:e.navbar.show}},{showNavbar:function(e){return function(t){t(e?{type:"Show the hidden navbar"}:{type:E})}},domInsertion:function(e){return function(t){t(e?{type:"Insert Navbar into the DOM"}:{type:"Remove Navbar from the DOM"})}}})(w),O=a(118),k=a(283);a(506);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var C=function(e){var t=Object(n.useState)({test:!1}),a=Object(k.a)(t,2),r=a[0],c=a[1],o=r.test;return i.a.createElement("div",{className:"ui fluid link card",id:"card--hover"},i.a.createElement("div",{className:"image"},i.a.createElement("a",{href:e.pageUrl,target:"_blank",id:"linkFormat"},i.a.createElement("img",{src:e.imgUrl,alt:e.imgAlt,style:{width:"100%",height:"100%"}}))),o?i.a.createElement("div",{className:"content",style:{cursor:"default"}},i.a.createElement("div",null,"yesh bitch")):i.a.createElement("div",{className:"content",style:{cursor:"default"}},i.a.createElement("a",{href:e.pageUrl,target:"_blank",id:"linkFormat",className:"header"},e.headerText),i.a.createElement("div",{className:"meta"},i.a.createElement("h5",null,e.projectType)),i.a.createElement("div",{className:"description"},e.projectDescription)),i.a.createElement("div",{className:"extra content extra--content",style:{cursor:"default"}},i.a.createElement("span",{className:"extra--content__start"},i.a.createElement("a",{onClick:function(){c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},r,{test:!o}))}},"Learn more")),i.a.createElement("span",{className:"right floated extra--content__end"},i.a.createElement("a",{href:e.linktoGithub,target:"_blank"},"View code \xa0",i.a.createElement("i",{class:"github icon"})))))},A=a(73),S=a.n(A),T=a(280),_=a.n(T);function x(e){var t=e.id;return i.a.createElement("div",{className:"ui vertical stripe segment",id:t},i.a.createElement("div",{style:{textAlign:"center",margin:"0 auto 0 auto",paddingDown:"1rem"}},i.a.createElement("h1",{style:{fontSize:"3rem",fontFamily:"Poppins, sans-serif"}},"My Projects")),i.a.createElement("div",{className:"ui middle aligned stackable grid container"},i.a.createElement("div",{className:"ui three column grid"},i.a.createElement("div",{className:"column"},i.a.createElement(C,{imgUrl:_.a,imgAlt:"personalwebsite",headerText:"Portfolio",projectType:"Web application",projectDescription:"Portfolio website to demonstrate my skill sets and let people get to discover more about me",linktoGithub:"https://github.com/LCLY/personalwebsite",pageUrl:"https://lcly.github.io/personalwebsite/"})),i.a.createElement("div",{className:"column"},i.a.createElement(C,{imgUrl:S.a,imgAlt:"fliegen",headerText:"Fliegen",projectType:"Web application",projectDescription:"A web application designed for students and recruiters/professionals to connect more effectively",linktoGithub:"https://github.com/LCLY/boilermake2018",pageUrl:"http://fliegen.lcly1996.com/signIn"})),i.a.createElement("div",{className:"column"},i.a.createElement(C,{imgUrl:S.a,imgAlt:"fliegen",headerText:"Fliegen",projectType:"Web application",projectDescription:"A web application designed for students and recruiters/professionals to connect more effectively"})))),i.a.createElement("div",{className:"ui middle aligned stackable grid container"},i.a.createElement("div",{className:"ui three column grid"},i.a.createElement("div",{className:"column"},i.a.createElement(C,{imgUrl:S.a,imgAlt:"fliegen",headerText:"Fliegen",projectType:"Web application",projectDescription:"A web application designed for students and recruiters/professionals to connect more effectively"})),i.a.createElement("div",{className:"column"},i.a.createElement(C,{imgUrl:S.a,imgAlt:"fliegen",headerText:"Fliegen",projectType:"Web application",projectDescription:"BLABLABLA"})),i.a.createElement("div",{className:"column"},i.a.createElement(C,{imgUrl:S.a,imgAlt:"fliegen",headerText:"Fliegen",projectType:"Web application",projectDescription:"BLABLABLA"})))))}var P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){switch(e){case 1:a.setState({homeActive:"active",portfolioActive:"",resumeActive:"",contactActive:""}),h.animateScroll.scrollToTop();break;case 2:a.setState({homeActive:"",portfolioActive:"active",resumeActive:"",contactActive:""}),h.animateScroll.scrollTo(window.innerHeight);break;case 3:a.setState({homeActive:"",portfolioActive:"",resumeActive:"active",contactActive:""});break;case 4:a.setState({homeActive:"",portfolioActive:"",resumeActive:"",contactActive:"active"}),h.animateScroll.scrollToBottom()}},a.state={homeActive:"",portfolioActive:"",resumeActive:"",contactActive:""},a.handleClick=a.handleClick.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"hidden--navbar"},i.a.createElement("div",{className:"ui secondary pointing menu hidden--navbar__flex",id:"hiddenNavbar"},i.a.createElement("a",{className:"".concat(this.state.homeActive," item"),onClick:function(){return e.handleClick(1)}},"Home"),i.a.createElement("a",{className:"".concat(this.state.portfolioActive," item"),onClick:function(){return e.handleClick(2)}},"Projects"),i.a.createElement("a",{className:"".concat(this.state.resumeActive," item"),onClick:function(){return e.handleClick(3)},href:"./resume.pdf",target:"_blank"},"Resume"),i.a.createElement("div",{className:"right menu"},i.a.createElement("a",{className:"ui ".concat(this.state.contactActive," item"),onClick:function(){return e.handleClick(4)}},"Contact"))))}}]),t}(i.a.Component),D=a(281),H=a.n(D),B=function(){return i.a.createElement(H.a,{params:{particles:{number:{value:200,density:{enable:!1}},size:{value:5,random:!0,anim:{speed:5,size_min:.2}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:300,duration:1,size:5,opacity:.8},repulse:{distance:200,duration:4}}}},style:{position:"absolute",zIndex:"0",left:"0"}})},I={play:{iconName:"play"},pause:{iconName:"pause"}},U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={condition:!1,playText:"Playing: ",navbarDisplay:!1,navbarAppear:!1},a.onInputChange=function(e){!0===a.state.condition?(a.setState({playText:"Playing: "}),a.setState({condition:!a.state.condition})):(a.setState({playText:"Paused: "}),a.setState({condition:!a.state.condition})),a.typed.toggle()},a.onClickDestroyed=function(e){a.typed.destroy(),a.setState({playText:"Deleted: "})},a.onClickReset=function(e){a.typed.reset(),a.state.condition?a.setState({playText:"Paused: "}):a.setState({playText:"Playing: "})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e={strings:this.props.strings,typeSpeed:100,backSpeed:50,loop:!0,shuffle:!1};this.typed=new p.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this,t=!0===this.state.condition?"play":"pause",a=I[t].iconName;return i.a.createElement("div",null,i.a.createElement("div",{className:"pusher"},i.a.createElement("div",{className:"wrap ui inverted vertical masthead center aligned segment top_page"},i.a.createElement(B,null),i.a.createElement(N,null),i.a.createElement(f,null),this.props.insert?i.a.createElement(b.a,{in:this.props.show,appear:!0,timeout:{enter:500,exit:500},classNames:"hiddenNavbarTransition"},i.a.createElement(P,null)):"",i.a.createElement("div",{className:"title title__wrap"},i.a.createElement("div",{className:"ui text container"},i.a.createElement("h1",{id:"title__name",className:"ui inverted header"},"HENRY")),i.a.createElement("div",{className:"type-wrap"},i.a.createElement("h2",null,i.a.createElement("span",{id:"title__type",style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))),i.a.createElement("div",{className:"buttonsDiv",id:"title__buttons"},i.a.createElement("br",null),i.a.createElement("div",{id:"play_text_container"},i.a.createElement("div",{id:"play_text"},this.state.playText),i.a.createElement("i",{className:"".concat(a," icon buttonHover buttonHover1"),onClick:this.onInputChange}),i.a.createElement("i",{className:"redo alternate icon buttonHover buttonHover2",onClick:this.onClickReset}),i.a.createElement("i",{className:"trash icon buttonHover buttonHover3",onClick:this.onClickDestroyed}))))),i.a.createElement(x,{id:"section1"})))}}]),t}(i.a.Component),L=Object(y.b)(function(e){return{show:e.navbar.show,insert:e.navbar.insert}},{})(U),Y=a(54),W=a(282);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var M={show:!1,insert:!1},R=Object(Y.c)({navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,a=t.type;t.payload;switch(a){case"Show the hidden navbar":return z({},e,{show:!0});case E:return z({},e,{show:!1});case"Insert Navbar into the DOM":return z({},e,{insert:!0});case"Remove Navbar from the DOM":return z({},e,{insert:!1});default:return e}}}),G=[W.a],J=Object(Y.e)(R,{},Object(Y.d)(Y.a.apply(void 0,G)));c.a.render(i.a.createElement(y.a,{store:J},i.a.createElement(L,{strings:["Hi, I'm Henry.","I am a <strong><i>Software Developer.</i></strong>","I graduated from <strong>Purdue University.</strong>","I do <strong>Web Development.</strong>","I worked with various technologies!","I am trilingual.","I am a <strong>team player.</strong>"]})),document.querySelector("#root"))},73:function(e,t,a){e.exports=a.p+"static/media/fliegen.5d03a694.PNG"}},[[286,1,2]]]);
//# sourceMappingURL=main.8e3b85c2.chunk.js.map