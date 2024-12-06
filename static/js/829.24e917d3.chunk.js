"use strict";(self.webpackChunkreact_rework_05_movies=self.webpackChunkreact_rework_05_movies||[]).push([[829],{204:(e,t,s)=>{s.d(t,{A:()=>r});const a="Button_button__wiIYs";var i=s(579);const r=e=>{let{onClick:t,label:s,type:r="button",className:n=""}=e;return(0,i.jsx)("button",{className:`${a} ${n}`,type:r,onClick:t,children:s})}},829:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=s(43),i=s(216),r=s(417),n=s(204);const o="ExpandableText_expandableText__9C2Q4",c="ExpandableText_clampedText__zVEoV",l="ExpandableText_fullText__slzGn",h="ExpandableText_toggleButton__TRyBp";var w=s(579);const d=e=>{let{text:t}=e;const[s,i]=(0,a.useState)(!1);return(0,w.jsxs)("div",{className:o,children:[(0,w.jsx)("p",{className:s?l:c,children:t}),t.length>35&&(0,w.jsx)(n.A,{onClick:()=>i(!s),label:s?"Show less":"more...",className:h,children:s?"Show less":"more..."})]})};var u=s(538);const v={wrapperReviews:"Reviews_wrapperReviews__uzH5Y",castListTitle:"Reviews_castListTitle__+jAke",listReviews:"Reviews_listReviews__wxEg6",itemReviews:"Reviews_itemReviews__i5bhx",autorDetailsContainer:"Reviews_autorDetailsContainer__y-xWg",autorDetailsContainerTwo:"Reviews_autorDetailsContainerTwo__7wE9j",imageReviews:"Reviews_imageReviews__nQ92R",ratingReviews:"Reviews_ratingReviews__uoJz2",spanNA:"Reviews_spanNA__4edjN"},m=()=>{const{movie_id:e}=(0,i.g)(),[t,s]=(0,a.useState)([]),[n,o]=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{try{const t=await(0,r.g4)(e);s(t.results)}catch(t){console.error("Error fetching reviews:",t),o(t.message)}})()}),[e]),n?(0,w.jsxs)("p",{children:["Error: ",n]}):(0,w.jsxs)("div",{className:v.wrapperReviews,children:[(0,w.jsx)("h3",{className:v.castListTitle,children:"REVIEWS"}),0===t.length?(0,w.jsx)("p",{className:v.noReviewsMessage,children:"There are NO reviews yet."}):(0,w.jsx)("ul",{className:v.listReviews,children:t.map((e=>(0,w.jsxs)("li",{className:v.itemReviews,children:[(0,w.jsx)(d,{text:e.content}),(0,w.jsxs)("div",{className:v.autorDetailsContainer,children:[(0,w.jsx)("img",{className:v.imageReviews,src:e.author_details.avatar_path?`https://image.tmdb.org/t/p/w200${e.author_details.avatar_path}`:u,alt:e.username}),(0,w.jsxs)("div",{className:v.autorDetailsContainerTwo,children:[(0,w.jsx)("p",{className:v.usernameReviews,children:e.username}),(0,w.jsxs)("p",{className:v.ratingReviews,children:["Like:"," ",e.rating||(0,w.jsx)("span",{className:v.spanNA,children:"'N/A'"})]}),(0,w.jsxs)("p",{className:v.dateAtReviews,children:["Created at:"," ",new Date(e.created_at).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})]})]})]})]},e.id)))})]})}},417:(e,t,s)=>{s.d(t,{BC:()=>o,FI:()=>c,Je:()=>n,RZ:()=>r,S2:()=>h,So:()=>w,dK:()=>d,g4:()=>l});const a="https://api.themoviedb.org/3",i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQ0NWVhZTQwMTY5ODllMGM1ZjVmNzg5MDRhYzE0YyIsIm5iZiI6MTczMTU5OTQyNS4xMDgyNTcsInN1YiI6IjY1ZGY2NDg3Yjc2Y2JiMDE2M2Q4MzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O8jUWu95b2bCdx3mildt7AG2oKspuZGBhdzndcu47T0"}};async function r(){return fetch(`${a}/trending/movie/week?language=en-US`,i).then((e=>{if(!e.ok)throw new Error("Failed to fetch trending movies");return e.json()})).then((e=>e.results)).catch((e=>(console.error("Error fetching trending movies:",e),null)))}async function n(e){const t=`${a}/search/movie?query=${e}&page=${arguments.length>1&&void 0!==arguments[1]?arguments[1]:1}`,s=await fetch(t,i);if(!s.ok)throw new Error("Fetch failed");return s.json()}async function o(e){const t=`${a}/movie/${e}`,s=await fetch(t,i);if(!s.ok)throw new Error("Failed to fetch movie details");return s.json()}async function c(e){const t=`${a}/movie/${e}/credits`,s=await fetch(t,i);if(!s.ok)throw new Error("Failed to fetch movie credits");return s.json()}async function l(e){const t=`${a}/movie/${e}/reviews`,s=await fetch(t,i);if(!s.ok)throw new Error("Failed to fetch movie reviews");return s.json()}async function h(e){const t=`${a}/search/person?query=${e}&page=${arguments.length>1&&void 0!==arguments[1]?arguments[1]:1}`,s=await fetch(t,i);if(!s.ok)throw new Error("No actors are found here.");return s.json()}async function w(e){const t=`${a}/discover/movie?with_cast=${e}&page=${arguments.length>1&&void 0!==arguments[1]?arguments[1]:1}`,s=await fetch(t,i);if(!s.ok)throw new Error("Failed to fetch the movies of this actor");return s.json()}async function d(e){const t=`${a}/person/${e}`,s=await fetch(t,i);if(!s.ok)throw new Error("Failed to fetch actor photo & info");return s.json()}},538:(e,t,s)=>{e.exports=s.p+"static/media/spy_1024x1024.7f167d23ac3d6126b9c2.webp"}}]);
//# sourceMappingURL=829.24e917d3.chunk.js.map