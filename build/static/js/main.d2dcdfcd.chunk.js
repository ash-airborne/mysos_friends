(this.webpackJsonpmysos_friends=this.webpackJsonpmysos_friends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),i=(n(12),n(2)),a=n(3),o=n(5),h=n(4),l=n(0),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"profile_pic",src:"https://robohash.org/".concat(r,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},u=function(e){var t=e.friends;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa3 tc ba b--green bg-lightest-blue",children:Object(l.jsx)("input",{type:"search",placeholder:"search friends!",onChange:t})})},b=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"700px"},children:e.children})},f=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(a.a)(n,[{key:"compnentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:" Ooooops. Something Went Wrong"}):this.props.children}}]),n}(r.Component),O=(n(14),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearch=function(t){e.setState({searchfield:t.target.value})},e.state={friends:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({friends:t})}))}},{key:"render",value:function(){var e=this,t=this.state.friends.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.friends.length?Object(l.jsx)("h1",{className:"tc",children:"Loading"}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"Friends"}),Object(l.jsx)(j,{searchChange:this.onSearch}),Object(l.jsx)(b,{children:Object(l.jsx)(f,{children:Object(l.jsx)(u,{friends:t})})})]})}}]),n}(r.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};n(15);s.a.render(Object(l.jsx)(O,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.d2dcdfcd.chunk.js.map