if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const o=e=>n(e,t),r={module:{uri:t},exports:i,require:o};s[t]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(a(...e),i)))}}define(["./workbox-d3743c38"],(function(e){"use strict";importScripts("worker-LFXYCXfTcmW_IS_2oCnX5.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LFXYCXfTcmW_IS_2oCnX5/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/_next/static/LFXYCXfTcmW_IS_2oCnX5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/115-3d83aa5d6717c27a.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/214-0a1ed62e08f6b608.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/2443530c-426bc020dd114102.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/293-11ffefa55b1cdfc7.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/31092f3d-a8145e093f11dff7.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/394-217d27ba761b4d9f.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/414-efd7675de117d871.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/477-f0c71767c9ab48d4.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/4b4758af-10bb743ff71c1d17.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/507-1e713e6f583bbcb3.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/539-98a4653dcb94cf6d.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/62-18c0dbce9bab5cd5.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/636-6f3ff8126ea8a98f.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/729-311c0a1e57ac6408.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/751-fe18de51d1f75b97.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/853-127d30eb05be7f33.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/897-b30caeaf78f0e01c.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/99b1da55-8707c98eaafd4e26.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/a4cbc033-efb754bea0844e83.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/dashboard/autographs/%5Bid%5D/page-805fe77957379ff8.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/dashboard/autographs/page-916f30e5d7bf42dc.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/dashboard/events/%5Bid%5D/page-5859fc42546b10c9.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/dashboard/events/page-887cf688998fca53.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/dashboard/home/page-851849a066037fca.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/dashboard/layout-06da8f3c1a0f41a3.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/dashboard/page-335e28987e155f99.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/floorplan/page-e38081361c5c1355.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/layout-b549422596d5ae33.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/page-9945d2f1e3dd7721.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/signin/layout-3e2ac69d8287b85d.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/signin/page-ee5e71b2c88f1eb2.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/signup/page-a4adb31496b69795.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/vendors/%5Bid%5D/page-4efce9a0e2eb764d.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/app/vendors/page-2f2b11f69f89a9c0.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/b7d461da-51b1b04c130f68b7.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/c76e8848-e43627dc80885fcf.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/main-app-a5b2cb30a3852935.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/main-c349f9679d0479dc.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0d75b37bb735651f.js",revision:"LFXYCXfTcmW_IS_2oCnX5"},{url:"/_next/static/css/e7ba3fd067c397d9.css",revision:"e7ba3fd067c397d9"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!!e&&!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
