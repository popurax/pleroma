(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{687:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return y});var s,a,c,o=n(1),i=n(6),r=n(0),u=n(2),l=n(3),d=n.n(l),p=n(20),h=n(5),b=n.n(h),f=n(26),j=n.n(f),O=n(421),g=n(641),m=n(645),w=n(648),M=n(7),I=n(24),R=Object(M.f)({heading:{id:"column.pins",defaultMessage:"Pinned toot"}}),y=Object(p.connect)(function(t){return{statusIds:t.getIn(["status_lists","pins","items"]),hasMore:!!t.getIn(["status_lists","pins","next"])}})(s=Object(M.g)((c=a=function(a){function t(){for(var e,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return e=a.call.apply(a,[this].concat(n))||this,Object(u.a)(Object(r.a)(Object(r.a)(e)),"handleHeaderClick",function(){e.column.scrollTop()}),Object(u.a)(Object(r.a)(Object(r.a)(e)),"setRef",function(t){e.column=t}),e}Object(i.a)(t,a);var e=t.prototype;return e.componentWillMount=function(){this.props.dispatch(Object(O.b)())},e.render=function(){var t=this.props,e=t.intl,n=t.shouldUpdateScroll,s=t.statusIds,a=t.hasMore;return d.a.createElement(g.a,{icon:"thumb-tack",heading:e.formatMessage(R.heading),ref:this.setRef},Object(o.a)(m.a,{}),Object(o.a)(w.a,{statusIds:s,scrollKey:"pinned_statuses",hasMore:a,shouldUpdateScroll:n}))},t}(I.a),Object(u.a)(a,"propTypes",{dispatch:b.a.func.isRequired,shouldUpdateScroll:b.a.func,statusIds:j.a.list.isRequired,intl:b.a.object.isRequired,hasMore:b.a.bool.isRequired}),s=c))||s)||s}}]);
//# sourceMappingURL=pinned_statuses.js.map