if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-epeugfet.js",revision:null},{url:"assets/index-o2TAB8We.css",revision:null},{url:"assets/MemberListItems-rku6AACl.js",revision:null},{url:"assets/ProjectDetails-6iY477Fj.js",revision:null},{url:"assets/ProjectList-wgAUZmjG.js",revision:null},{url:"index.html",revision:"98339983104530e78acab465bc45c802"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"e1daeb9c779a3c6d339f744266d51906"},{url:"favicon-16x16.png",revision:"ce990f4baba19e44d26c4e6b1bdc9971"},{url:"favicon-32x32.png",revision:"bc4e9c107c0c3ccf6f99632c3c161862"},{url:"manifest.webmanifest",revision:"0d97a4dfd196d34f75185eb169e29c4f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
