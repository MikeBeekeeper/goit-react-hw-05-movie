"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[787],{787:function(t,e,n){n.r(e);var r=n(439),a=n(754),c=n(791),u=n(689),o=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1],i=(0,u.UO)().movieId;return(0,c.useEffect)((function(){(0,a.Bt)(i).then((function(t){0===t.length&&s(null),t.length>0&&s(t)}))}),[i]),(0,o.jsxs)(o.Fragment,{children:[!n&&(0,o.jsx)("div",{children:"We don't have any reviews for this cinema"}),n&&(0,o.jsx)("ul",{children:n.map((function(t){var e=t.author,n=t.content,r=t.id;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:["Author: ",e]}),(0,o.jsx)("p",{children:n})]},r)}))})]})}},754:function(t,e,n){n.d(e,{Bt:function(){return l},LI:function(){return v},Y5:function(){return p},wr:function(){return i},y:function(){return f}});var r=n(861),a=n(687),c=n.n(a),u=n(243),o="https://api.themoviedb.org/3/",s="e921f15ae860f6e4269e7dedfe9b8c39";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(s));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie",{params:{api_key:s,query:e}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=787.92bf6ed7.chunk.js.map