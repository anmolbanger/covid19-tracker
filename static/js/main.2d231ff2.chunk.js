(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(7),a=c.n(s),i=c(6),d=c.n(i),j=c(8),o=c(9),l=(c(15),c(16),c(20)),b=c(1),h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,r(c.statewise),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"app-name",children:"COVID-19 Tracker (INDIA)"}),Object(b.jsxs)("div",{className:"live",children:[Object(b.jsx)("div",{className:"live-icon"}),Object(b.jsx)("div",{className:"live-text",children:"LIVE"})]})]}),Object(b.jsx)("hr",{style:{color:"white",width:"100%"}}),Object(b.jsx)("div",{className:"main",children:c.map((function(e,t){return Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)(l.a,{bg:"dark",text:"white",border:"white",style:{width:"18rem"},children:[Object(b.jsx)(l.a.Header,{style:{fontSize:"1.1rem",textAlign:"center",borderColor:"white"},children:e.state}),Object(b.jsx)(l.a.Body,{children:Object(b.jsxs)(l.a.Text,{children:["Confirmed: ",e.confirmed," ",Object(b.jsx)("br",{}),"Recovered: ",e.recovered," ",Object(b.jsx)("br",{}),"Active: ",e.active," ",Object(b.jsx)("br",{}),"Deaths: ",e.deaths," ",Object(b.jsx)("br",{}),"Last Updated Time: ",e.lastupdatedtime]})})]})},t)}))})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),u()}},[[18,1,2]]]);
//# sourceMappingURL=main.2d231ff2.chunk.js.map