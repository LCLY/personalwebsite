(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{323:function(e,t,a){e.exports=a.p+"static/media/fliegen.5d03a694.PNG"},324:function(e,t,a){e.exports=a.p+"static/media/personalwebsite.041051ed.PNG"},325:function(e,t,a){e.exports=a.p+"static/media/boileride.d8c1d040.PNG"},346:function(e,t,a){e.exports=a(690)},552:function(e,t,a){},690:function(e,t,a){"use strict";a.r(t);a(347),a(356);var n=a(0),r=a.n(n),i=a(36),o=a.n(i),c=a(68),s=a(69),l=a(72),m=a(70),d=a(73),u=(a(552),a(313)),p=a.n(u),h=a(47),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui menu__bar"},r.a.createElement("div",{className:"ui large secondary inverted pointing menu menu__flex"},r.a.createElement("div",{className:"item menu__flex--start",id:"navProject"},r.a.createElement("a",{onClick:function(){return h.animateScroll.scrollTo(window.innerHeight)}},"Projects")),r.a.createElement("div",{className:"right item menu__flex--end"},r.a.createElement("a",{className:"ui inverted button",href:"./resume.pdf",target:"_blank"},"Resume"),"\xa0",r.a.createElement("a",{className:"ui inverted button",onClick:function(){return h.animateScroll.scrollToBottom({duration:2e3})}},"Contact"))))}}]),t}(r.a.Component),b=a(694),v=function(e){return r.a.createElement("div",{className:"hidden__background"})},g=a(71),y="Hide the supposed to be hidden navbar",E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).scrollToBottom=function(){h.animateScroll.scrollToBottom()},a.handleBarClick=function(){!1===a.state.firstTime&&a.setState({firstTime:!0}),!1===a.state.activated?a.setState({iconName:"fa-times",activated:!0}):a.setState({iconName:"fa-bars",activated:!1})},a.handleExit=function(){!0===a.state.firstTime&&a.setState({firstTime:!1})},a.state={iconColor:"white",fontColor:"white",iconName:"fa-bars",activated:!1,firstTime:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=90*window.innerHeight/100;window.onscroll=function(){window.pageYOffset<e?this.setState({iconColor:"white",fontColor:"white"}):window.pageYOffset>=e-30&&window.pageYOffset<window.innerHeight-50?this.setState({iconColor:"white",fontColor:"black"}):window.pageYOffset>=window.innerHeight-50&&this.setState({iconColor:"black",fontColor:"black"});var t=30*window.innerHeight/100;window.pageYOffset>t?(this.props.showNavbar(!0),this.props.domInsertion(!0)):0===window.pageYOffset?this.props.domInsertion(!1):window.pageYOffset<t&&this.props.showNavbar(!1)}.bind(this)}},{key:"componentWillUnmount",value:function(){window.onscroll=null}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"hidden--list",style:{color:"".concat(this.state.fontColor),fontSize:"1.5rem"}},r.a.createElement("div",{className:"col"},r.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:300,exit:700},classNames:"bg-icon-1"},r.a.createElement("div",{className:"row row--1"},r.a.createElement("i",{className:"fas fa-home",onClick:function(){return h.animateScroll.scrollToTop()}}))),r.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:500,exit:600},classNames:"bg-icon-2"},r.a.createElement("div",{className:"row row--2"},r.a.createElement(h.Link,{activeClass:"active",to:"section1",spy:!0,smooth:!0,offset:70,duration:500},r.a.createElement("i",{className:"fas fa-file-code"})))),r.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:700,exit:500},classNames:"bg-icon-3"},r.a.createElement("div",{className:"row row--3"},r.a.createElement("a",{href:"./resume.pdf",target:"_blank",style:{color:"".concat(this.state.fontColor)}},r.a.createElement("i",{className:"fas fa-file-pdf"})))),r.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:800,exit:500},classNames:"bg-icon-4"},r.a.createElement("div",{className:"row row--4"},r.a.createElement("i",{className:"fas fa-mobile-alt",onClick:this.scrollToBottom,style:{fontSize:"1.7rem"}})))));return r.a.createElement("div",{className:"hidden"},this.state.firstTime?r.a.createElement(b.a,{in:this.state.activated,appear:!0,timeout:{enter:500,exit:1e3},onExited:this.handleExit,classNames:"menuBG"},r.a.createElement(v,null)):"",r.a.createElement("i",{className:"fas ".concat(this.state.iconName," hidden--bar"),style:{color:"".concat(this.state.iconColor)},onClick:this.handleBarClick}),this.state.firstTime?e:"")}}]),t}(r.a.Component),w=Object(g.b)(function(e){return{show:e.navbar.show}},{showNavbar:function(e){return function(t){t(e?{type:"Show the hidden navbar"}:{type:y})}},domInsertion:function(e){return function(t){t(e?{type:"Insert Navbar into the DOM"}:{type:"Remove Navbar from the DOM"})}}})(E),k=a(94),j=a(153),N=a(692);a(566);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var C=function(e){var t=Object(n.useState)({changeContent:!0}),a=Object(j.a)(t,2),i=a[0],o=a[1],c=i.changeContent,s=function(){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},i,{changeContent:!c}))};return r.a.createElement("div",null,c?r.a.createElement("div",{className:"ui fluid link card",id:"card--hover"},r.a.createElement("div",{className:"image"},r.a.createElement("a",{href:e.pageUrl,target:"_blank",id:"linkFormat"},r.a.createElement("img",{src:e.imgUrl,alt:e.imgAlt,style:{width:"100%",height:"100%"}}))),r.a.createElement("div",{className:"content",style:{cursor:"default"}},r.a.createElement("a",{href:e.pageUrl,target:"_blank",id:"linkFormat",className:"header"},e.headerText),r.a.createElement("div",{className:"meta"},r.a.createElement("h5",null,e.projectType)),r.a.createElement("div",{className:"description"},e.projectDescription),r.a.createElement("div",{className:"toolsLabel--div"},e.projectTools.map(function(e){return r.a.createElement(N.a,{key:e,size:"medium",style:{marginBottom:"0.2rem",backgroundColor:"rgb(236, 236, 236)",fontWeight:"normal"}},e)}))),r.a.createElement("div",{className:"extra content extra--content",style:{cursor:"default"}},r.a.createElement("span",{className:"extra--content__start"},r.a.createElement("a",{onClick:s},"Learn more")),r.a.createElement("span",{className:"right floated extra--content__end"},r.a.createElement("a",{href:e.linktoGithub,target:"_blank"},"View code \xa0",r.a.createElement("i",{className:"github icon"}))))):r.a.createElement("div",{className:"ui fluid link card",id:"card--hover"},r.a.createElement("div",{className:"content",style:{cursor:"default"}},r.a.createElement("div",{id:"linkFormat",className:"header"},"Reflections"),r.a.createElement("div",{className:"meta"},r.a.createElement("h5",{className:"description__heading"},"Challenges")),r.a.createElement("div",{className:"description description__info"},r.a.createElement("ul",null,e.projectChallenges.map(function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement("div",{className:"meta"},r.a.createElement("h5",{className:"description__heading"},"What I've learnt")),r.a.createElement("div",{className:"description description__info"},r.a.createElement("ul",null,e.projectLessons.map(function(e){return r.a.createElement("li",{key:e},e)})))),r.a.createElement("div",{className:"extra content extra--content",style:{cursor:"default"}},r.a.createElement("span",{className:"extra--content__start"},r.a.createElement("a",{onClick:s},r.a.createElement("i",{className:"fas fa-chevron-circle-left"})," ","Back")))))},_=a(323),S=a.n(_),T=a(324),x=a.n(T),P=a(325),A=a.n(P),D=Object(g.b)(function(e){return{project:e.content.project}},{})(function(e){var t=e.id,a=e.project;return r.a.createElement("div",{className:"ui vertical stripe segment",id:t},r.a.createElement("div",{style:{textAlign:"center",paddingDown:"1rem"}},r.a.createElement("h1",{style:{fontSize:"3rem",fontFamily:"Poppins, sans-serif"}},"My Projects")),r.a.createElement("div",{className:"ui middle aligned stackable grid container card--outerContainer"},r.a.createElement("div",{className:"ui three column grid card__innerContainer"},r.a.createElement("div",{className:"column"},r.a.createElement(C,{imgUrl:x.a,imgAlt:"personalwebsite",headerText:a.personalweb.headerText,projectType:a.personalweb.projectType,projectDescription:a.personalweb.desc,linktoGithub:a.personalweb.linktoGithub,pageUrl:"https://lcly.github.io/personalwebsite/",projectChallenges:a.personalweb.challenges,projectLessons:a.personalweb.lessons,projectTools:a.personalweb.tools})),r.a.createElement("div",{className:"column"},r.a.createElement(C,{imgUrl:A.a,imgAlt:"Boileride",headerText:a.boileride.headerText,projectType:a.boileride.projectType,projectDescription:a.boileride.desc,projectChallenges:a.boileride.challenges,linktoGithub:a.boileride.linktoGithub,projectLessons:a.boileride.lessons,projectTools:a.boileride.tools})),r.a.createElement("div",{className:"column"},r.a.createElement(C,{imgUrl:S.a,imgAlt:"fliegen",headerText:a.fliegen.headerText,projectType:a.fliegen.projectType,projectDescription:a.fliegen.desc,linktoGithub:a.fliegen.linktoGithub,pageUrl:"http://fliegen.lcly1996.com/signIn",projectChallenges:a.fliegen.challenges,projectLessons:a.fliegen.lessons,projectTools:a.fliegen.tools})))))}),H=a(92),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){switch(e){case 1:a.setState({homeActive:"active",portfolioActive:"",resumeActive:"",contactActive:""}),h.animateScroll.scrollToTop();break;case 2:a.setState({homeActive:"",portfolioActive:"active",resumeActive:"",contactActive:""}),h.animateScroll.scrollTo(window.innerHeight);break;case 3:a.setState({homeActive:"",portfolioActive:"",resumeActive:"active",contactActive:""});break;case 4:a.setState({homeActive:"",portfolioActive:"",resumeActive:"",contactActive:"active"}),h.animateScroll.scrollToBottom()}},a.state={homeActive:"",portfolioActive:"",resumeActive:"",contactActive:""},a.handleClick=a.handleClick.bind(Object(H.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"hidden--navbar"},r.a.createElement("div",{className:"ui secondary pointing menu hidden--navbar__flex",id:"hiddenNavbar"},r.a.createElement("a",{className:"".concat(this.state.homeActive," item"),onClick:function(){return e.handleClick(1)}},"Home"),r.a.createElement("a",{className:"".concat(this.state.portfolioActive," item"),onClick:function(){return e.handleClick(2)}},"Projects"),r.a.createElement("a",{className:"".concat(this.state.resumeActive," item"),onClick:function(){return e.handleClick(3)},href:"./resume.pdf",target:"_blank"},"Resume"),r.a.createElement("div",{className:"right menu"},r.a.createElement("a",{className:"ui ".concat(this.state.contactActive," item"),onClick:function(){return e.handleClick(4)}},"Contact"))))}}]),t}(r.a.Component),L=a(326),G=a.n(L),B=function(){return r.a.createElement(G.a,{params:{particles:{number:{value:200,density:{enable:!1}},size:{value:5,random:!0,anim:{speed:5,size_min:.2}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:300,duration:1,size:5,opacity:.8},repulse:{distance:200,duration:4}}}},style:{position:"absolute",zIndex:"0",left:"0"}})},U=a(693);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var W=function(){var e=Object(n.useState)({copySuccess:"Click to copy email"}),t=Object(j.a)(e,2),a=t[0],i=t[1],o=a.copySuccess,c=Object(n.useRef)(null);return r.a.createElement("div",{className:"ui inverted vertical segment",style:{padding:"5rem 0 5rem 0"}},r.a.createElement("div",{className:"container footer__innerContainer"},r.a.createElement("div",{className:"footer__spacing"},r.a.createElement("h1",{style:{fontFamily:"Poppins, cursive"}},"Let's talk"),r.a.createElement("div",{className:"footer__email"})),r.a.createElement("div",{className:"footer__spacing"},r.a.createElement("a",{href:"https://github.com/LCLY",target:"_blank",style:{color:"inherit"}},r.a.createElement("i",{className:"fab fa-github footer__icon"})),r.a.createElement("a",{href:"https://linkedin.com/in/lcly9294/",target:"_blank",style:{color:"inherit"}},r.a.createElement("i",{className:"fab fa-linkedin footer__icon"})),r.a.createElement("a",null,document.queryCommandSupported("copy")&&r.a.createElement(U.a,{content:o,trigger:r.a.createElement("i",{className:"fas fa-envelope footer__icon",onClick:function(e){c.current.select(),document.execCommand("copy"),e.target.focus(),i(R({},a,{copySuccess:"Copied!"})),setTimeout(function(){i(R({},a,{copySuccess:"Click to copy email!"}))},3e3)}})}))),r.a.createElement("div",{className:"footer__spacing"},r.a.createElement("i",{class:"far fa-copyright"})," 2019 Henry Choo. All rights reserved.")),r.a.createElement("div",{style:{display:"none"}},r.a.createElement("form",null,r.a.createElement("textarea",{ref:c,value:"lchoo9294@gmail.com"}))))},Y={play:{iconName:"play"},pause:{iconName:"pause"}},z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={condition:!1,playText:"Playing: ",navbarDisplay:!1,navbarAppear:!1},a.onInputChange=function(e){!0===a.state.condition?(a.setState({playText:"Playing: "}),a.setState({condition:!a.state.condition})):(a.setState({playText:"Paused: "}),a.setState({condition:!a.state.condition})),a.typed.toggle()},a.onClickDestroyed=function(e){a.typed.destroy(),a.setState({playText:"Deleted: "})},a.onClickReset=function(e){a.typed.reset(),a.state.condition?a.setState({playText:"Paused: "}):a.setState({playText:"Playing: "})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e={strings:this.props.strings,typeSpeed:100,backSpeed:50,loop:!0,shuffle:!1};this.typed=new p.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this,t=!0===this.state.condition?"play":"pause",a=Y[t].iconName;return r.a.createElement("div",null,r.a.createElement("div",{className:"pusher"},r.a.createElement("div",{className:"wrap ui inverted vertical masthead center aligned segment top_page"},r.a.createElement(B,null),r.a.createElement(w,null),r.a.createElement(f,null),this.props.insert?r.a.createElement(b.a,{in:this.props.show,appear:!0,timeout:{enter:300,exit:300},classNames:"hiddenNavbarTransition"},r.a.createElement(I,null)):"",r.a.createElement("div",{className:"title title__wrap"},r.a.createElement("div",{className:"ui text container"},r.a.createElement("h1",{id:"title__name",className:"ui inverted header"},"HENRY")),r.a.createElement("div",{className:"type-wrap"},r.a.createElement("h2",null,r.a.createElement("span",{id:"title__type",style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))),r.a.createElement("div",{className:"buttonsDiv",id:"title__buttons"},r.a.createElement("br",null),r.a.createElement("div",{id:"play_text_container"},r.a.createElement("div",{id:"play_text"},this.state.playText),r.a.createElement("i",{className:"".concat(a," icon buttonHover buttonHover1"),onClick:this.onInputChange}),r.a.createElement("i",{className:"redo alternate icon buttonHover buttonHover2",onClick:this.onClickReset}),r.a.createElement("i",{className:"trash icon buttonHover buttonHover3",onClick:this.onClickDestroyed}))))),r.a.createElement(D,{id:"section1"}),r.a.createElement(W,null)))}}]),t}(r.a.Component),F=Object(g.b)(function(e){return{show:e.navbar.show,insert:e.navbar.insert}},{})(z),J=a(74),q=a(334);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var K={show:!1,insert:!1},X={project:{personalweb:{headerText:"Portfolio",projectType:"Web application",desc:"Portfolio website to demonstrate my skill sets and let people get to discover more about me",linktoGithub:"https://github.com/LCLY/personalwebsite",tools:["React","Redux","Semantic UI","Typed.js","Particle.js","HTML","SCSS","CSS","JS"],challenges:["Integrating external libraries and utilize them appropriately.","Making the application web responsive"],lessons:["Read the document of the libraries thoroughly multiple times.","Note down the problems that need to be solved.","Make use of media queries to achieve mobile and web responsive."]},fliegen:{headerText:"Fliegen",projectType:"Web application/Hackthon",desc:"A mock web application designed for students and recruiters/professionals to connect more effectively",linktoGithub:"https://github.com/LCLY/boilermake2018",tools:["Sqlite3","Heroku","Bootstrap","jQuery","Express","HTML","CSS","JS"],challenges:["Work under pressure, deliver within 36 hours.","Collaborate closely with the design team","Work with team members that were new to web technologies"],lessons:["Allocate more time for more important tasks.","Distribute tasks among team members","Communicate with teammates from time to time.","Guide teammates with what I know to increase efficiency."]},boileride:{headerText:"Boileride",projectType:"Web application",desc:"A ride sharing web application that allows users to list, search and reserve rides around Purdue University.",linktoGithub:"https://github.com/ryanteo96/Boileride",tools:["Bootstrap","jQuery","Express","Java","MySQL","Google Maps Platform","Agile/Scrum"],challenges:["Write detail project documentations such as product backlog and software testing.","Work with backend team to build the application","Understand black box, incremental, high order and regression testing "],lessons:["Plan discussion topics ahead before having a meeting.","Communicate with team leader/team members on technical or other issues."]}}},Z=Object(J.c)({navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=t.type;t.payload;switch(a){case"Show the hidden navbar":return V({},e,{show:!0});case y:return V({},e,{show:!1});case"Insert Navbar into the DOM":return V({},e,{insert:!0});case"Remove Navbar from the DOM":return V({},e,{insert:!1});default:return e}},content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;t.type,t.payload;return e}}),$=[q.a],ee=Object(J.e)(Z,{},Object(J.d)(J.a.apply(void 0,$)));o.a.render(r.a.createElement(g.a,{store:ee},r.a.createElement(F,{strings:["Hi, I'm Henry.","I am a <strong><i>Software Developer.</i></strong>","I graduated from <strong>Purdue University.</strong>","I do <strong>Web Development.</strong>","I worked with various technologies!","I am trilingual.","I am a <strong>team player.</strong>"]})),document.querySelector("#root"))}},[[346,1,2]]]);
//# sourceMappingURL=main.377c47cb.chunk.js.map