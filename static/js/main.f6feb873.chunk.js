(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(3),l=t.n(c),r=(t(11),t(1)),o=t.n(r),i=t(4),m=t(5);t(13);var u=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){var e=Object(i.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.hpb.health.gov.lk/api/get-current-statistical");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement("h1",null,"COVID-19 Situation Report"),s.a.createElement("h3",null,t.update_date_time),s.a.createElement("h2",{className:"datas"},"Total Confirmed Cases:",s.a.createElement("div",{className:"values"},t.local_total_cases)),s.a.createElement("h2",{className:"datas"},"Active Cases:",s.a.createElement("div",{className:"values"},t.local_total_cases-t.local_recovered)),s.a.createElement("h2",{className:"datas"},"New Cases:",s.a.createElement("div",{className:"values"},t.local_new_cases)),s.a.createElement("h2",{className:"datas"},"Total number of individuals in hospitals:",s.a.createElement("div",{className:"values"},t.local_total_number_of_individuals_in_hospitals)),s.a.createElement("h2",{className:"datas"},"Recovered Discharged:"," ",s.a.createElement("div",{className:"values"},t.local_recovered)),s.a.createElement("h2",{className:"datas"},"Deaths: ",s.a.createElement("div",{className:"values"},t.local_deaths))),s.a.createElement("footer",null,"Developed by ",s.a.createElement("a",{href:"https://github.com/Powsikan"},"K.Powsikan")," @2020"," "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.f6feb873.chunk.js.map