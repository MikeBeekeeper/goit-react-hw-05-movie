"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[331],{601:function(n,e,t){t.r(e),t.d(e,{BackLink:function(){return i}});var r,c=t(168),a=t(686),o=t(87),i=(0,a.Z)(o.Link)(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align_atems: center;\n  text-decoration: none;\n  width: 70px;\n  height: 30px;\n  padding: 10px;\n  color: blue;\n  &:hover,\n  &:focus {\n    color: black;\n  }\n"])))},576:function(n,e,t){t.d(e,{HC:function(){return s},aV:function(){return p},up:function(){return l}});var r,c,a,o=t(168),i=t(686),u=t(87),s=i.Z.li(r||(r=(0,o.Z)(["\n  font-size: 20px;\n  margin-bottom: 8px;\n  text-decoration: none;\n  font-color: white;\n"]))),p=i.Z.ul(c||(c=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  list-style: none;\n  text-decoration: none;\n  gap: 10px;\n"]))),l=(0,i.Z)(u.Link)(a||(a=(0,o.Z)(["\n  color: black;\n  opacity: 0.7;\n  font-size: 20px;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    opacity: 1;\n    text-decoration: underline dotted;\n  }\n"])))},754:function(n,e,t){t.d(e,{Bt:function(){return f},LI:function(){return d},Y5:function(){return p},wr:function(){return s},y:function(){return l}});var r=t(861),c=t(687),a=t.n(c),o=t(243),i="https://api.themoviedb.org/3/",u="e921f15ae860f6e4269e7dedfe9b8c39";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie",{params:{api_key:u,query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},43:function(n,e,t){t.d(e,{g:function(){return r}});var r=function(n){if(n)return"https://image.tmdb.org/t/p/w500".concat(n)}},331:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(439),c=t(184),a=t(791).useRef,o=t(87).useLocation,i=t(601).BackLink,u=function(n){var e,t,r=n.title,u=o(),s=a(null!==(e=null===(t=u.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,c.jsx)(i,{to:s.current,children:null!==r&&void 0!==r?r:"Go Back"})},s=t(576),p=t(754),l=t(43),f=t(791),d=t(689),v=function(){var n=(0,f.useState)({}),e=(0,r.Z)(n,2),t=e[0],a=e[1],o=(0,d.UO)().movieId,i=t.poster_path,v=t.title,h=t.vote_average,x=t.overview,m=t.genres;(0,f.useEffect)((function(){(0,p.Y5)(o).then((function(n){return a(n)}))}),[o]);var k=(0,d.TH)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{state:{from:k}}),(0,c.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,c.jsx)("img",{src:(0,l.g)(i),alt:"poster",width:"240px"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:v}),(0,c.jsxs)("p",{children:["User score: ",h]}),(0,c.jsx)("h2",{children:"Overview"}),(0,c.jsx)("p",{children:x}),(0,c.jsx)("h2",{children:"Genres"}),(0,c.jsx)("p",{children:function(){if(m)return m.map((function(n){return n.name})).join(", ")}()})]})]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.up,{to:"cast",children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.up,{to:"reviews",children:"Reviews"})})]}),(0,c.jsx)(f.Suspense,{fallback:(0,c.jsx)("div",{children:"LOADING..."}),children:(0,c.jsx)(d.j3,{})})]})}}}]);
//# sourceMappingURL=331.ac673618.chunk.js.map