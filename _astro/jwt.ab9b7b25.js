/*! js-cookie v3.0.5 | MIT */function l(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var c in o)e[c]=o[c]}return e}var y={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function f(e,t){function o(r,i,n){if(!(typeof document>"u")){n=l({},t,n),typeof n.expires=="number"&&(n.expires=new Date(Date.now()+n.expires*864e5)),n.expires&&(n.expires=n.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var d in n)n[d]&&(s+="; "+d,n[d]!==!0&&(s+="="+n[d].split(";")[0]));return document.cookie=r+"="+e.write(i,r)+s}}function c(r){if(!(typeof document>"u"||arguments.length&&!r)){for(var i=document.cookie?document.cookie.split("; "):[],n={},s=0;s<i.length;s++){var d=i[s].split("="),w=d.slice(1).join("=");try{var u=decodeURIComponent(d[0]);if(n[u]=e.read(w,u),r===u)break}catch{}}return r?n[r]:n}}return Object.create({set:o,get:c,remove:function(r,i){o(r,"",l({},i,{expires:-1}))},withAttributes:function(r){return f(this.converter,l({},this.attributes,r))},withConverter:function(r){return f(l({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var p=f(y,{path:"/"});new TextEncoder;const h=new TextDecoder,O=e=>{const t=atob(e),o=new Uint8Array(t.length);for(let c=0;c<t.length;c++)o[c]=t.charCodeAt(c);return o},E=e=>{let t=e;t instanceof Uint8Array&&(t=h.decode(t)),t=t.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"");try{return O(t)}catch{throw new TypeError("The input to be decoded is not correctly encoded.")}};class v extends Error{static get code(){return"ERR_JOSE_GENERIC"}constructor(t){var o;super(t),this.code="ERR_JOSE_GENERIC",this.name=this.constructor.name,(o=Error.captureStackTrace)===null||o===void 0||o.call(Error,this,this.constructor)}}class a extends v{constructor(){super(...arguments),this.code="ERR_JWT_INVALID"}static get code(){return"ERR_JWT_INVALID"}}function _(e){return typeof e=="object"&&e!==null}function m(e){if(!_(e)||Object.prototype.toString.call(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}const C=E;function T(e){if(typeof e!="string")throw new a("JWTs must use Compact JWS serialization, JWT must be a string");const{1:t,length:o}=e.split(".");if(o===5)throw new a("Only JWTs using Compact JWS serialization can be decoded");if(o!==3)throw new a("Invalid JWT");if(!t)throw new a("JWTs must contain a payload");let c;try{c=C(t)}catch{throw new a("Failed to base64url decode the payload")}let r;try{r=JSON.parse(h.decode(c))}catch{throw new a("Failed to parse the decoded payload as JSON")}if(!m(r))throw new a("Invalid JWT Claims Set");return r}const g="__roadmapsh_jt__";function I(e){return T(e)}function R(){return!!p.get(g)}function j(){const e=p.get(g);return e?I(e):null}export{g as T,p as a,I as d,j as g,R as i};
