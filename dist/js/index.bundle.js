/*! For license information please see index.bundle.js.LICENSE.txt */
(self.webpackChunkping_pong=self.webpackChunkping_pong||[]).push([[826],{6288:function(t,e,n){var r=n(3649),i=n(3590),o=n(4615),c=r("unscopables"),s=Array.prototype;null==s[c]&&o.f(s,c,{configurable:!0,value:i(null)}),t.exports=function(t){s[c][t]=!0}},2569:function(t,e,n){var r=n(794);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},3579:function(t,e,n){"use strict";var r=n(1324),i=n(6782),o=n(97);t.exports=function(t){for(var e=r(this),n=o(e.length),c=arguments.length,s=i(c>1?arguments[1]:void 0,n),a=c>2?arguments[2]:void 0,u=void 0===a?n:i(a,n);u>s;)e[s++]=t;return e}},5766:function(t,e,n){var r=n(2977),i=n(97),o=n(6782),c=function(t){return function(e,n,c){var s,a=r(e),u=i(a.length),f=o(c,u);if(t&&n!=n){for(;u>f;)if((s=a[f++])!=s)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},9624:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},3478:function(t,e,n){var r=n(4402),i=n(929),o=n(6683),c=n(4615);t.exports=function(t,e){for(var n=i(e),s=c.f,a=o.f,u=0;u<n.length;u++){var f=n[u];r(t,f)||s(t,f,a(e,f))}}},57:function(t,e,n){var r=n(8494),i=n(4615),o=n(4677);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},4677:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8494:function(t,e,n){var r=n(6544);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6668:function(t,e,n){var r=n(7583),i=n(794),o=r.document,c=i(o)&&i(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},5354:function(t,e,n){var r=n(9624),i=n(7583);t.exports="process"==r(i.process)},6918:function(t,e,n){var r=n(5897);t.exports=r("navigator","userAgent")||""},4061:function(t,e,n){var r,i,o=n(7583),c=n(6918),s=o.process,a=s&&s.versions,u=a&&a.v8;u?i=(r=u.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(i=r[1]),t.exports=i&&+i},5690:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7263:function(t,e,n){var r=n(7583),i=n(6683).f,o=n(57),c=n(1270),s=n(460),a=n(3478),u=n(4451);t.exports=function(t,e){var n,f,l,h,p,v=t.target,y=t.global,b=t.stat;if(n=y?r:b?r[v]||s(v,{}):(r[v]||{}).prototype)for(f in e){if(h=e[f],l=t.noTargetGet?(p=i(n,f))&&p.value:n[f],!u(y?f:v+(b?".":"#")+f,t.forced)&&void 0!==l){if(typeof h==typeof l)continue;a(h,l)}(t.sham||l&&l.sham)&&o(h,"sham",!0),c(n,f,h,t)}}},6544:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},5897:function(t,e,n){var r=n(1287),i=n(7583),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},7583:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},4402:function(t){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},4639:function(t){t.exports={}},482:function(t,e,n){var r=n(5897);t.exports=r("document","documentElement")},275:function(t,e,n){var r=n(8494),i=n(6544),o=n(6668);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},5044:function(t,e,n){var r=n(6544),i=n(9624),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},9734:function(t,e,n){var r=n(1314),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},2743:function(t,e,n){var r,i,o,c=n(9491),s=n(7583),a=n(794),u=n(57),f=n(4402),l=n(1314),h=n(9137),p=n(4639),v=s.WeakMap;if(c){var y=l.state||(l.state=new v),b=y.get,d=y.has,g=y.set;r=function(t,e){return e.facade=t,g.call(y,t,e),e},i=function(t){return b.call(y,t)||{}},o=function(t){return d.call(y,t)}}else{var x=h("state");p[x]=!0,r=function(t,e){return e.facade=t,u(t,x,e),e},i=function(t){return f(t,x)?t[x]:{}},o=function(t){return f(t,x)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},4451:function(t,e,n){var r=n(6544),i=/#|\.prototype\./,o=function(t,e){var n=s[c(t)];return n==u||n!=a&&("function"==typeof e?r(e):!!e)},c=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=o.data={},a=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},794:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},6268:function(t){t.exports=!1},8640:function(t,e,n){var r=n(5354),i=n(4061),o=n(6544);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!Symbol.sham&&(r?38===i:i>37&&i<41)}))},9491:function(t,e,n){var r=n(7583),i=n(9734),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(i(o))},3590:function(t,e,n){var r,i=n(2569),o=n(8728),c=n(5690),s=n(4639),a=n(482),u=n(6668),f=n(9137)("IE_PROTO"),l=function(){},h=function(t){return"<script>"+t+"<\/script>"},p=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;p=r?function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=u("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete p.prototype[c[n]];return p()};s[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=i(t),n=new l,l.prototype=null,n[f]=t):n=p(),void 0===e?n:o(n,e)}},8728:function(t,e,n){var r=n(8494),i=n(4615),o=n(2569),c=n(5432);t.exports=r?Object.defineProperties:function(t,e){o(t);for(var n,r=c(e),s=r.length,a=0;s>a;)i.f(t,n=r[a++],e[n]);return t}},4615:function(t,e,n){var r=n(8494),i=n(275),o=n(2569),c=n(2670),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(o(t),e=c(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},6683:function(t,e,n){var r=n(8494),i=n(112),o=n(4677),c=n(2977),s=n(2670),a=n(4402),u=n(275),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=s(e,!0),u)try{return f(t,e)}catch(t){}if(a(t,e))return o(!i.f.call(t,e),t[e])}},9275:function(t,e,n){var r=n(8356),i=n(5690).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},4012:function(t,e){e.f=Object.getOwnPropertySymbols},8356:function(t,e,n){var r=n(4402),i=n(2977),o=n(5766).indexOf,c=n(4639);t.exports=function(t,e){var n,s=i(t),a=0,u=[];for(n in s)!r(c,n)&&r(s,n)&&u.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~o(u,n)||u.push(n));return u}},5432:function(t,e,n){var r=n(8356),i=n(5690);t.exports=Object.keys||function(t){return r(t,i)}},112:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},929:function(t,e,n){var r=n(5897),i=n(9275),o=n(4012),c=n(2569);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=o.f;return n?e.concat(n(t)):e}},1287:function(t,e,n){var r=n(7583);t.exports=r},1270:function(t,e,n){var r=n(7583),i=n(57),o=n(4402),c=n(460),s=n(9734),a=n(2743),u=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,s){var a,u=!!s&&!!s.unsafe,h=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),(a=f(n)).source||(a.source=l.join("string"==typeof e?e:""))),t!==r?(u?!p&&t[e]&&(h=!0):delete t[e],h?t[e]=n:i(t,e,n)):h?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||s(this)}))},3955:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},460:function(t,e,n){var r=n(7583),i=n(57);t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},9137:function(t,e,n){var r=n(7836),i=n(8284),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},1314:function(t,e,n){var r=n(7583),i=n(460),o="__core-js_shared__",c=r[o]||i(o,{});t.exports=c},7836:function(t,e,n){var r=n(6268),i=n(1314);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6782:function(t,e,n){var r=n(5089),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},2977:function(t,e,n){var r=n(5044),i=n(3955);t.exports=function(t){return r(i(t))}},5089:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},97:function(t,e,n){var r=n(5089),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},1324:function(t,e,n){var r=n(3955);t.exports=function(t){return Object(r(t))}},2670:function(t,e,n){var r=n(794);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},8284:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},7786:function(t,e,n){var r=n(8640);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3649:function(t,e,n){var r=n(7583),i=n(7836),o=n(4402),c=n(8284),s=n(8640),a=n(7786),u=i("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return o(u,t)&&(s||"string"==typeof u[t])||(s&&o(f,t)?u[t]=f[t]:u[t]=l("Symbol."+t)),u[t]}},1271:function(t,e,n){var r=n(7263),i=n(3579),o=n(6288);r({target:"Array",proto:!0},{fill:i}),o("fill")},308:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(1271);var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.getElementById(e),this.ctx=this.canvas.getContext(n),this.generateObjs(),this.canvas.addEventListener("mousemove",this.moveRacket.bind(this))}var e,n;return e=t,(n=[{key:"generateObjs",value:function(){this.user={x:0,y:this.canvas.height/2-100,width:20,height:200,color:"white",score:0},this.comp={x:this.canvas.width-20,y:this.canvas.height/2-100,width:20,height:200,color:"white",score:0},this.ball={x:this.canvas.width/2,y:this.canvas.height/2,r:15,speed:5,velocityX:5,velocityY:5,color:"white"}}},{key:"drawRect",value:function(t,e,n,r,i){this.ctx.fillStyle=i,this.ctx.fillRect(t,e,n,r)}},{key:"drawCircle",value:function(t,e,n,r){this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(t,e,n,0,2*Math.PI,!1),this.ctx.fill()}},{key:"drawText",value:function(t,e,n,r){this.ctx.fillStyle=r,this.ctx.font="45px Century Gothic",this.ctx.fillText(n,t,e)}},{key:"drawNet",value:function(t,e,n){this.ctx.strokeStyle=n,this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.setLineDash([t,e]),this.ctx.moveTo(this.canvas.width/2,0),this.ctx.lineTo(this.canvas.width/2,this.canvas.height),this.ctx.stroke()}},{key:"moveRacket",value:function(t){var e=this.canvas.getBoundingClientRect();this.user.y=t.clientY-e.top-this.user.height/2}},{key:"collision",value:function(t,e){return t.top=t.y-t.r,t.bottom=t.y+t.r,t.right=t.x+t.r,t.left=t.x-t.r,e.top=e.y,e.bottom=e.y+e.height,e.right=e.x+e.width,e.left=e.x,t.right>e.left&&t.bottom>e.top&&t.left<e.right&&t.top<e.bottom}},{key:"reset",value:function(){this.ball.x=this.canvas.width/2,this.ball.y=this.canvas.height/2,this.ball.speed=5,this.ball.velocityX=-this.ball.velocityX}},{key:"renderer",value:function(){this.update(),this.drawRect(0,0,this.canvas.width,this.canvas.height,"black"),this.drawNet(25,10,"white"),this.drawText(this.canvas.width/4,this.canvas.height/5,this.user.score,"white"),this.drawText(3*this.canvas.width/4,this.canvas.height/5,this.comp.score,"white"),this.drawCircle(this.ball.x,this.ball.y,this.ball.r,"white"),this.drawRect(this.user.x,this.user.y,this.user.width,this.user.height,"white"),this.drawRect(this.comp.x,this.comp.y,this.comp.width,this.comp.height,"white"),requestAnimationFrame(this.renderer.bind(this))}},{key:"update",value:function(){this.ball.x+=this.ball.velocityX,this.ball.y+=this.ball.velocityY,this.comp.y+=.1*(this.ball.y-(this.comp.y+this.comp.height/2)),(this.ball.y+this.ball.r>this.canvas.height||this.ball.y-this.ball.r<0)&&(this.ball.velocityY=-this.ball.velocityY);var t=this.ball.x<this.canvas.width/2?this.user:this.comp;if(this.collision(this.ball,t)){var e=this.ball.y-(t.y+t.height/2),n=(e/=t.height/2)*Math.PI/4,r=this.ball.x<this.canvas.width/2?1:-1;this.ball.velocityX=r*this.ball.speed*Math.cos(n),this.ball.velocityY=this.ball.speed*Math.sin(n),this.ball.speed+=.6}this.ball.x-this.ball.r<0?(this.comp.score++,this.reset()):this.ball.x+this.ball.r>this.canvas.width&&(this.user.score++,this.reset())}}])&&r(e.prototype,n),t}();window.addEventListener("load",(function(){if("serviceWorker"in navigator)try{navigator.serviceWorker.register("serviceWorker.js")}catch(t){console.log("Service Worker Registration Failed")}new i("canvas","2d").renderer()}))}},0,[[308,497]]]);