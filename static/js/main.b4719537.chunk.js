(this.webpackJsonpkeijiban=this.webpackJsonpkeijiban||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=(n(15),n(9)),l=n(2),s=n(3),u=n(1),m=n(5),d=n(4),h=(n(16),n(17),function(e){var t=e.comments.map((function(e,t){return o.a.createElement("li",{key:t,className:"CommentList-item"},e)}));return o.a.createElement("div",null,o.a.createElement("ul",null," ",t," "))}),b=n(8),f=(n(18),n(19),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onClickHandler=a.onClickHandler.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onClickHandler",value:function(){"function"===typeof this.props.onClickHandler&&this.props.onClickHandler()}},{key:"render",value:function(){return o.a.createElement("span",{className:"Button-container",onClick:this.onClickHandler},this.props.children)}}]),n}(o.a.Component)),p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={body:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.sendBodyToParent=a.sendBodyToParent.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(b.a)({},t,e.target.value))}},{key:"sendBodyToParent",value:function(){var e=this.state.body.trim();e?("function"===typeof this.props.onSubmit&&this.props.onSubmit(e),this.setState({body:""})):alert("nothing!")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"Form-textarea"},o.a.createElement("textarea",{name:"body",cols:"30",rows:"5",value:this.state.body,onChange:this.handleChange})),o.a.createElement(f,{onClickHandler:this.sendBodyToParent},"comment!"))}}]),n}(o.a.Component),v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={comments:["first"]},a.addComment=a.addComment.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"addComment",value:function(e){this.setState({comments:[].concat(Object(i.a)(this.state.comments),[e])})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,{onSubmit:this.addComment}),o.a.createElement(h,{comments:this.state.comments}))}}]),n}(o.a.Component);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.b4719537.chunk.js.map