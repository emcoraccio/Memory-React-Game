(this["webpackJsonpmemory-click-game"]=this["webpackJsonpmemory-click-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"./images/arctic-fox.png","alt":"antelope"},{"id":2,"image":"./images/snake.png","alt":"snake"},{"id":3,"image":"./images/fox.png","alt":"fox"},{"id":4,"image":"./images/hummingbird.png","alt":"hummingbird"},{"id":5,"image":"./images/polar-bear.png","alt":"polar bear"},{"id":6,"image":"./images/seaturtle.png","alt":"sea turtle"},{"id":7,"image":"./images/gorilla.png","alt":"gorilla"},{"id":8,"image":"./images/penguins.png","alt":"penguins"},{"id":9,"image":"./images/giraffes.png","alt":"giraffes"},{"id":10,"image":"./images/elephants.png","alt":"elephants"},{"id":11,"image":"./images/bear.png","alt":"bears"},{"id":12,"image":"./images/rhino.png","alt":"rhino"}]')},,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(8),i=t.n(r),o=(t(15),t(1)),s=t(2),l=t(4),m=t(3),g=t(5),u=(t(16),t(9)),d=(t(17),t(6)),f=function(e){function a(e){var t;Object(o.a)(this,a);var c=(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).props.changeScore;return t.state={clicked:[]},t.shuffleImgs=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}},t.clickImage=function(e){if(-1===t.state.clicked.indexOf(e)){var a=11===t.state.clicked.length?[]:[].concat(Object(u.a)(t.state.clicked),[e]);t.setState({clicked:a}),c("increase")}else c("reset"),t.setState({clicked:[]})},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"row"},this.shuffleImgs(d),d.map((function(a){return n.a.createElement("div",{className:"col s6 m4 l3 card-col",key:a.id},n.a.createElement("div",{className:"card hoverable"},n.a.createElement("div",{className:"card-image"},n.a.createElement("img",{src:a.image,alt:a.alt,onClick:function(){e.clickImage(a.id)}}))))})))}}]),a}(c.Component);var p=function(e){var a=e.feedback;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("h1",{className:"title col s12 center"},"Animal Memory Game"),n.a.createElement("h4",{className:"col s12 center"},a)))};var h=function(e){var a=e.score,t=e.topScore;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s6 m3 offset-m3 center"},n.a.createElement("h5",null,"Score: ",a)),n.a.createElement("div",{className:"col s6 m3 center"},n.a.createElement("h5",null,"Top Score: ",t))))};var v=function(e){var a=e.score,t=e.topScore,c=e.feedback;return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{feedback:c}),n.a.createElement(h,{score:a,topScore:t}))},k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={score:0,topScore:0,feedback:"Click a picture to start. Don't click any pictures more than once."},t.changeScore=function(e){if("increase"===e)if(t.state.score===t.state.topScore||11===t.state.score){var a=11===t.state.score?"You Win!":"Correct!",c=11===t.state.score?0:t.state.score+1;t.setState({score:c,topScore:t.state.score+1,feedback:a})}else t.setState({score:t.state.score+1,feedback:"Correct!"});else"reset"===e&&t.setState({score:0,feedback:"Game Over"})},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(v,this.state),n.a.createElement(f,{changeScore:this.changeScore}))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f4f14fff.chunk.js.map