if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/3g6uDNfDGTZObp3rbi7RV/_buildManifest.js",revision:"ccf0e2979cd8c98aaeb69e5d00274265"},{url:"/_next/static/3g6uDNfDGTZObp3rbi7RV/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/121-962845277c38bf12.js",revision:"962845277c38bf12"},{url:"/_next/static/chunks/192-c185b9e51d918f10.js",revision:"c185b9e51d918f10"},{url:"/_next/static/chunks/848-38030e9e28f66a6a.js",revision:"38030e9e28f66a6a"},{url:"/_next/static/chunks/903.36f3a94f24ae5fd5.js",revision:"36f3a94f24ae5fd5"},{url:"/_next/static/chunks/a6662033-7e896fe9882e0632.js",revision:"7e896fe9882e0632"},{url:"/_next/static/chunks/c3eb6c6b.52733264e25ae5c2.js",revision:"52733264e25ae5c2"},{url:"/_next/static/chunks/framework-ac88a2a245aea9ab.js",revision:"ac88a2a245aea9ab"},{url:"/_next/static/chunks/main-204b17967d493633.js",revision:"204b17967d493633"},{url:"/_next/static/chunks/pages/_app-ea57dea63ab0dcb1.js",revision:"ea57dea63ab0dcb1"},{url:"/_next/static/chunks/pages/_debug/orchestra-2595ebb1569d6486.js",revision:"2595ebb1569d6486"},{url:"/_next/static/chunks/pages/_debug/theatre-3432e2215c031830.js",revision:"3432e2215c031830"},{url:"/_next/static/chunks/pages/_error-ff99e9edc18cd967.js",revision:"ff99e9edc18cd967"},{url:"/_next/static/chunks/pages/home-9dbccb4db1fd4a95.js",revision:"9dbccb4db1fd4a95"},{url:"/_next/static/chunks/pages/index-a266f990dd1b2160.js",revision:"a266f990dd1b2160"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b9aa5c192a474297.js",revision:"b9aa5c192a474297"},{url:"/_next/static/css/2c35e381bbc3369c.css",revision:"2c35e381bbc3369c"},{url:"/_next/static/css/6586238b2cbb959e.css",revision:"6586238b2cbb959e"},{url:"/_next/static/css/d7dff08abb12f9fa.css",revision:"d7dff08abb12f9fa"},{url:"/_next/static/css/ea34b4739da42597.css",revision:"ea34b4739da42597"},{url:"/android-chrome-192x192.png",revision:"ec033e1b5b775da43790a09a34f43278"},{url:"/android-chrome-512x512.png",revision:"f30ddd05b814bce6028610a928a1568a"},{url:"/apple-touch-icon.png",revision:"341af53f94257f47d8589e591043f9b4"},{url:"/config/Satus-2023-04-17T12_55_21.json",revision:"6173918d63fc1a11cbfa6225cded29e3"},{url:"/favicon-16x16.png",revision:"c74a131737938caa21720c07f731b08d"},{url:"/favicon-32x32.png",revision:"763611e9088074fe59b7bd8c1ff22752"},{url:"/favicon.ico",revision:"2f3cf1385f616e11c488c34579459116"},{url:"/manifest.json",revision:"8edabb281c2a9ef2cea4a726ee1df74a"},{url:"/mstile-150x150.png",revision:"bb18012a13596459a921563805ad1368"},{url:"/robots.txt",revision:"be89723a86ffb628df65dec53ee6dbc6"},{url:"/safari-pinned-tab.svg",revision:"c57399513e529cad8cfadf6538f2b376"},{url:"/site.webmanifest",revision:"8edabb281c2a9ef2cea4a726ee1df74a"},{url:"/sitemap-0.xml",revision:"9963943d1dc05445923dafdc8aa87aa7"},{url:"/sitemap.xml",revision:"6c7c87d479e568a8ef3cf7300141247e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));