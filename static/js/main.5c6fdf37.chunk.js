(this["webpackJsonpdesafio-tractian"]=this["webpackJsonpdesafio-tractian"]||[]).push([[0],{161:function(e,t,n){},162:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n(0),i=n.n(s),c=n(11),r=n.n(c),j=(n(161),n(79)),l=n.n(j),o=n(103),d=n(59),h=n(267),b=n(107),u=n(268),x=n(272),O=n(274),p=n(275);function m(e){var t=e.active;return e.children.filter((function(e){return e.props.name===t}))}n(162);var v=n(128),g=n.n(v);function f(){return g.a.get("https://motor.tractian.com/api/test")}var y=n(53),w=n.n(y),I=n(68),E=n.n(I),k=n(106),P=n(69),C=n(273),A=n(266),B=n(270),S=n(44),D=n(271),T=n(269),F=u.a.Text,M=k.a.TabPane;var N=function(e){var t=e.data[e.index],n=Object(s.useState)(!1),i=Object(d.a)(n,2),c=i[0],r=i[1],j=Object(s.useState)(0),l=Object(d.a)(j,2),o=l[0],h=l[1],b=t.data.assetsData[o],u=t.data,x=u.countAssets,O=u.inUse,p=u.available,m=u.onAlert,v=u.underMaintenance,g=u.insightsPending,f=u.insightsChecked;function y(){r(!1)}return Object(a.jsx)(P.a,{children:Object(a.jsxs)(k.a,{defaultActiveKey:"1",children:[Object(a.jsx)(M,{tab:"Ativos",children:Object(a.jsx)(P.a,{children:t.data.assetsData.map((function(e,t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(C.a,{title:Object(a.jsx)(F,{strong:!0,children:e.name}),className:"card",onClick:function(){return function(e){h(e),r(!0)}(t)},children:[Object(a.jsx)(F,{children:e.description}),Object(a.jsxs)("div",{className:"date-wrapper",children:[Object(a.jsx)(A.a,{}),Object(a.jsxs)(F,{type:"secondary",children:["Iniciado em"," "+new Intl.DateTimeFormat("pt-BR",{year:"numeric",month:"long",day:"2-digit"}).format(Date.parse(e.startup))]})]})]}),Object(a.jsxs)(B.a,{title:Object(a.jsx)(F,{strong:!0,children:b.name}),visible:c,onOk:function(){return y()},onCancel:function(){return y()},index:t,width:800,children:[Object(a.jsxs)(P.a,{gutter:24,justify:"center",children:[Object(a.jsxs)(S.a,{className:"modal-image-wrapper",span:12,children:[Object(a.jsx)(D.a,{width:200,src:b.model.image}),Object(a.jsx)("p",{class:"image-description",children:b.model.description})]}),Object(a.jsxs)(S.a,{span:12,children:[Object(a.jsx)(S.a,{span:12,children:Object(a.jsx)(T.a,{title:"Sa\xfade do equipamento",value:b.healthscore.health,suffix:"/ 100"})}),Object(a.jsx)(S.a,{span:12,children:Object(a.jsx)(T.a,{title:"Insights pendentes",value:b.insights.pending})}),Object(a.jsx)(S.a,{span:12,children:Object(a.jsx)(T.a,{title:"Insights resolvidos",value:b.insights.checked})})]})]}),Object(a.jsx)(P.a,{children:Object(a.jsxs)(S.a,{className:"description-wrapper",children:[Object(a.jsx)(F,{className:"description-title",children:b.category.name}),Object(a.jsx)(F,{className:"description-text",children:b.category.description})]})})]})]})}))})},"assets"),Object(a.jsx)(M,{tab:"Estat\xedsticas",children:Object(a.jsxs)(P.a,{id:"overview",gutter:48,justify:"space-around",children:[Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Total de ativos",value:x})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Em uso",value:O})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Dispon\xedveis",value:p})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Em alerta",value:m})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Em manuten\xe7\xe3o",value:v})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Insights pendentes",value:g})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Insights resolvidos",value:f})}),Object(a.jsx)(A.a,{}),Object(a.jsx)(S.a,{span:12,children:Object(a.jsx)(E.a,{highcharts:w.a,options:{chart:{type:"pie"},title:{text:"Ativos"},series:[{name:"Browsers",colorByPoint:!0,data:[{name:"Em uso",y:O},{name:"Dispon\xedveis",y:p},{name:"Em alerta",y:m},{name:"Em manuten\xe7\xe3o",y:v}]}]}})}),Object(a.jsx)(S.a,{children:Object(a.jsx)(E.a,{highcharts:w.a,options:{chart:{type:"pie"},title:{text:"Insights"},series:[{name:"Browsers",colorByPoint:!0,data:[{name:"Insights pendentes",y:g},{name:"Insights resolvidos",y:f}]}]}})})]})},"stats  ")]})})};var U=function(e){var t=e.data,n={countAssets:0,inUse:0,available:0,onAlert:0,underMaintenance:0,insightsPending:0,insightsChecked:0};return t.forEach((function(e){for(var t in e.data)n[t]+=e.data[t]})),Object(a.jsxs)(P.a,{id:"overview",gutter:48,justify:"space-around",children:[Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Total de ativos",value:n.countAssets})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Em uso",value:n.inUse})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Dispon\xedveis",value:n.available})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Em alerta",value:n.onAlert})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Em manuten\xe7\xe3o",value:n.underMaintenance})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Insights pendentes",value:n.insightsPending})}),Object(a.jsx)(S.a,{span:3,children:Object(a.jsx)(T.a,{title:"Insights resolvidos",value:n.insightsChecked})}),Object(a.jsx)(A.a,{}),Object(a.jsx)(S.a,{span:12,children:Object(a.jsx)(E.a,{highcharts:w.a,options:{chart:{type:"pie"},title:{text:"Ativos"},series:[{name:"Browsers",colorByPoint:!0,data:[{name:"Em uso",y:n.inUse},{name:"Dispon\xedveis",y:n.available},{name:"Em alerta",y:n.onAlert},{name:"Em manuten\xe7\xe3o",y:n.underMaintenance}]}]}})}),Object(a.jsx)(S.a,{children:Object(a.jsx)(E.a,{highcharts:w.a,options:{chart:{type:"pie"},title:{text:"Insights"},series:[{name:"Browsers",colorByPoint:!0,data:[{name:"Insights pendentes",y:n.insightsPending},{name:"Insights resolvidos",y:n.insightsChecked}]}]}})})]})},G=h.a.Header,J=h.a.Sider,K=h.a.Content,L=h.a.Footer,V=b.a.SubMenu,q=u.a.Title;var H=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)("overview"),r=Object(d.a)(c,2),j=r[0],u=r[1],v=Object(s.useState)(0),g=Object(d.a)(v,2),y=g[0],w=g[1];function I(e,t){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(t),w(n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return t=e.sent,console.log(t),e.abrupt("return",i(t.data.units));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsxs)(h.a,{id:"main",children:[Object(a.jsx)(G,{children:Object(a.jsx)(q,{style:{color:"white",marginTop:10},level:2,children:"Placeholder"})}),Object(a.jsxs)(h.a,{children:[Object(a.jsx)(J,{id:"sider",children:Object(a.jsxs)(b.a,{mode:"inline",defaultSelectedKeys:["overview"],children:[Object(a.jsx)(V,{title:Object(a.jsxs)("span",{children:[Object(a.jsx)(O.a,{}),Object(a.jsx)("span",{children:"Unidades"})]}),children:Object(a.jsx)(b.a.ItemGroup,{children:n.map((function(e,t){return Object(a.jsx)(b.a.Item,{onClick:function(){return I("unit",t)},children:e.name},t)}))},"units")}),Object(a.jsxs)(b.a.Item,{onClick:function(){return I("overview")},children:[Object(a.jsx)(p.a,{}),Object(a.jsx)("span",{children:"Vis\xe3o Geral"})]},"overview")]})}),Object(a.jsxs)(h.a,{children:[Object(a.jsxs)(K,{style:{padding:"0 50px"},children:[Object(a.jsxs)(x.a,{style:{margin:"16px 0"},children:[Object(a.jsx)(x.a.Item,{children:"Placeholder"}),Object(a.jsx)(x.a.Item,{children:"unit"===j?"".concat(n[y].name):"overview"===j&&"Vis\xe3o geral"})]}),Object(a.jsx)("div",{id:"site-layout-content",children:Object(a.jsxs)(m,{active:j,children:[Object(a.jsx)(N,{name:"unit",title:"unit",data:n,index:y}),Object(a.jsx)(U,{name:"overview",data:n})]})})]}),Object(a.jsx)(L,{id:"footer",children:"Desafio Tractian 2020 \xae"})]})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,276)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(H,{})}),document.getElementById("root")),R()}},[[263,1,2]]]);
//# sourceMappingURL=main.5c6fdf37.chunk.js.map