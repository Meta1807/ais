(this["webpackJsonpchronos-ais"]=this["webpackJsonpchronos-ais"]||[]).push([[0],{192:function(e,t,a){},210:function(e,t){},212:function(e,t){},222:function(e,t){},224:function(e,t){},249:function(e,t){},251:function(e,t){},252:function(e,t){},257:function(e,t){},259:function(e,t){},278:function(e,t){},290:function(e,t){},293:function(e,t){},298:function(e,t){},300:function(e,t){},323:function(e,t){},418:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),s=a.n(r),i=a(185),c=a.n(i),o=(a(192),a(10)),l=a.p+"static/media/akademis.ed1856e1.png",d=function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2);a[0],a[1];return Object(n.jsx)("nav",{className:"bg-gray-200 dark:bg-gray-900 transition",children:Object(n.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(n.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(n.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:justify-start",children:[Object(n.jsx)("img",{src:l,className:"h-10 ml-2 mr-auto sm:ml-0 sm:mr-4"}),Object(n.jsx)("p",{className:"font-sans font-normal hidden sm:block light:text-black dark:text-white transition",children:"Chronos 2020 - Assignment Tracker"})]}),Object(n.jsxs)("div",{className:"flex-1 flex items-center justify-end",children:[Object(n.jsxs)("p",{className:"dark:text-white transition",children:[Object(n.jsx)("span",{className:"hidden dark:block",children:"Dark"}),Object(n.jsx)("span",{className:"block dark:hidden",children:"Light"})]}),Object(n.jsx)("div",{className:"w-8 py-1 ml-5 relative my-1 cursor-pointer",children:Object(n.jsx)("div",{className:"h-5 bg-gray-300 dark:bg-gray-600 rounded-full",onClick:function(){e.darkHandler[0](!e.darkHandler[1]),localStorage.setItem("darkMode",!e.darkHandler[1])},children:Object(n.jsx)("div",{className:"-ml-3 dark:ml-3 w-6 h-6 absolute transition-all transform ease-linear duration-100 flex items-center justify-center rounded-full bg-white dark:bg-blue-400 shadow-toggle border-gray-300 top-0 left-4 top-a-bit"})})})]})]})})})},u=a(186),m=function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),s=(a[0],a[1],Object(r.useState)(e.filterNow)),i=Object(o.a)(s,2),c=i[0],l=i[1],d=function(t){e.onFilterHandler(t),l(t)};return Object(n.jsx)("nav",{className:"bg-gray-100 dark:bg-gray-800 transition",children:Object(n.jsx)("div",{className:"max-w-7xl mx-auto",children:Object(n.jsxs)("div",{className:"relative flex flex-col md:flex-row-reverse items-center justify-between min-h-8 px-2",children:[Object(n.jsxs)("div",{className:"flex-1 flex flex-row items-center justify-center md:items-stretch md:justify-end py-3",children:[Object(n.jsx)("input",{type:"search",className:"bg-gray-300 dark:bg-gray-700 text-white shadow rounded p-2 transition h-10 my-auto",placeholder:"search tugas/matkul",onChange:function(t){return function(t){e.onSearchHandler(t.target.value)}(t)}}),Object(n.jsx)(u.a,{className:"h-8 w-8 text-black dark:text-white mx-2 my-2 hover:fill-current cursor-pointer hidden md:block transition ".concat(3==c?"fill-current":""),onClick:function(){return d(3)}})]}),Object(n.jsxs)("div",{className:"flex-1 flex flex-col md:flex-row items-center justify-center md:items-stretch md:justify-start pb-3 md:py-3",children:[Object(n.jsx)("a",{className:"block md:hidden cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(3==c?"bg-gray-300 dark:bg-gray-700":""," transition my-1 md:my-0"),role:"menuitem",onClick:function(){return d(3)},children:"Saved"}),Object(n.jsx)("a",{className:"cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold text-purple-500 hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(0==c?"bg-gray-300 dark:bg-gray-700":""," transition my-1 md:my-0"),role:"menuitem",onClick:function(){return d(0)},children:"Semua Jurusan"}),Object(n.jsx)("a",{className:"cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold text-pink-500 hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(1==c?"bg-gray-300 dark:bg-gray-700":""," transition my-1 md:my-0"),role:"menuitem",onClick:function(){return d(1)},children:"Ilmu Komputer"}),Object(n.jsx)("a",{className:"cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold text-blue-500 hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(2==c?"bg-gray-300 dark:bg-gray-700":""," transition my-1 md:my-0"),role:"menuitem",onClick:function(){return d(2)},children:"Sistem Informasi"}),Object(n.jsx)("a",{className:"cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(4==c?"bg-gray-300 dark:bg-gray-700":""," transition my-1 md:my-0"),role:"menuitem",onClick:function(){return d(4)},children:"Finished"})]})]})})})},b=a(42),f=a.n(b),g=a(65),j=(a(194),function(e){var t=e.digitType,a=e.digitValue;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"flex justify-center items-center rounded-lg bg-gray-500 dark:bg-gray-800 h-14 w-14 mx-2 select-none transition",children:Object(n.jsx)("p",{className:"font-sans font-black text-xl text-white",children:a})}),Object(n.jsx)("p",{class:"dark:text-white text-center transition",children:t})]})}),x=function(e){var t=e.endTime,a=Object(r.useState)({}),s=Object(o.a)(a,2),i=s[0],c=s[1];return Object(r.useEffect)((function(){var e=setInterval((function(){!function(e){var t=+new Date(e)-+new Date(Date.now()),a={days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)};c(a)}(t)}),100);return function(){return clearInterval(e)}}),[i,t]),Object(n.jsxs)("div",{className:"countdown p-3 flex justify-center items-center rounded-t-none",children:[Object(n.jsx)(j,{digitType:"Hari",digitValue:i.days}),Object(n.jsx)(j,{digitType:"Jam",digitValue:i.hours}),Object(n.jsx)(j,{digitType:"Menit",digitValue:i.minutes}),Object(n.jsx)(j,{digitType:"Detik",digitValue:i.seconds})]})},h=["All Jurusan","Ilmu Komputer","Sistem Informasi"],p=function(e){switch(e){case"0":return"text-purple-500";case"1":return"text-pink-500";case"2":return"text-blue-500"}},y=function(e){var t=e.data,a=e.title,s=e.subtitle,i=e.description,c=e.endDate,l=e.jurusan,d=e.materi,u=e.link_scele,m=e.kelas,b=e.saveHandler,j=e.isSaved,y=(e.savedArray,Object(r.useState)(!1)),O=Object(o.a)(y,2),k=O[0],v=O[1];return Object(r.useEffect)(Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,j(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.jsxs)("div",{className:"flex flex-col row-span-2 rounded-lg bg-gray-200 dark:bg-gray-900 shadow-lg transition select-none",children:[Object(n.jsxs)("div",{className:"w-min-full rounded-lg rounded-b-none bg-gray-200 dark:bg-gray-900 p-5 select-none transition",id:"card-head",children:[Object(n.jsx)("p",{className:"".concat(p(l)," font-sans font-medium text-md transition"),id:"card-subsubtitle",children:h[l]}),Object(n.jsx)("p",{className:"dark:text-white font-sans font-bold text-xl transition",id:"card-title",children:a}),Object(n.jsxs)("p",{className:"dark:text-white font-sans font-medium text-md transition",id:"card-subtitle",children:[s," - ",m]}),Object(n.jsx)("p",{className:"dark:text-white font-sans font-medium text-sm transition",id:"card-subtitle",children:d}),Object(n.jsx)("p",{className:"dark:text-white font-sans font-medium text-sm transition",id:"card-subtitle"})]}),Object(n.jsx)("div",{className:"p-5 pb-5 bg-gray-200 dark:bg-gray-900 rounded-md rounded-t-none rounded-b-none flex-grow transition select-none",children:Object(n.jsx)("p",{className:"dark:text-white font-sans font-light text-sm text-justify transition",children:i})}),Object(n.jsx)(x,{endTime:c}),Object(n.jsx)("a",{href:u||"#",target:u?"__blank":"",className:"".concat(u?"":"cursor-not-allowed"),children:Object(n.jsx)("div",{className:"px-5 select-none py-3 bg-gray-200 dark:bg-gray-900 ".concat(u?"dark:hover:bg-gray-800 hover:bg-gray-300":""," rounded-md rounded-t-none text-center flex justify-center transition"),children:Object(n.jsx)("p",{className:"".concat(u?"text-blue-600 dark:text-blue-400":"text-gray-500"," transition font-sans font-medium text-sm text-justify"),children:"Link Tugas"})})}),Object(n.jsx)("div",{className:"px-5 py-3 select-none cursor-pointer bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-300 rounded-md rounded-t-none text-center flex justify-center transition",onClick:function(){return b(t)},children:k?Object(n.jsx)("p",{className:"text-red-600 dark:text-red-400 transition font-sans font-medium text-sm text-justify",children:"Remove From Saved"}):Object(n.jsx)("p",{className:"text-blue-600 dark:text-blue-400 transition font-sans font-medium text-sm text-justify",children:"Save"})})]})},O=function(e){var t=e.filterMode,s=e.search,i=Object(r.useState)([]),c=Object(o.a)(i,2),l=c[0],d=c[1],u=Object(r.useState)(0),m=Object(o.a)(u,2),b=m[0],j=(m[1],Object(r.useState)(localStorage.getItem("saveData")&&JSON.parse(localStorage.getItem("saveData"))||[])),x=Object(o.a)(j,2),h=x[0],p=x[1],O=Object(r.useState)(!1),k=Object(o.a)(O,2),v=k[0],N=k[1],w=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h;case 2:return a=e.sent,e.abrupt("return",a.some((function(e){return t.no==e.no})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){a(414)({sheetId:"1uSu85WmJdeJZviBWatZ3HpSWpH4tULet7QTJH5hnvUU",sheetNumber:4,returnAllResults:!1},(function(e){d(e),localStorage.setItem("results",JSON.stringify(e))})).catch((function(e){var t=localStorage.getItem("results");d(JSON.parse(t))}))},D=function(e){var t=h;t.some((function(t){return t.no==e.no}))?(N(!0),t.splice(t.indexOf(e),1),p(t),localStorage.setItem("saveData",JSON.stringify(t)),setTimeout((function(){N(!1)}),50)):(N(!0),t.push(e),p(t),localStorage.setItem("saveData",JSON.stringify(t)),setTimeout((function(){N(!1)}),50))};return Object(r.useEffect)((function(){S();var e=setInterval((function(){S()}),15e3);return function(){return clearInterval(e)}}),[]),Object(n.jsx)("div",{children:v?"":Object(n.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-6 p-5",children:function(e,t){switch(e){case 0:return t.sort((function(e,t){return Date.parse(e.tanggal_selesai)>Date.parse(t.tanggal_selesai)?1:Date.parse(e.tanggal_selesai)<Date.parse(t.tanggal_selesai)?-1:0}));case 1:return t.sort((function(e,t){return e["nama pr"]>t["nama pr"]?1:e["nama pr"]<t["nama pr"]?-1:0}));default:return t.sort((function(e,t){return Date.parse(e.tanggal_selesai)>Date.parse(t.tanggal_selesai)?1:Date.parse(e.tanggal_selesai)<Date.parse(t.tanggal_selesai)?-1:0}))}}(b,function(e,t){return 3==e?JSON.parse(localStorage.getItem("saveData")):4==e?l.filter((function(e){return Date.parse(e.tanggal_selesai)<Date.now()})):l.filter((function(a){var n=new RegExp(t,"i");if(Date.now()<Date.parse(a.tanggal_selesai))return 0==e?a["nama pr"].match(n)||a["nama matkul"].match(n):a.jurusan==e&&a["nama pr"].match(n)||a["nama matkul"].match(n)||0==a.jurusan}))}(t,s)).map((function(e){return Object(n.jsx)(y,{data:e,title:e["nama pr"],jurusan:e.jurusan,subtitle:e["nama matkul"],description:e.deskripsi,endDate:Date.parse(e.tanggal_selesai),materi:e.materi,link_scele:e.link_scele,kelas:e.kelas,saveHandler:D,isSaved:w,savedArray:h},e.no)}))})})};var k=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1],i=Object(r.useState)(""),c=Object(o.a)(i,2),l=c[0],u=c[1],b=Object(r.useState)(!0),f=Object(o.a)(b,2),g=f[0],j=f[1];return Object(r.useEffect)((function(){localStorage.getItem("darkMode")&&"true"!=localStorage.getItem("darkMode")?j(!1):j(!0)}),[g]),Object(r.useEffect)((function(){localStorage.getItem("saveData")||localStorage.setItem("saveData","[]")})),Object(n.jsxs)("div",{className:"".concat(g?"dark":""),children:[Object(n.jsxs)("div",{className:"App light:bg-white dark:bg-gray-700 min-h-screen transition",children:[Object(n.jsx)(d,{darkHandler:[j,g]}),Object(n.jsx)(m,{onFilterHandler:s,onSearchHandler:u,filterNow:a}),Object(n.jsx)("div",{className:"container items-center justify-center py-2",children:Object(n.jsx)(O,{filterMode:a,search:l})})]}),Object(n.jsx)("footer",{class:"footer relative pt-1 mb-0 text-center transition dark:bg-gray-700",children:Object(n.jsxs)("p",{class:"text-xs text-black dark:text-white font-medium pb-2",children:["developed by Adrian Ardizza / ",Object(n.jsx)("a",{href:"https://github.com/chronos2020/ais",target:"__blank",class:"text-blue-500",children:"source code"})]})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,419)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),v()}},[[418,1,2]]]);
//# sourceMappingURL=main.4464b59b.chunk.js.map