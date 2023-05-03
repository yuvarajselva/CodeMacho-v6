"use strict";(self.webpackChunkcode_macho_v6=self.webpackChunkcode_macho_v6||[]).push([[415],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=r(c)===c&&n(c)!==c,i=s,s=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return B},_:function(){return i},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=i(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,f);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,w);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],N=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:l().object.isRequired,alt:L},z=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],M=["style","className"],_=new Set;let j,T;const I=function(e){let{as:t="div",image:n,style:l,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=i(e,z);const{width:y,height:v,layout:b}=n,w=c(y,v,b),{style:E,className:x}=w,k=i(w,M),C=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(N);if(T&&_.has(N))return;let t,r;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:_.has(N),image:n},f)),_.has(N)||(t=requestAnimationFrame((()=>{C.current&&(r=i(C.current,N,_,l,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(N)&&T&&(C.current.innerHTML=T(s({isLoading:_.has(N),isLoaded:_.has(N),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},E,l,{backgroundColor:d}),className:x+(u?" "+u:""),ref:C,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));A.propTypes=S,A.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=i(t,O);return l&&console.warn(l),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=R((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:v}=e,b=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=s({objectFit:y,objectPosition:v,backgroundColor:f},h);const{width:w,height:L,layout:S,images:z,placeholder:M,backgroundColor:_}=o,j=c(w,L,S),{style:T,className:I}=j,A=i(j,C),O={fallback:void 0,sources:[]};return z.fallback&&(O.fallback=s({},z.fallback,{srcSet:z.fallback.srcSet?N(z.fallback.srcSet):void 0})),z.sources&&(O.sources=z.sources.map((e=>s({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,s({},A,{style:s({},T,l,{backgroundColor:f}),className:I+(a?" "+a:"")}),r.createElement(g,{layout:S,width:w,height:L},r.createElement(E,s({},u(M,!1,S,w,L,_,y,v))),r.createElement(x,s({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,O,m,h)))))})),q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:L,width:q,height:q,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=W;const B=R(A);B.displayName="StaticImage",B.propTypes=W},1619:function(e,t,a){var r=a(7294);t.Z=()=>r.createElement("footer",{className:"pt-10"},r.createElement("div",{className:"max-w-screen-xl mx-auto px-4 md:px-8"},r.createElement("div",{className:"mt-10 py-10 items-center justify-between sm:flex"},r.createElement("p",{className:"text-gray-600"},"© 2022 Code Macho Blogs Inc. All rights reserved."),r.createElement("div",{className:"flex items-center gap-x-6 text-gray-400 mt-6"},r.createElement("a",{href:"https://www.linkedin.com/in/yuvaraj-selvarajan/"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},r.createElement("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}))),r.createElement("a",{href:"https://twitter.com/yuvarajselvaa"},r.createElement("svg",{className:"w-6 h-6 hover:text-gray-500 duration-150",fill:"none",viewBox:"0 0 48 48"},r.createElement("g",{"clip-path":"url(#clip0_17_80)"},r.createElement("path",{fill:"currentColor",d:"M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_17_80"},r.createElement("path",{fill:"#fff",d:"M0 0h48v48H0z"}))))),r.createElement("a",{href:"https://github.com/yuvarajselva/"},r.createElement("svg",{className:"w-6 h-6 hover:text-gray-500 duration-150",fill:"none",viewBox:"0 0 48 48"},r.createElement("g",{fill:"currentColor","clip-path":"url(#clip0_910_44)"},r.createElement("path",{"fill-rule":"evenodd",d:"M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z","clip-rule":"evenodd"}),r.createElement("path",{d:"M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_910_44"},r.createElement("path",{fill:"#fff",d:"M0 0h48v48H0z"}))))),r.createElement("a",{href:"https://www.instagram.com/yuvaraj_selvarajan/"},r.createElement("svg",{className:"w-6 h-6 hover:text-gray-500 duration-150",fill:"currentColor",viewBox:"0 0 48 48"},r.createElement("g",{"clip-path":"url(#clip0_17_63)"},r.createElement("path",{d:"M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z"}),r.createElement("path",{d:"M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_17_63"},r.createElement("path",{d:"M0 0h48v48H0z"})))))))))},7306:function(e,t,a){var r=a(7294),n=a(1883),l=a(8032);t.Z=function(){const{0:e,1:t}=(0,r.useState)(!1);return r.createElement("nav",{className:"bg-red-600 w-full border-b md:border-0 md:static"},r.createElement("div",{className:"items-center px-4 max-w-screen-xl mx-auto md:flex"},r.createElement("div",{className:"flex items-center justify-between py-3 md:py-5 md:block"},r.createElement("a",{href:"/"},r.createElement(l.S,{src:"../images/logo.png",alt:"Code Macho",className:"h-8 w-24",__imageData:a(7685)})),r.createElement("div",{className:"md:hidden"},r.createElement("button",{className:"text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border",onClick:()=>t(!e)},e?r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor"},r.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})):r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 8h16M4 16h16"}))))),r.createElement("div",{className:"flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 "+(e?"block":"hidden")},r.createElement("ul",{className:"justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0"},[{title:"Home",path:"/"},{title:"Blog",path:"/blog"},{title:"About",path:"/about"}].map(((e,t)=>r.createElement("li",{key:t,className:"font-bold text-slate-200 hover:text-gray-800"},r.createElement(n.rU,{to:e.path,activeClassName:"block active text-gray-800"},e.title))))))))}},8678:function(e,t,a){var r=a(7294),n=a(7306),l=a(1619);t.Z=e=>{let{children:t}=e;return r.createElement("html",null,r.createElement(n.Z,null),r.createElement("div",null,t),r.createElement(l.Z,null))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{let{title:t}=e;const a=(0,n.K2)("3159585216");return r.createElement("title",null," ",t," | ",a.site.siteMetadata.title," ")}},7685:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e9005c06619382b4166f82fa9b3191de/bfd67/logo.png","srcSet":"/static/e9005c06619382b4166f82fa9b3191de/db59f/logo.png 334w,\\n/static/e9005c06619382b4166f82fa9b3191de/4da21/logo.png 668w,\\n/static/e9005c06619382b4166f82fa9b3191de/bfd67/logo.png 1336w","sizes":"(min-width: 1336px) 1336px, 100vw"},"sources":[{"srcSet":"/static/e9005c06619382b4166f82fa9b3191de/79221/logo.webp 334w,\\n/static/e9005c06619382b4166f82fa9b3191de/99f13/logo.webp 668w,\\n/static/e9005c06619382b4166f82fa9b3191de/1e3eb/logo.webp 1336w","type":"image/webp","sizes":"(min-width: 1336px) 1336px, 100vw"}]},"width":1336,"height":590}')}}]);
//# sourceMappingURL=cbe78ca7f334aa06f90477d7d90a353d534939f8-e7ebf2e0707242cfe86a.js.map