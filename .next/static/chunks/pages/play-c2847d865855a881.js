(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{3396:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play",function(){return s(3923)}])},225:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var n=s(5893),i=s(5675),l=s.n(i),r=s(4795),a={src:"/_next/static/media/sound-on.e69bf29d.svg",height:16,width:16},o={src:"/_next/static/media/sound-off.52e82e1b.svg",height:16,width:16},c=s(7294);function d(e){let{alert:t=!1}=e,[s,i]=(0,c.useState)(!1),[d,u]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{localStorage.getItem("sound")?i("true"===localStorage.getItem("sound")):localStorage.setItem("sound",s)},[]),(0,c.useEffect)(()=>localStorage.setItem("sound",s),[s]),(0,n.jsx)("footer",{className:"fixed right-4 bottom-3 z-20",children:(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:"flex gap-4",children:(0,n.jsx)("li",{children:(0,n.jsx)("button",{title:s?"Mute":"Play music",className:"align-middle hover:scale-105 p-1.5 bg-white rounded-md",children:s?(0,n.jsx)(l(),{src:a,alt:"",width:25,height:25,onClick:()=>i(!1)}):(0,n.jsx)(l(),{src:o,alt:"",width:25,height:25,onClick:function(){i(!0),localStorage.setItem("sound",!0),(0,r.Z)("switch-on")}})})})})})})}},3923:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return M}});var n=s(5893),i=s(1857),l=s.n(i),r=s(7294),a=s(1163),o=s(9008),c=s.n(o);function d(){return(0,n.jsx)("div",{className:"text-slate-900 bg-cover bg-center bg-no-repeat bg-[url('/bg-home.svg')] px-6 py-4 text-2xl flex items-center justify-center absolute top-0 left-0 w-screen h-screen cursor-progress",children:(0,n.jsx)("div",{title:"Loading...",className:"p-8 rounded-full bg-white",children:(0,n.jsxs)("svg",{className:"loader",xmlns:"http://www.w3.org/2000/svg",version:"1.2",baseProfile:"tiny",x:"0",y:"0",viewBox:"0 0 200 200",space:"preserve",children:[(0,n.jsx)("path",{className:"loaderreverse",d:"M200 100c0-30.3-13.5-57.5-34.8-75.8 -4.8-4.1-12.2-3-15.8 2.3v0c-3 4.5-2.4 10.7 1.8 14.2 16.6 14.4 27.1 35.6 27.1 59.3s-10.5 44.9-27.1 59.3c-4.1 3.6-4.8 9.7-1.8 14.2v0c3.6 5.3 11 6.4 15.8 2.3C186.5 157.5 200 130.3 200 100z"}),(0,n.jsx)("path",{d:"M156.7 100c0-14.9-5.8-28.5-15.2-38.6 -4.6-4.9-12.6-4.1-16.3 1.4l-0.4 0.6c-2.8 4.1-2.2 9.5 1.2 13.2 5.7 6.2 9.1 14.4 9.1 23.5 0 9-3.4 17.3-9.1 23.5 -3.3 3.7-3.9 9-1.2 13.2l0.4 0.6c3.7 5.6 11.7 6.3 16.3 1.4C150.9 128.5 156.7 114.9 156.7 100z"})]})})})}var u=s(6473),m=s(1664),x=s.n(m),h=s(7516);function f(){let e=(0,u.w)(e=>e.error);return(0,n.jsx)("main",{className:"text-slate-900 mainHome rounded-md absolute top-0 left-0 w-full h-screen text-center !bg-[length:30rem]",children:(0,n.jsxs)("div",{className:"bg-white w-11/12 max-w-3xl px-5 mx-auto h-full py-4 flex items-center flex-col justify-center",children:[(0,n.jsx)(h.Cw1,{className:"text-8xl mb-4 text-red-500"}),(0,n.jsxs)("h2",{className:"text-3xl",children:[(0,n.jsxs)("span",{className:"text-blue-600",children:[e[1].statusCode||500,":"]})," ",e[1].message&&e[1].message||"Error occured"]}),(0,n.jsx)("p",{className:"text-xl my-2",children:"Ooops! Something went wrong. Please try again later or play offline."}),(0,n.jsx)("nav",{className:"flex gap-6 items-center mt-3",children:(0,n.jsxs)(x(),{className:"text-blue-600 underline text-lg",href:"/",children:[(0,n.jsx)(h.YiX,{className:"inline-block text-2xl mr-2"}),"Go back to home"]})})]})})}var g=s(3750);function b(){let{cleanQuestions:e,cleanWildCards:t}=(0,u.w)(e=>e);return(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{className:"flex gap-4 p-4",children:[(0,n.jsx)("li",{children:(0,n.jsx)(x(),{href:"/",className:"block",onClick:()=>{e(),t()},children:(0,n.jsx)(h.YiX,{color:"#0f172a",className:"text-4xl hover:scale-105 transition-all p-1 bg-white rounded",title:"Go back"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{className:"hover:scale-105 transition-all p-1 bg-white rounded",onClick:()=>document.getElementById("newGameDialog").showModal(),children:(0,n.jsx)(g.cAs,{className:"text-[28px]",color:"#0f172a",title:"New game"})})})]})})}var p=s(5675),w=s.n(p),j=s(8193),y=s(1573);function v(){let{queries:e}=(0,u.w)(e=>e),[t,s]=(0,r.useState)(!1),i=e.timemode&&e.infinitymode?"Time | Infinity":e.timemode||e.infinitymode?e.timemode?"Time":"Infinity":"Classic";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{title:t?"Hidden info":"Show info",onClick:()=>s(e=>!e),className:"jsx-c860bd7987e89e7b fixed bottom-4 top left-4 lg:hidden bg-white z-20 rounded-md p-1",children:(0,n.jsx)(j.kA6,{className:"text-[28px] text-slate-900"})}),(0,n.jsxs)("aside",{className:"jsx-c860bd7987e89e7b "+"fixed h-fit transition-all z-10 lg:bottom-4 left-4 md:top-1/2 md:-translate-y-1/2 text-center text-slate-900 font-medium lg:!scale-100 lg:!opacity-100 ".concat(t?"bottom-12 scale-100 opacity-100":"bottom-0 scale-20 opacity-0"),children:[(0,n.jsxs)("div",{className:"jsx-c860bd7987e89e7b flex gap-2",children:[!e.infinitymode&&(0,n.jsx)("span",{title:"Number of questions",className:"jsx-c860bd7987e89e7b bg-white p-2 rounded-md text-sm w-full pt-[9px] grid place-items-center",children:e.questions}),e.timemode&&(0,n.jsx)("span",{title:"Time",className:"jsx-c860bd7987e89e7b bg-white p-2 rounded-md text-sm w-full pt-[9px] grid place-items-center",children:e.time})]}),(0,n.jsx)("div",{title:"Mode",className:"jsx-c860bd7987e89e7b bg-white p-2 rounded-md mt-2 flex justify-center gap-1 items-center",children:(0,n.jsx)("span",{className:"jsx-c860bd7987e89e7b pt-[2px]",children:i})}),(0,n.jsx)("div",{className:"jsx-c860bd7987e89e7b bg-white p-2 rounded-md mt-2 grid grid-cols-2 gap-2 justify-items-center",children:e.categories.map(e=>{let t=y.find(t=>t.id===e);return(0,n.jsx)(w(),{title:t.name,alt:t.name,className:"p-1 rounded",style:{backgroundColor:t.color},src:"/categories-icons/".concat(t.name.toLowerCase(),".svg"),width:33,height:33},e)})})]}),(0,n.jsx)(l(),{id:"c860bd7987e89e7b",children:"#__next{background:-webkit-linear-gradient(bottom,rgb(0 0 0/10%)0%,rgba(255,255,255,.05)100%);background:-moz-linear-gradient(bottom,rgb(0 0 0/10%)0%,rgba(255,255,255,.05)100%);background:-o-linear-gradient(bottom,rgb(0 0 0/10%)0%,rgba(255,255,255,.05)100%);background:linear-gradient(0deg,rgb(0 0 0/10%)0%,rgba(255,255,255,.05)100%)}"})]})}var N=s(225),k=s(1066),C=s(9583);function q(){let{wildCards:e,useSkipCard:t,queries:s,win:i,useHalfCard:l,currentQuestion:a,score:o}=(0,u.w)(e=>e);function c(t){let n=s.infinitymode?o%5==0?5:o%5:o;return e[t]<1||void 0!==i||a!==n}return(0,r.useEffect)(()=>{function e(e){"s"===e.key&&t(),"h"===e.key&&l()}return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]),(0,n.jsx)("aside",{className:"absolute top-4 right-4 lg:top-1/2 lg:-translate-y-1/2 p-2 rounded-md bg-white",children:(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{className:"flex gap-4 lg:flex-col text-sm",children:[(0,n.jsx)("li",{className:"relative transition-all ".concat(c("skip")?"grayscale cursor-not-allowed":"hover:scale-105 active:scale-95"),children:(0,n.jsxs)("button",{autoFocus:!0,onClick:t,className:"p-[10px] aspect-square rounded bg-blue-500 w-full",title:"Skip question",disabled:c("skip"),children:[(0,n.jsx)(g.vvF,{color:"white",className:"text-xl"}),(0,n.jsxs)("span",{className:"absolute -bottom-2 -right-2 bg-white rounded-full aspect-square w-6 flex justify-center items-center font-semibold",children:["x",e.skip]})]})}),(0,n.jsx)("li",{className:"relative transition-all ".concat(c("half")?"grayscale cursor-not-allowed":"hover:scale-105 active:scale-95"),children:(0,n.jsxs)("button",{onClick:l,className:"p-[10px] aspect-square rounded bg-blue-500 w-full ",title:"Delete two wrong questions",disabled:c("half"),children:[(0,n.jsx)(w(),{src:k.Z.src,alt:"fifty fifty",width:20,height:20}),(0,n.jsxs)("span",{className:"absolute -bottom-2 -right-2 bg-white rounded-full aspect-square w-6 flex justify-center items-center font-semibold",children:["x",e.half]})]})}),(0,n.jsxs)("li",{className:"p-[10px] relative flex items-center rounded bg-blue-500 ".concat(e.lives<1?"grayscale":""),title:"Lives",children:[(0,n.jsx)(C.$0H,{color:"white",className:"text-xl"}),(0,n.jsxs)("span",{className:"absolute -bottom-2 -right-2 bg-white rounded-full aspect-square w-6 flex justify-center items-center font-semibold",children:["x",e.lives]})]})]})})})}var E=s(155),A={src:"/_next/static/media/trophy.0c37497a.svg",height:32,width:32},z=s(4795),_=s(9155),L=s.n(_);let I={position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0,zIndex:100};function S(){let{queries:e,score:t,win:s}=(0,u.w)(e=>e),i=(0,r.useRef)(null),l=(0,r.useCallback)(e=>{i.current=e},[]),a=(0,r.useCallback)((e,t)=>{i.current&&i.current({...t,origin:{y:.7},particleCount:Math.floor(200*e)})},[]),o=(0,r.useCallback)(()=>{a(.25,{spread:26,startVelocity:55}),a(.2,{spread:60}),a(.35,{spread:100,decay:.91,scalar:.8}),a(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{spread:120,startVelocity:45})},[a]);function c(){(0,z.Z)("pop",.2),document.getElementById("gameoverdialog").close(),document.getElementById("gameoverbg").style.display="none"}return(0,r.useEffect)(()=>{!0===s&&(o(),(0,z.Z)("win",.2))},[s]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onClick:c,id:"gameoverbg",className:"transition-all fixed z-30 w-screen h-screen backdrop-blur-sm top-0 left-0"}),(0,n.jsx)(L(),{refConfetti:l,style:I}),(0,n.jsxs)("dialog",{id:"gameoverdialog",open:!0,className:"fixed m-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-md px-6 py-12 rounded-md bg-white text-slate-900 z-40",children:[(0,n.jsx)("button",{className:"absolute top-2 right-2 text-3xl hover:scale-105",onClick:c,children:(0,n.jsx)(E.Lp2,{})}),(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[e.infinitymode?(0,n.jsx)(w(),{src:A,width:100,height:200,alt:"Trophy"}):!0===s?(0,n.jsx)(j.mny,{className:"text-8xl text-green-500"}):(0,n.jsx)(j.LHV,{className:"text-8xl text-red-500"}),(0,n.jsx)("h2",{className:"text-2xl font-bold",children:e.infinitymode?"Congratulations!":!0===s?"You Win!":"You Lose!"}),(0,n.jsx)("p",{className:"text-center mb-3 whitespace-pre-line",children:e.infinitymode?"You answered well ".concat(t," questions!"):!0===s?"Congratulations! \nQuiz completed successfully.":"Better luck next time! \nYou can try again."}),(0,n.jsxs)("div",{className:"flex gap-6 items-center",children:[(0,n.jsxs)(x(),{href:"/",className:"px-5 md:px-10 hover:opacity-75 bg-slate-200 py-3 rounded-md transition-colors",children:[(0,n.jsx)(h.YiX,{color:"#0f172a",className:"text-xl mr-1 inline-block",title:""}),"Go back"]}),(0,n.jsx)("button",{onClick:()=>document.getElementById("newGameDialog").showModal(),className:"btn-primary px-5 md:px-10 py-3 uppercase tracking-widest rounded-md bg-blue-500 text-white",children:e.infinitymode||!1!==s?"Play Again":"Try Again"})]})]})]})]})}function T(e){let{changueCurrent:t}=e,{queries:s,questions:i,currentQuestion:l,score:r}=(0,u.w)(e=>e);return s.infinitymode?(0,n.jsx)("div",{className:"mx-auto bg-white text-black rounded-full z-10 w-14 grid place-items-center aspect-square mb-4 text-xl font-medium",children:r}):(0,n.jsx)("ol",{className:"progressBar mt-8 md:mt-0 flex relative overflow-auto sm:overflow-visible mb-5 md:mb-10 justify-between items-center w-full text-white after:absolute after:top-1/2 after:-z-10 after:transition-all after:duration-700 after:rounded-full after:-translate-y-1/2 after:h-[6px] after:bg-blue-500",style:{"--segments":parseInt(i.length)-1,"--current":r-1},children:[...Array(parseInt(i.length))].map((e,s)=>{let a;return(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:()=>t(s+1),disabled:s+1>r,className:"w-8 h-8 flex items-center justify-center pt-[2px] font-medium transition-all rounded-full text-center text-sm ".concat((console.log(i,s,i[s]),a="bg-slate-600 hover:cursor-auto",s+1===r&&(a="bg-white text-blue-500"),1===i[s].userAnswer&&(a="bg-green-500 !text-white"),-1===i[s].userAnswer&&(a="bg-red-500 !text-white"),2===i[s].userAnswer&&(a="bg-blue-500 !text-white"),s+1<=r&&(a+=" cursor-pointer hover:scale-105"),s+1===l&&(a+=" outline outline-offset-2 hover:outline-offset-4 outline-blue-500"),a)),children:s+1})},s)})})}var Z={src:"/_next/static/media/star.2be004a2.svg",height:527,width:527};function P(e){let{changueCurrent:t,setTime:s,getAnotherQuestions:i}=e,{questions:l,queries:r,loadingInfinity:a,setUserAnswer:o,error:c,useLivesCard:d,setWin:m,wildCards:x,currentQuestion:h,setScore:f,win:g,score:b}=(0,u.w)(e=>e);function p(e){let n=e.target.textContent===l[h-1].correctAnswer;if(e.target.parentNode.classList.add(n?"shake-left-right":"vibrate"),e.target.classList.add(n?"correctAnswer":"wrongAnswer"),document.querySelectorAll(".answers-".concat(h," button")).forEach(e=>{e.disabled=!0,n||e.textContent!==l[h-1].correctAnswer||(e.parentNode.classList.add("shake-left-right"),e.classList.add("correctAnswer"))}),(0,z.Z)(n?"correct_answer":"wrong_answer",.3),r.infinitymode||o(h-1,n?1:-1),r.infinitymode){if(n)1!==b&&b%5==0&&i();else{if(!(x.lives>0))return m(!1);1!==b&&b%5==0&&i(),d()}}else if(n){if(b===Number(r.questions))return m(!0)}else{if(!(x.lives>0))return m(!1);if(d(),b===Number(r.questions))return m(!0)}setTimeout(()=>{f(b+1),s(Number(r.time)),r.infinitymode&&1!==b&&b%5==0?t(1):t(h+1)},1e3)}return c[0]?(0,n.jsx)("div",{className:"flex h-32 md:h-[6.5rem] items-center justify-center rounded-md bg-red-500 px-5 md:px-10 py-6 text-white text-xl font-semibold",children:"An error occurred while loading the next questions..."}):a||!l?(0,n.jsx)("div",{className:"flex h-32 md:h-[6.5rem] items-center justify-center rounded-md bg-blue-500 px-5 mdpx-10: py-6 text-white text-xl font-semibold",children:"Loading next questions..."}):(0,n.jsx)("main",{className:"relative max-w-2xl min-h-[28rem] md:min-h-[16rem] mx-auto h-1/2",children:l.map((e,t)=>(0,n.jsxs)("div",{className:"transition-all duration-500 ".concat(0===t?"":"slide-right"," absolute text-center w-full"),id:"question-"+(t+1),children:[e.ia&&(0,n.jsx)("div",{className:"absolute -top-6 -right-6 p-2",children:(0,n.jsx)(w(),{src:Z,width:50,height:50,alt:"Question generated by AI",title:"Question generated by AI"})}),(0,n.jsx)("p",{className:"rounded-md h-32 md:h-[6.5rem] flex justify-center items-center bg-blue-500 px-5 md:px-10 py-6 text-white text-xl font-semibold mb-3",children:e.question}),(0,n.jsx)("ul",{className:"md:columns-2 mt-4 ".concat("answers-"+(t+1)),children:e.answers.map((e,s)=>(0,n.jsxs)("li",{className:"relative",children:[(0,n.jsx)("button",{className:"".concat("answer-"+(s+1)," peer btn-primary w-full shadow-sm pl-12 py-3 px-5 rounded mb-6 ").concat(e.length>24?"text-sm":""),disabled:!r.infinitymode&&(b!==t+1||h!==t+1||void 0!==g),onClick:p,children:e||"---"}),(0,n.jsx)(w(),{className:"absolute pointer-events-none left-2 top-1 peer-disabled:translate-y-0 peer-hover:translate-y-[0.25em] peer-active:translate-y-[0.75em] transition-transform z-20 invert",src:"/letters/letter-".concat(["a","b","c","d"][s],".svg"),width:40,height:40,alt:"Question ".concat(s+1,"]}")})]},s+e))})]},e.correctAnswer+t))})}function B(){let{questions:e,loading:t,loadingInfinity:s,currentQuestion:i,setCurrentQuestion:l,setUserAnswer:a,win:o,score:c,setWin:d,setScore:m,wildCards:x,useLivesCard:h,queries:f,getQuestions:g}=(0,u.w)(e=>e),[b,p]=(0,r.useState)(Number(f.time));function w(){setTimeout(()=>{p(Number(f.time)),v(1),m(c+1);let e=y.filter(e=>f.categories.find(t=>t===e.id)).map(e=>e.name);g(e,5,!0)},1e3)}function j(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&setTimeout(()=>{m(c+1),p(Number(f.time)),a(c-1,1),v(c+1)},1e3),document.querySelectorAll(".answers-".concat(c," button")).forEach(t=>{t.disabled=!0,t.textContent===e[c-1].correctAnswer&&(t.classList.add("correctAnswer"),t.parentNode.classList.add("shake-left-right"))})}function v(t){t>e.lenght||t<1||(document.querySelectorAll('[id^="question-"]').forEach(e=>{e.classList.remove("slide-left","slide-right"),e.id!=="question-".concat(t)&&e.classList.add(Number(e.id.replace("question-",""))<t?"slide-left":"slide-right")}),l(t))}return(0,r.useEffect)(()=>{var t;let s=null===(t=y.find(t=>{var s;return t.name.toLowerCase()===(null===(s=e[i-1])||void 0===s?void 0:s.topic.toLowerCase())}))||void 0===t?void 0:t.color;function n(e){if(!f.infinitymode&&("ArrowLeft"===e.key&&i>1&&v(i-1),"ArrowRight"===e.key&&i<c&&v(i+1)),"a"===e.key||"b"===e.key||"c"===e.key||"d"===e.key){var t;let s=["a","b","c","d"].indexOf(e.key);-1!==s&&(null===(t=document.querySelector(".answers-".concat(f.infinitymode?i:c," .answer-").concat(s+1)))||void 0===t||t.click())}}return s&&(document.body.style.backgroundColor=s),document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[i,c]),(0,r.useEffect)(()=>{if(void 0!==o||!f.timemode||t||s)return;let e=setInterval(()=>p(e=>e>0?e-1:e),1e3);return()=>clearInterval(e)},[f.timemode,o,t,s]),(0,r.useEffect)(()=>{void 0!==o||b>0||(x.lives<1?(j(),a(c-1,-1),(0,z.Z)("wrong_answer",.3),d(!1)):(f.infinitymode?1!==c&&c%5==0?(j(),w()):j(!0):c===f.questions?(d(!0),j()):j(!0),a(c-1,2),h(),(0,z.Z)("correct_answer",.3)))},[b]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"fixed max-w-xl md:max-w-2xl w-[85%] mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:[(0,n.jsx)(T,{changueCurrent:v}),(0,n.jsx)(P,{changueCurrent:v,setTime:p,getAnotherQuestions:w})]}),void 0!==o&&(0,n.jsx)(S,{}),(0,n.jsx)(q,{}),f.timemode&&(0,n.jsxs)("div",{className:"bg-white flex items-center justify-center w-14 aspect-square absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full text-2xl text-slate-900 font-medium ".concat(b<6&&void 0===o?"pulse_animation":""),children:[b,(0,n.jsx)("svg",{className:"countdown absolute top-0 left-0 w-full rotate-180 overflow-visible h-full",children:(0,n.jsx)("circle",{className:"stroke-blue-500 transition-all duration-1000 ease-linear ".concat(b<6&&void 0===o?" stroke-red-500":""),r:"28",cx:"27",cy:"27",style:{strokeDashoffset:174/f.time*b}})})]})]})}var F=s(9395);function M(){let{loading:e,error:t,getQuestions:s,setQueries:i}=(0,u.w)(e=>e),o=(0,a.useRouter)();return(0,r.useEffect)(()=>{if(o.isReady){let e=(0,F.ZP)(o.query),t=e.categories.map(e=>y.find(t=>t.id===e).name);i(e),s(t,e.infinitymode?5:e.questions)}},[o.isReady]),(0,r.useEffect)(()=>{window.onbeforeunload=()=>"Are you sure you want to leave?"},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{children:(0,n.jsx)("title",{children:"QuizWhiz | Play"})}),e&&(0,n.jsx)(d,{}),t[0]&&(0,n.jsx)(f,{}),!e&&!t[0]&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{}),(0,n.jsx)(v,{}),(0,n.jsx)(B,{}),(0,n.jsx)(N.Z,{alert:!0}),(0,n.jsx)(l(),{id:"60c9033da4c10100",children:"body{background:url(play_bg.webp)center;-webkit-background-size:100%100%;-moz-background-size:100%100%;-o-background-size:100%100%;background-size:100%100%}@media(max-width:1030px){body{-webkit-background-size:auto 100%;-moz-background-size:auto 100%;-o-background-size:auto 100%;background-size:auto 100%}}"})]})]})}}},function(e){e.O(0,[874,617,634,774,888,179],function(){return e(e.s=3396)}),_N_E=e.O()}]);