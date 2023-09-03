(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{40220:function(e,n,t){"use strict";t.d(n,{kZ:function(){return u},rg:function(){return i}});var r=t(2265);let o=(0,r.createContext)(null);function i({clientId:e,nonce:n,onScriptLoadSuccess:t,onScriptLoadError:i,children:l}){let u=function(e={}){let{nonce:n,onScriptLoadSuccess:t,onScriptLoadError:o}=e,[i,l]=(0,r.useState)(!1),u=(0,r.useRef)(t);u.current=t;let c=(0,r.useRef)(o);return c.current=o,(0,r.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=n,e.onload=()=>{var e;l(!0),null===(e=u.current)||void 0===e||e.call(u)},e.onerror=()=>{var e;l(!1),null===(e=c.current)||void 0===e||e.call(c)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[n]),i}({nonce:n,onScriptLoadSuccess:t,onScriptLoadError:i}),c=(0,r.useMemo)(()=>({clientId:e,scriptLoadedSuccessfully:u}),[e,u]);return r.createElement(o.Provider,{value:c},l)}let l={large:40,medium:32,small:20};function u({onSuccess:e,onError:n,useOneTap:t,promptMomentNotification:i,type:u="standard",theme:c="outline",size:d="large",text:a,shape:s,logo_alignment:f,width:v,locale:p,click_listener:g,containerProps:w,...m}){let h=(0,r.useRef)(null),{clientId:y,scriptLoadedSuccessfully:_}=function(){let e=(0,r.useContext)(o);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}(),E=(0,r.useRef)(e);E.current=e;let b=(0,r.useRef)(n);b.current=n;let k=(0,r.useRef)(i);return k.current=i,(0,r.useEffect)(()=>{var e,n,r,o,i,l,w,C,S;if(_)return null===(r=null===(n=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===r||r.initialize({client_id:y,callback:e=>{var n;if(!(null==e?void 0:e.credential))return null===(n=b.current)||void 0===n?void 0:n.call(b);let{credential:t,select_by:r}=e;E.current({credential:t,clientId:function(e){var n;let t=null!==(n=null==e?void 0:e.clientId)&&void 0!==n?n:null==e?void 0:e.client_id;return t}(e),select_by:r})},...m}),null===(l=null===(i=null===(o=null==window?void 0:window.google)||void 0===o?void 0:o.accounts)||void 0===i?void 0:i.id)||void 0===l||l.renderButton(h.current,{type:u,theme:c,size:d,text:a,shape:s,logo_alignment:f,width:v,locale:p,click_listener:g}),t&&(null===(S=null===(C=null===(w=null==window?void 0:window.google)||void 0===w?void 0:w.accounts)||void 0===C?void 0:C.id)||void 0===S||S.prompt(k.current)),()=>{var e,n,r;t&&(null===(r=null===(n=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===r||r.cancel())}},[y,_,t,u,c,d,a,s,f,v,p]),r.createElement("div",{...w,ref:h,style:{height:l[d],...null==w?void 0:w.style}})}},175:function(e,n,t){"use strict";function r(e){this.message=e}r.prototype=Error(),r.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,o,i=0,l=0,u="";o=n.charAt(l++);~o&&(t=i%4?64*t+o:o,i++%4)&&(u+=String.fromCharCode(255&t>>(-2*i&6))))o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return u};function i(e){this.message=e}i.prototype=Error(),i.prototype.name="InvalidTokenError",n.Z=function(e,n){if("string"!=typeof e)throw new i("Invalid token specified");var t=!0===(n=n||{}).header?0:1;try{return JSON.parse(function(e){var n,t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return n=t,decodeURIComponent(o(n).replace(/(.)/g,function(e,n){var t=n.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t}))}catch(e){return o(t)}}(e.split(".")[t]))}catch(e){throw new i("Invalid token specified: "+e.message)}}},17:function(e,n,t){Promise.resolve().then(t.bind(t,39158))},39158:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var r=t(57437),o=t(52149);function i(){return(0,r.jsx)(o.cL,{})}},52149:function(e,n,t){"use strict";t.d(n,{EC:function(){return u},cL:function(){return d},dr:function(){return a}});var r=t(57437),o=t(40220),i=t(175),l=t(2265);function u(){return(0,l.useContext)(c).userSession}let c=(0,l.createContext)({userSession:{email:"user@example.com",givenName:"User",familyName:void 0},setUserSession:()=>{}});function d(){let{userSession:e,setUserSession:n}=(0,l.useContext)(c);return e?"Signed in as ".concat(e.email):(0,r.jsx)(o.kZ,{ux_mode:"popup",useOneTap:!0,onSuccess:e=>{let t=(0,i.Z)(e.credential);n(t)},onError:()=>{n(null),console.error("Sign in failed")}})}function a(e){let{children:n}=e,[t,i]=(0,l.useState)(null);return(0,r.jsx)(o.rg,{clientId:"50066463285-dp0gt33nvm2v1ki2vlpi7tdr34gq792u.apps.googleusercontent.com",children:(0,r.jsx)(c.Provider,{value:{userSession:t,setUserSession:i},children:n})})}},30622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:a,props:i,_owner:u.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},57437:function(e,n,t){"use strict";e.exports=t(30622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=17)}),_N_E=e.O()}]);