(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{668:function(a,t,o){"use strict";o.r(t),o.d(t,"default",function(){return S});var c,e,s,n=o(1),r=o(6),p=o(0),i=o(2),l=(o(3),o(20)),d=o(5),u=o.n(d),h=o(26),b=o.n(h),O=o(290),j=o(14),m=o(297),f=o(625),I=o(640),v=o(902),w=o(647),M=o(889),g=o(24),S=Object(l.connect)(function(a,t){return{accountIds:a.getIn(["user_lists","followers",t.params.accountId,"items"]),hasMore:!!a.getIn(["user_lists","followers",t.params.accountId,"next"])}})((s=e=function(e){function a(){for(var o,a=arguments.length,t=new Array(a),c=0;c<a;c++)t[c]=arguments[c];return o=e.call.apply(e,[this].concat(t))||this,Object(i.a)(Object(p.a)(Object(p.a)(o)),"handleScroll",function(a){var t=a.target;t.scrollTop===t.scrollHeight-t.clientHeight&&o.props.hasMore&&o.props.dispatch(Object(j.E)(o.props.params.accountId))}),Object(i.a)(Object(p.a)(Object(p.a)(o)),"handleLoadMore",function(a){a.preventDefault(),o.props.dispatch(Object(j.E)(o.props.params.accountId))}),Object(i.a)(Object(p.a)(Object(p.a)(o)),"shouldUpdateScroll",function(a,t){var o=t.location;return!(((a||{}).location||{}).state||{}).mastodonModalOpen&&!(o.state&&o.state.mastodonModalOpen)}),o}Object(r.a)(a,e);var t=a.prototype;return t.componentWillMount=function(){this.props.dispatch(Object(j.G)(this.props.params.accountId)),this.props.dispatch(Object(j.I)(this.props.params.accountId))},t.componentWillReceiveProps=function(a){a.params.accountId!==this.props.params.accountId&&a.params.accountId&&(this.props.dispatch(Object(j.G)(a.params.accountId)),this.props.dispatch(Object(j.I)(a.params.accountId)))},t.render=function(){var a=this.props,t=a.accountIds,o=a.hasMore,c=null;return t?(o&&(c=Object(n.a)(w.a,{onClick:this.handleLoadMore})),Object(n.a)(I.a,{},void 0,Object(n.a)(M.a,{}),Object(n.a)(m.a,{scrollKey:"followers",shouldUpdateScroll:this.shouldUpdateScroll},void 0,Object(n.a)("div",{className:"scrollable",onScroll:this.handleScroll},void 0,Object(n.a)("div",{className:"followers"},void 0,Object(n.a)(v.a,{accountId:this.props.params.accountId,hideTabs:!0}),t.map(function(a){return Object(n.a)(f.a,{id:a,withNote:!1},a)}),c))))):Object(n.a)(I.a,{},void 0,Object(n.a)(O.a,{}))},a}(g.a),Object(i.a)(e,"propTypes",{params:u.a.object.isRequired,dispatch:u.a.func.isRequired,accountIds:b.a.list,hasMore:u.a.bool}),c=s))||c}}]);
//# sourceMappingURL=followers.js.map