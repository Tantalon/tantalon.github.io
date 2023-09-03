"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{99978:function(e,t,r){r.d(t,{EK:function(){return L},ET:function(){return iz},LV:function(){return im},PL:function(){return iq},hJ:function(){return ih}});var n,i,s=r(63991),a=r(45538),o=r(56914),l=r(8745),u=r(30613);r(62601);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="10.3.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let r=t.map(w);f.debug(`Firestore (${d}): ${e}`,...r)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let r=t.map(w);f.error(`Firestore (${d}): ${e}`,...r)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let r=t.map(w);f.warn(`Firestore (${d}): ${e}`,...r)}}function w(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||v(),new I(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||v(),new c(e)}}class A{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=c.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class N{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new A(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,g("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||v(),this.R=e.token,new b(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static V(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function R(e,t){return e<t?-1:e>t?1:0}function x(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new _(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new _(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return L.fromMillis(Date.now())}static fromDate(e){return L.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new L(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new L(0,0))}static max(){return new V(new L(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,r){void 0===t?t=0:t>e.length&&v(),void 0===r?r=e.length-t:r>e.length-t&&v(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===M.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof M?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends M{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new _(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new F(t)}static emptyPath(){return new F([])}}let P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class O extends M{construct(e,t,r){return new O(e,t,r)}static isValidIdentifier(e){return P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),O.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new O(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new _(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new _(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new _(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new _(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new O(t)}static emptyPath(){return new O([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(F.fromString(e))}static fromName(e){return new U(F.fromString(e).popFirst(5))}static empty(){return new U(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===F.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new F(e.slice()))}}class q{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new q(V.min(),U.empty(),-1)}static max(){return new q(V.max(),U.empty(),-1)}}class z{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof $?t:$.resolve(t)}catch(e){return $.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,r)=>{t(e)})}static reject(e){return new $((t,r)=>{r(e)})}static waitFor(e){return new $((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=$.resolve(!1);for(let r of e)t=t.next(e=>e?$.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new $((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new $((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function K(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}function G(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function H(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function W(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}Q.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.comparator=e,this.root=t||X.EMPTY}insert(e,t){return new Y(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,X.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,X.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new J(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new J(this.root,e,this.comparator,!1)}getReverseIterator(){return new J(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new J(this.root,e,this.comparator,!0)}}class J{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class X{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:X.RED,this.left=null!=n?n:X.EMPTY,this.right=null!=i?i:X.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new X(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return X.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();let e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1,X.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,r,n,i){return this}insert(e,t,r){return new X(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ee(this.data.getIterator())}getIteratorFrom(e){return new ee(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Z)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new Z(this.comparator);return t.data=e,t}}class ee{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.fields=e,e.sort(O.comparator)}static empty(){return new et([])}unionWith(e){let t=new Z(O.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new et(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return x(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new er("Invalid base64 string: "+e):e}}(e);return new en(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new en(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");let ei=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(e){if(e||v(),"string"==typeof e){let t=0,r=ei.exec(e);if(r||v(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ea(e.seconds),nanos:ea(e.nanos)}}function ea(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eo(e){return"string"==typeof e?en.fromBase64String(e):en.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function eu(e){let t=e.mapValue.fields.__previous_value__;return el(t)?eu(t):t}function eh(e){let t=es(e.mapValue.fields.__local_write_time__.timestampValue);return new L(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,r,n,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class ed{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ed("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ed&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function em(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?el(e)?4:eA(e)?9007199254740991:10:v()}function eg(e,t){if(e===t)return!0;let r=em(e);if(r!==em(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eh(e).isEqual(eh(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=es(e.timestampValue),n=es(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eo(e.bytesValue).isEqual(eo(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ea(e.geoPointValue.latitude)===ea(t.geoPointValue.latitude)&&ea(e.geoPointValue.longitude)===ea(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ea(e.integerValue)===ea(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=ea(e.doubleValue),n=ea(t.doubleValue);return r===n?G(r)===G(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return x(e.arrayValue.values||[],t.arrayValue.values||[],eg);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(j(r)!==j(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!eg(r[e],n[e])))return!1;return!0}(e,t);default:return v()}}function ep(e,t){return void 0!==(e.values||[]).find(e=>eg(e,t))}function ey(e,t){if(e===t)return 0;let r=em(e),n=em(t);if(r!==n)return R(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=ea(e.integerValue||e.doubleValue),n=ea(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return ew(e.timestampValue,t.timestampValue);case 4:return ew(eh(e),eh(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){let r=eo(e),n=eo(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=R(r[e],n[e]);if(0!==t)return t}return R(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=R(ea(e.latitude),ea(t.latitude));return 0!==r?r:R(ea(e.longitude),ea(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=ey(r[e],n[e]);if(t)return t}return R(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ef.mapValue&&t===ef.mapValue)return 0;if(e===ef.mapValue)return 1;if(t===ef.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=R(n[e],s[e]);if(0!==t)return t;let a=ey(r[n[e]],i[s[e]]);if(0!==a)return a}return R(n.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function ew(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);let r=es(e),n=es(t),i=R(r.seconds,n.seconds);return 0!==i?i:R(r.nanos,n.nanos)}function ev(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=es(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eo(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,U.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=ev(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${ev(e.fields[i])}`;return r+"}"}(e.mapValue):v()}function eE(e){return!!e&&"integerValue"in e}function e_(e){return!!e&&"arrayValue"in e}function eT(e){return!!e&&"nullValue"in e}function eI(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eC(e){return!!e&&"mapValue"in e}function eS(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return H(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eS(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eS(e.arrayValue.values[r]);return t}return Object.assign({},e)}function eA(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.value=e}static empty(){return new eN({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!eC(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eS(t)}setAll(e){let t=O.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=eS(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());eC(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eg(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];eC(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(H(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new eN(eS(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new eb(e,0,V.min(),V.min(),V.min(),eN.empty(),0)}static newFoundDocument(e,t,r,n){return new eb(e,1,t,V.min(),r,n,0)}static newNoDocument(e,t){return new eb(e,2,t,V.min(),V.min(),eN.empty(),0)}static newUnknownDocument(e,t){return new eb(e,3,t,V.min(),V.min(),eN.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(V.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eN.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eN.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eb&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eb(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t){this.position=e,this.inclusive=t}}function ek(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?U.comparator(U.fromName(a.referenceValue),r.key):ey(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function eR(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!eg(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{}class eV extends eL{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new eO(e,t,r):"array-contains"===t?new eB(e,r):"in"===t?new e$(e,r):"not-in"===t?new eK(e,r):"array-contains-any"===t?new eQ(e,r):new eV(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new eU(e,r):new eq(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ey(t,this.value)):null!==t&&em(this.value)===em(t)&&this.matchesComparison(ey(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eM extends eL{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new eM(e,t)}matches(e){return eF(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function eF(e){return"and"===e.op}function eP(e){for(let t of e.filters)if(t instanceof eM)return!1;return!0}class eO extends eV{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){let t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class eU extends eV{constructor(e,t){super(e,"in",t),this.keys=ez("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eq extends eV{constructor(e,t){super(e,"not-in",t),this.keys=ez("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ez(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>U.fromName(e.referenceValue))}class eB extends eV{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return e_(t)&&ep(t.arrayValue,this.value)}}class e$ extends eV{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ep(this.value.arrayValue,t)}}class eK extends eV{constructor(e,t){super(e,"not-in",t)}matches(e){if(ep(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ep(this.value.arrayValue,t)}}class eQ extends eV{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!e_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ep(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.he=null}}function ej(e,t=null,r=[],n=[],i=null,s=null,a=null){return new eG(e,t,r,n,i,s,a)}function eH(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof eV)return t.field.canonicalString()+t.op.toString()+ev(t.value);if(eP(t)&&eF(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>ev(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>ev(e)).join(",")),e.he=t}return e.he}function eW(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof eV?r instanceof eV&&t.op===r.op&&t.field.isEqual(r.field)&&eg(t.value,r.value):t instanceof eM?r instanceof eM&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void v()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eR(e.startAt,t.startAt)&&eR(e.endAt,t.endAt)}function eY(e){return U.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function eX(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function eZ(e){if(null===e.Pe){e.Pe=[];let t=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(e),r=e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null;if(null!==t&&null===r)t.isKeyField()||e.Pe.push(new ex(t)),e.Pe.push(new ex(O.keyField(),"asc"));else{let t=!1;for(let r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ex(O.keyField(),t))}}}return e.Pe}function e0(e){return e.Ie||(e.Ie=function(e,t){if("F"===e.limitType)return ej(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new ex(e.field,t)});let r=e.endAt?new eD(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new eD(e.startAt.position,e.startAt.inclusive):null;return ej(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,eZ(e))),e.Ie}function e1(e,t,r){return new eJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function e2(e,t){return eW(e0(e),e0(t))&&e.limitType===t.limitType}function e4(e){return`${eH(e0(e))}|lt:${e.limitType}`}function e3(e){var t;let r;return`Query(target=${r=(t=e0(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eV?`${t.field.canonicalString()} ${t.op} ${ev(t.value)}`:t instanceof eM?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ev(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ev(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function e9(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):U.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of eZ(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=ek(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,eZ(e),t))&&(!e.endAt||!!function(e,t,r){let n=ek(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,eZ(e),t))}function e8(e){return(t,r)=>{let n=!1;for(let i of eZ(e)){let e=function(e,t,r){let n=e.field.isKeyField()?U.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?ey(n,i):v()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return v()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){H(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return W(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e6=new Y(U.comparator),e7=new Y(U.comparator);function te(...e){let t=e7;for(let r of e)t=t.insert(r.key,r);return t}function tt(e){let t=e7;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function tr(){return new e5(e=>e.toString(),(e,t)=>e.isEqual(t))}let tn=new Y(U.comparator),ti=new Z(U.comparator);function ts(...e){let t=ti;for(let r of e)t=t.add(r);return t}let ta=new Z(R);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:G(t)?"-0":t}}function tl(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this._=void 0}}function th(e,t){return e instanceof tp?eE(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tc extends tu{}class td extends tu{constructor(e){super(),this.elements=e}}function tf(e,t){let r=tw(t);for(let t of e.elements)r.some(e=>eg(e,t))||r.push(t);return{arrayValue:{values:r}}}class tm extends tu{constructor(e){super(),this.elements=e}}function tg(e,t){let r=tw(t);for(let t of e.elements)r=r.filter(e=>!eg(e,t));return{arrayValue:{values:r}}}class tp extends tu{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ty(e){return ea(e.integerValue||e.doubleValue)}function tw(e){return e_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tv{constructor(e,t){this.version=e,this.transformResults=t}}class tE{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tE}static exists(e){return new tE(void 0,e)}static updateTime(e){return new tE(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function t_(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tT{}function tI(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tR(e.key,tE.none()):new tA(e.key,e.data,tE.none());{let r=e.data,n=eN.empty(),i=new Z(O.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new tN(e.key,n,new et(i.toArray()),tE.none())}}function tC(e,t,r,n){return e instanceof tA?function(e,t,r,n){if(!t_(e.precondition,t))return r;let i=e.value.clone(),s=tk(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof tN?function(e,t,r,n){if(!t_(e.precondition,t))return r;let i=tk(e.fieldTransforms,n,t),s=t.data;return(s.setAll(tb(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):t_(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function tS(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&x(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof td&&n instanceof td||r instanceof tm&&n instanceof tm?x(r.elements,n.elements,eg):r instanceof tp&&n instanceof tp?eg(r.Ee,n.Ee):r instanceof tc&&n instanceof tc)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tA extends tT{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class tN extends tT{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tb(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function tD(e,t,r){var n;let i=new Map;e.length===r.length||v();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(n=r[s],o instanceof td?tf(o,l):o instanceof tm?tg(o,l):n))}return i}function tk(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof tc?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&el(t)&&(t=eu(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof td?tf(e,s):e instanceof tm?tg(e,s):function(e,t){let r=th(e,t),n=ty(r)+ty(e.Ee);return eE(r)&&eE(e.Ee)?tl(n):to(e.serializer,n)}(e,s))}return n}class tR extends tT{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tx extends tT{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof tA?function(e,t,r){let n=e.value.clone(),i=tD(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof tN?function(e,t,r){if(!t_(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=tD(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(tb(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tC(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tC(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=tr();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(n.key)?null:a;let o=tI(s,a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ts())}isEqual(e){return this.batchId===e.batchId&&x(this.mutations,e.mutations,(e,t)=>tS(e,t))&&x(this.baseMutations,e.baseMutations,(e,t)=>tS(e,t))}}class tV{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||v();let n=tn,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new tV(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e,t){this.count=e,this.unchangedNames=t}}function tP(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case n.OK:return E.OK;case n.CANCELLED:return E.CANCELLED;case n.UNKNOWN:return E.UNKNOWN;case n.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case n.INTERNAL:return E.INTERNAL;case n.UNAVAILABLE:return E.UNAVAILABLE;case n.UNAUTHENTICATED:return E.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case n.NOT_FOUND:return E.NOT_FOUND;case n.ALREADY_EXISTS:return E.ALREADY_EXISTS;case n.PERMISSION_DENIED:return E.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case n.ABORTED:return E.ABORTED;case n.OUT_OF_RANGE:return E.OUT_OF_RANGE;case n.UNIMPLEMENTED:return E.UNIMPLEMENTED;case n.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(i=n||(n={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tO=new u.z8([4294967295,4294967295],0);function tU(e){let t=(new TextEncoder).encode(e),r=new u.V8;return r.update(t),new Uint8Array(r.digest())}function tq(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([r,n],0),new u.z8([i,s],0)]}class tz{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new tB(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new tB(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new tB(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=u.z8.fromNumber(this.Ae)}Ve(e,t,r){let n=e.add(t.multiply(u.z8.fromNumber(r)));return 1===n.compare(tO)&&(n=new u.z8([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;let t=tU(e),[r,n]=tq(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);if(!this.me(t))return!1}return!0}static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new tz(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ae)return;let t=tU(e),[r,n]=tq(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class tB extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,tK.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new t$(V.min(),n,new Y(R),e6,ts())}}class tK{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tK(r,t,ts(),ts(),ts())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tQ{constructor(e,t,r,n){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=n}}class tG{constructor(e,t){this.targetId=e,this.ye=t}}class tj{constructor(e,t,r=en.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class tH{constructor(){this.we=0,this.Se=tJ(),this.be=en.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return 0!==this.we}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=ts(),t=ts(),r=ts();return this.Se.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:v()}}),new tK(this.be,this.De,e,t,r)}Oe(){this.ve=!1,this.Se=tJ()}Ne(e,t){this.ve=!0,this.Se=this.Se.insert(e,t)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class tW{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=e6,this.Ue=tY(),this.We=new Y(R)}Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{let r=this.Je(t);switch(e.state){case 0:this.Ye(t)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(t);break;case 3:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),r.Me(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,r)=>{this.Ye(r)&&t(r)})}Xe(e){let t=e.targetId,r=e.ye.count,n=this.et(t);if(n){let i=n.target;if(eY(i)){if(0===r){let e=new U(i.path);this.je(t,e,eb.newNoDocument(e,V.min()))}else 1===r||v()}else{let n=this.tt(t);if(n!==r){let r=this.nt(e),i=r?this.rt(r,e,n):1;0!==i&&(this.Ze(t),this.We=this.We.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}nt(e){let t,r;let n=e.ye.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=eo(i).toUint8Array()}catch(e){if(e instanceof er)return y("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new tz(t,s,a)}catch(e){return y(e instanceof tB?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ae?null:r}rt(e,t,r){return t.ye.count===r-this.ot(e,t.targetId)?0:2}ot(e,t){let r=this.Qe.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.je(t,r,null),n++)}),n}_t(e){let t=new Map;this.Ke.forEach((r,n)=>{let i=this.et(n);if(i){if(r.current&&eY(i.target)){let t=new U(i.target.path);null!==this.$e.get(t)||this.ut(n,t)||this.je(n,t,eb.newNoDocument(t,e))}r.Fe&&(t.set(n,r.xe()),r.Oe())}});let r=ts();this.Ue.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.$e.forEach((t,r)=>r.setReadTime(e));let n=new t$(e,t,this.We,this.$e,r);return this.$e=e6,this.Ue=tY(),this.We=new Y(R),n}ze(e,t){if(!this.Ye(e))return;let r=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,r){if(!this.Ye(e))return;let n=this.Je(e);this.ut(e,t)?n.Ne(t,1):n.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new tH,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Z(R),this.Ue=this.Ue.insert(e,t)),t}Ye(e){let t=null!==this.et(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}et(e){let t=this.Ke.get(e);return t&&t.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new tH),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function tY(){return new Y(U.comparator)}function tJ(){return new Y(U.comparator)}let tX={asc:"ASCENDING",desc:"DESCENDING"},tZ={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t0={and:"AND",or:"OR"};class t1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function t2(e,t){return e.useProto3Json||null==t?t:{value:t}}function t4(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function t3(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function t9(e){return e||v(),V.fromTimestamp(function(e){let t=es(e);return new L(t.seconds,t.nanos)}(e))}function t8(e,t){return new F(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function t5(e){let t=F.fromString(e);return ra(t)||v(),t}function t6(e,t){return t8(e.databaseId,t.path)}function t7(e,t){let r=t5(t);if(r.get(1)!==e.databaseId.projectId)throw new _(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new _(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new U(rr(r))}function re(e,t){return t8(e.databaseId,t)}function rt(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rr(e){return e.length>4&&"documents"===e.get(4)||v(),e.popFirst(5)}function rn(e,t,r){return{name:t6(e,t),fields:r.value.mapValue.fields}}function ri(e){return{fieldPath:e.canonicalString()}}function rs(e){return O.fromServerFormat(e.fieldPath)}function ra(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,r,n,i=V.min(),s=V.min(),a=en.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new ro(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ro(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ro(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ro(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){}Tt(e,t){this.Et(e,t),t.dt()}Et(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(ea(e.integerValue));else if("doubleValue"in e){let r=ea(e.doubleValue);isNaN(r)?this.At(t,13):(this.At(t,15),G(r)?t.Rt(0):t.Rt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.At(t,20),"string"==typeof r?t.Vt(r):(t.Vt(`${r.seconds||""}`),t.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(eo(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.At(t,45),t.Rt(r.latitude||0),t.Rt(r.longitude||0)}else"mapValue"in e?eA(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):v()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let r=e.fields||{};for(let e of(this.At(t,55),Object.keys(r)))this.ft(e,t),this.Et(r[e],t)}bt(e,t){let r=e.values||[];for(let e of(this.At(t,50),r))this.Et(e,t)}wt(e,t){this.At(t,37),U.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}ru.vt=new ru;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this._n=new rc}addToCollectionParentIndex(e,t){return this._n.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(q.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(q.min())}updateCollectionGroup(e,t,r){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class rc{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new Z(F.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new Z(F.comparator)).toArray()}}new Uint8Array(0);class rd{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new rd(e,rd.DEFAULT_COLLECTION_PERCENTILE,rd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rd.DEFAULT_COLLECTION_PERCENTILE=10,rd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rd.DEFAULT=new rd(41943040,rd.DEFAULT_COLLECTION_PERCENTILE,rd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rd.DISABLED=new rd(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new rf(0)}static Bn(){return new rf(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.changes=new e5(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eb.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?$.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&tC(r.mutation,e,et.empty(),L.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ts()).next(()=>t))}getLocalViewOfDocuments(e,t,r=ts()){let n=tr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=te();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=tr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ts()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=e6,s=tr(),a=tr();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof tN)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tC(a.mutation,t,a.mutation.getFieldMask(),L.now())):s.set(t.key,et.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new rg(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=tr(),n=new Y((e,t)=>e-t),i=ts();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||et.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||ts()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=tr();l.forEach(e=>{if(!i.has(e)){let n=tI(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r){return U.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):$.resolve(tr()),a=-1,o=i;return s.next(t=>$.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?$.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,ts())).next(e=>({batchId:a,changes:tt(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(e=>{let t=te();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r){let n=t.collectionGroup,i=te();return this.indexManager.getCollectionParents(e,n).next(s=>$.forEach(s,s=>{var a;let o=(a=s.child(n),new eJ(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let n;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(n=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,n))).next(e=>{n.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,eb.newInvalidDocument(n)))});let r=te();return e.forEach((e,i)=>{let s=n.get(e);void 0!==s&&tC(s.mutation,i,et.empty(),L.now()),e9(t,i)&&(r=r.insert(e,i))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return $.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:t9(t.createTime)}),$.resolve()}getNamedQuery(e,t){return $.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,i,s,a,o,l;let u,h=function(e){let t=t5(e);return 4===t.length?F.emptyPath():rr(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||v();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rs(e.unaryFilter.field);return eV.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=rs(e.unaryFilter.field);return eV.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=rs(e.unaryFilter.field);return eV.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rs(e.unaryFilter.field);return eV.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?eV.create(rs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eM.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op)):v()}(e);return r instanceof eM&&eP(t=r)&&eF(t)?r.getFilters():[r]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new ex(rs(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,r=e.values||[];return new eD(r,t)}(c.startAt));let w=null;return c.endAt&&(w=function(e){let t=!e.before,r=e.values||[];return new eD(r,t)}(c.endAt)),r=h,n=f,i=g,s=m,a=p,o=y,l=w,new eJ(r,n,i,s,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e1(t,t.limit,"L"):t}(t.bundledQuery),readTime:t9(t.readTime)}),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.overlays=new Y(U.comparator),this.hr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){let r=tr();return $.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.It(e,t,n)}),$.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.hr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,t,r){let n=tr(),i=t.length+1,s=new U(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return $.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new Y((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=tr(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tr(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return $.resolve(a)}It(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.hr.get(n.largestBatchId).delete(r.key);this.hr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new tM(t,r));let i=this.hr.get(t);void 0===i&&(i=ts(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.Pr=new Z(rE.Ir),this.Tr=new Z(rE.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let r=new rE(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new rE(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new U(new F([])),r=new rE(t,e),n=new rE(t,e+1),i=[];return this.Tr.forEachInRange([r,n],e=>{this.Ar(e),i.push(e.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new U(new F([])),r=new rE(t,e),n=new rE(t,e+1),i=ts();return this.Tr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new rE(e,0),r=this.Pr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rE{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return U.comparator(e.key,t.key)||R(e.pr,t.pr)}static Er(e,t){return R(e.pr,t.pr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Z(rE.Ir)}checkEmpty(e){return $.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tL(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.wr=this.wr.add(new rE(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,t){return $.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.br(t+1),n=r<0?0:r;return $.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rE(t,0),n=new rE(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,n],e=>{let t=this.Sr(e.pr);i.push(t)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Z(R);return t.forEach(e=>{let t=new rE(e,0),n=new rE(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,n],e=>{r=r.add(e.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;U.isDocumentKey(i)||(i=i.child(""));let s=new rE(new U(i),0),a=new Z(R);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.pr)),!0)},s),$.resolve(this.Dr(a))}Dr(e){let t=[];return e.forEach(e=>{let r=this.Sr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||v(),this.mutationQueue.shift();let r=this.wr;return $.forEach(t.mutations,n=>{let i=new rE(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){let r=new rE(t,0),n=this.wr.firstAfterOrEqual(r);return $.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}vr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.Cr=e,this.docs=new Y(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return $.resolve(r?r.document.mutableCopy():eb.newInvalidDocument(t))}getEntries(e,t){let r=e6;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eb.newInvalidDocument(e))}),$.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=e6,s=t.path,a=new U(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=U.comparator(e.documentKey,t.documentKey))?r:R(e.largestBatchId,t.largestBatchId)}(new q(a.readTime,a.key,-1),r)||(n.has(a.key)||e9(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,t,r,n){v()}Fr(e,t){return $.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rI(this)}getSize(e){return $.resolve(this.size)}}class rI extends rm{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.ar.addEntry(e,n)):this.ar.removeEntry(r)}),$.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.persistence=e,this.Mr=new e5(e=>eH(e),eW),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Or=0,this.Nr=new rv,this.targetCount=0,this.Br=rf.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,r)=>t(r)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),$.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Br=new rf(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.qn(t),$.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),$.waitFor(i).next(()=>n)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){let r=this.Mr.get(t)||null;return $.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),$.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),$.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Nr.gr(t);return $.resolve(r)}containsKey(e,t){return $.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t){this.Lr={},this.overlays={},this.kr=new Q(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new rC(this),this.indexManager=new rh,this.remoteDocumentCache=new rT(e=>this.referenceDelegate.Kr(e)),this.serializer=new rl(t),this.$r=new ry(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Lr[e.toKey()];return r||(r=new r_(t,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);let n=new rA(this.kr.next());return this.referenceDelegate.Ur(),r(n).next(e=>this.referenceDelegate.Wr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Gr(e,t){return $.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,t)))}}class rA extends z{constructor(e){super(),this.currentSequenceNumber=e}}class rN{constructor(e){this.persistence=e,this.zr=new rv,this.jr=null}static Hr(e){return new rN(e)}get Jr(){if(this.jr)return this.jr;throw v()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),$.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{let n=U.fromPath(r);return this.Yr(e,n).next(e=>{e||t.removeEntry(n,V.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return $.or([()=>$.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=n}static Ki(e,t){let r=ts(),n=ts();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new rb(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.$i=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,n){return this.Wi(e,t).next(i=>i||this.Gi(e,t,n,r)).next(r=>r||this.zi(e,t))}Wi(e,t){if(eX(t))return $.resolve(null);let r=e0(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=e0(t=e1(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=ts(...n);return this.Ui.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.ji(t,n);return this.Hi(t,s,i,r.readTime)?this.Wi(e,e1(t,null,"F")):this.Ji(e,s,t,r)}))})))}Gi(e,t,r,n){return eX(t)||n.isEqual(V.min())?this.zi(e,t):this.Ui.getDocuments(e,r).next(i=>{let s=this.ji(t,i);return this.Hi(t,s,r,n)?this.zi(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),e3(t)),this.Ji(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=V.fromTimestamp(1e9===n?new L(r+1,0):new L(r,n));return new q(i,U.empty(),-1)}(n,0)))})}ji(e,t){let r=new Z(e8(e));return t.forEach((t,n)=>{e9(e,n)&&(r=r.add(n))}),r}Hi(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}zi(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e3(t)),this.Ui.getDocumentsMatchingQuery(e,t,q.min())}Ji(e,t,r,n){return this.Ui.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,t,r,n){this.persistence=e,this.Yi=t,this.serializer=n,this.Zi=new Y(R),this.Xi=new e5(e=>eH(e),eW),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rp(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Zi))}}async function rR(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.ns(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=ts();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function rx(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}async function rL(e,t,r){let n=e.Zi.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!K(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.Zi=e.Zi.remove(t),e.Xi.delete(n.target)}function rV(e,t,r){let n=V.min(),i=ts();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,r){let n=e.Xi.get(r);return void 0!==n?$.resolve(e.Zi.get(n)):e.Qr.getTargetData(t,r)})(e,s,e0(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Yi.getDocumentsMatchingQuery(s,t,r?n:V.min(),r?i:ts())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.es.get(n)||V.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.es.set(n,s),{documents:r,_s:i}}))}class rM{constructor(){this.activeTargetIds=ta}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rF{constructor(){this.Ys=new rM,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,t,r){this.Zs[e]=t}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new rM,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{Xs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))e(0)}io(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rU=null;function rq(){return null===rU?rU=268435456+Math.round(2147483648*Math.random()):rU++,"0x"+rU.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rz={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r$="WebChannelConnection";class rK extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Ao=t+"://"+e.host,this.Ro=`projects/${r}/databases/${n}`,this.Vo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get mo(){return!1}fo(e,t,r,n,i){let s=rq(),a=this.po(e,t);g("RestConnection",`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(o,n,i),this.wo(e,a,o,r).then(t=>(g("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw y("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}So(e,t,r,n,i,s){return this.fo(e,t,r,n,i)}yo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+d}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}po(e,t){let r=rz[e];return`${this.Ao}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,t,r,n){let i=rq();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();g(r$,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:g(r$,`RPC '${e}' ${i} timed out`),a(new _(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let r=o.getStatus();if(g(r$,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new _(e,t.message))}else a(new _(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new _(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{g(r$,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);g(r$,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}bo(e,t,r){let i=rq(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let c=s.join("");g(r$,`Creating RPC '${e}' stream ${i}: ${c}`,l);let d=a.createWebChannel(c,l),f=!1,m=!1,p=new rB({_o:t=>{m?g(r$,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(g(r$,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),g(r$,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},ao:()=>d.close()}),w=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return w(d,u.ii.EventType.OPEN,()=>{m||g(r$,`RPC '${e}' stream ${i} transport opened.`)}),w(d,u.ii.EventType.CLOSE,()=>{m||(m=!0,g(r$,`RPC '${e}' stream ${i} transport closed`),p.To())}),w(d,u.ii.EventType.ERROR,t=>{m||(m=!0,y(r$,`RPC '${e}' stream ${i} transport errored:`,t),p.To(new _(E.UNAVAILABLE,"The operation could not be completed")))}),w(d,u.ii.EventType.MESSAGE,t=>{var r;if(!m){let s=t.data[0];s||v();let a=s.error||(null===(r=s[0])||void 0===r?void 0:r.error);if(a){g(r$,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,r=function(e){let t=n[e];if(void 0!==t)return tP(t)}(t),s=a.message;void 0===r&&(r=E.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,p.To(new _(r,s)),d.close()}else g(r$,`RPC '${e}' stream ${i} received:`,s),p.Eo(s)}}),w(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?g(r$,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.kN.NOPROXY&&g(r$,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Io()},0),p}}function rQ(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rG(e){return new t1(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e,t,r=1e3,n=1.5,i=6e4){this.oi=e,this.timerId=t,this.Do=r,this.vo=n,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();let t=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),n=Math.max(0,t-r);n>0&&g("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Fo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,n,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){null!==this.Mo&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){null!==this.Mo&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rH{constructor(e,t,r,n,i,s,a,o){this.oi=e,this.ko=r,this.qo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new rj(e,t)}Wo(){return 1===this.state||5===this.state||this.Go()}Go(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&null===this.Ko&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,t){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,4!==e?this.Uo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(t)}e_(){}auth(){this.state=1;let e=this.t_(this.Qo),t=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Qo===t&&this.n_(e,r)},t=>{e(()=>{let e=new _(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.r_(e)})})}n_(e,t){let r=this.t_(this.Qo);this.stream=this.i_(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(e=>{r(()=>this.r_(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return t=>{this.oi.enqueueAndForget(()=>this.Qo===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rW extends rH{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}i_(e,t){return this.connection.bo("Listen",e,t)}onMessage(e){this.Uo.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:v(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||v(),en.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||v(),en.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:tP(e.code);return new _(t,e.message||"")}(l);r=new tj(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=t7(e,n.document.name),s=t9(n.document.updateTime),a=n.document.createTime?t9(n.document.createTime):V.min(),o=new eN({mapValue:{fields:n.document.fields}}),l=eb.newFoundDocument(i,s,a,o),u=n.targetIds||[],h=n.removedTargetIds||[];r=new tQ(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=t7(e,n.document),s=n.readTime?t9(n.readTime):V.min(),a=eb.newNoDocument(i,s),o=n.removedTargetIds||[];r=new tQ([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=t7(e,n.document),s=n.removedTargetIds||[];r=new tQ([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new tF(n,i),a=e.targetId;r=new tG(a,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return V.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?t9(t.readTime):V.min()}(e);return this.listener.s_(t,r)}o_(e){let t={};t.database=rt(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=eY(n)?{documents:{documents:[re(e,n.path)]}}:{query:function(e,t){var r,n;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=re(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=re(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof eV?function(e){if("=="===e.op){if(eI(e.value))return{unaryFilter:{field:ri(e.field),op:"IS_NAN"}};if(eT(e.value))return{unaryFilter:{field:ri(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eI(e.value))return{unaryFilter:{field:ri(e.field),op:"IS_NOT_NAN"}};if(eT(e.value))return{unaryFilter:{field:ri(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(e.field),op:tZ[e.op],value:e.value}}}(t):t instanceof eM?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:t0[t.op],filters:r}}}(t):v()}(eM.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:ri(e.field),direction:tX[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=t2(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),i}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=t3(e,t.resumeToken);let n=t2(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(V.min())>0){r.readTime=t4(e,t.snapshotVersion.toTimestamp());let n=t2(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.Yo(t)}__(e){let t={};t.database=rt(this.serializer),t.removeTarget=e,this.Yo(t)}}class rY extends rH{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,t){return this.connection.bo("Write",e,t)}onMessage(e){var t,r;if(e.streamToken||v(),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||v(),t.map(e=>{let t;return(t=e.updateTime?t9(e.updateTime):t9(r)).isEqual(V.min())&&(t=t9(r)),new tv(t,e.transformResults||[])})):[]),i=t9(e.commitTime);return this.listener.l_(i,n)}return e.writeResults&&0!==e.writeResults.length&&v(),this.a_=!0,this.listener.h_()}P_(){let e={};e.database=rt(this.serializer),this.Yo(e)}c_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof tA)n={update:rn(e,t.key,t.value)};else if(t instanceof tR)n={delete:t6(e,t.key)};else if(t instanceof tN)n={update:rn(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tx))return v();n={verify:t6(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof tc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof td)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof tm)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof tp)return{fieldPath:t.field.canonicalString(),increment:r.Ee};throw v()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:t4(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:v()),n})(this.serializer,e))};this.Yo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rJ extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.I_=!1}T_(){if(this.I_)throw new _(E.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,t,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.fo(e,t,r,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(E.UNKNOWN,e.toString())})}So(e,t,r,n){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,t,r,i,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(E.UNKNOWN,e.toString())})}terminate(){this.I_=!0}}class rX{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){0===this.d_&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){"Online"===this.state?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,"Online"===e&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(p(t),this.R_=!1):g("OnlineStateTracker",t)}p_(){null!==this.A_&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rZ{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(e=>{r.enqueueAndForget(async()=>{r6(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.S_.add(4),await r1(e),e.v_.set("Unknown"),e.S_.delete(4),await r0(e)}(this))})}),this.v_=new rX(r,n)}}async function r0(e){if(r6(e))for(let t of e.b_)await t(!0)}async function r1(e){for(let t of e.b_)await t(!1)}function r2(e,t){e.w_.has(t.targetId)||(e.w_.set(t.targetId,t),r5(e)?r8(e):nf(e).Go()&&r3(e,t))}function r4(e,t){let r=nf(e);e.w_.delete(t),r.Go()&&r9(e,t),0===e.w_.size&&(r.Go()?r.Ho():r6(e)&&e.v_.set("Unknown"))}function r3(e,t){if(e.C_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(V.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}nf(e).o_(t)}function r9(e,t){e.C_.Le(t),nf(e).__(t)}function r8(e){e.C_=new tW({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.w_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),nf(e).start(),e.v_.V_()}function r5(e){return r6(e)&&!nf(e).Wo()&&e.w_.size>0}function r6(e){return 0===e.S_.size}async function r7(e){e.w_.forEach((t,r)=>{r3(e,t)})}async function ne(e,t){e.C_=void 0,r5(e)?(e.v_.g_(t),r8(e)):e.v_.set("Unknown")}async function nt(e,t,r){if(e.v_.set("Online"),t instanceof tj&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.w_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.w_.delete(n),e.C_.removeTarget(n))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await nr(e,r)}else if(t instanceof tQ?e.C_.Ge(t):t instanceof tG?e.C_.Xe(t):e.C_.He(t),!r.isEqual(V.min()))try{let t=await rx(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.C_._t(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.w_.get(n);i&&e.w_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.w_.get(t);if(!n)return;e.w_.set(t,n.withResumeToken(en.EMPTY_BYTE_STRING,n.snapshotVersion)),r9(e,t);let i=new ro(n.target,t,r,n.sequenceNumber);r3(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await nr(e,t)}}async function nr(e,t,r){if(!K(t))throw t;e.S_.add(1),await r1(e),e.v_.set("Offline"),r||(r=()=>rx(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await r(),e.S_.delete(1),await r0(e)})}function nn(e,t){return t().catch(r=>nr(e,r,t))}async function ni(e){let t=nm(e),r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;r6(e)&&e.y_.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.y_.length&&t.Ho();break}r=n.batchId,function(e,t){e.y_.push(t);let r=nm(e);r.Go()&&r.u_&&r.c_(t.mutations)}(e,n)}catch(t){await nr(e,t)}ns(e)&&na(e)}function ns(e){return r6(e)&&!nm(e).Wo()&&e.y_.length>0}function na(e){nm(e).start()}async function no(e){nm(e).P_()}async function nl(e){let t=nm(e);for(let r of e.y_)t.c_(r.mutations)}async function nu(e,t,r){let n=e.y_.shift(),i=tV.from(n,t,r);await nn(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ni(e)}async function nh(e,t){t&&nm(e).u_&&await async function(e,t){var r;if(function(e){switch(e){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}(r=t.code)&&r!==E.ABORTED){let r=e.y_.shift();nm(e).jo(),await nn(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await ni(e)}}(e,t),ns(e)&&na(e)}async function nc(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let r=r6(e);e.S_.add(3),await r1(e),r&&e.v_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.S_.delete(3),await r0(e)}async function nd(e,t){t?(e.S_.delete(2),await r0(e)):t||(e.S_.add(2),await r1(e),e.v_.set("Unknown"))}function nf(e){var t,r,n;return e.F_||(e.F_=(t=e.datastore,r=e.asyncQueue,n={uo:r7.bind(null,e),lo:ne.bind(null,e),s_:nt.bind(null,e)},t.T_(),new rW(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.b_.push(async t=>{t?(e.F_.jo(),r5(e)?r8(e):e.v_.set("Unknown")):(await e.F_.stop(),e.C_=void 0)})),e.F_}function nm(e){var t,r,n;return e.M_||(e.M_=(t=e.datastore,r=e.asyncQueue,n={uo:no.bind(null,e),lo:nh.bind(null,e),h_:nl.bind(null,e),l_:nu.bind(null,e)},t.T_(),new rY(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.b_.push(async t=>{t?(e.M_.jo(),await ni(e)):(await e.M_.stop(),e.y_.length>0&&(g("RemoteStore",`Stopping write stream with ${e.y_.length} pending writes`),e.y_=[]))})),e.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,a=new ng(e,t,s,n,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function np(e,t){if(p("AsyncQueue",`${t}: ${e}`),K(e))return new _(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(e,t)=>U.comparator(e.key,t.key),this.keyedMap=te(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new ny(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ny)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new ny;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.x_=new Y(U.comparator)}track(e){let t=e.doc.key,r=this.x_.get(t);r?0!==e.type&&3===r.type?this.x_=this.x_.insert(t,e):3===e.type&&1!==r.type?this.x_=this.x_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.x_=this.x_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.x_=this.x_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.x_=this.x_.remove(t):1===e.type&&2===r.type?this.x_=this.x_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.x_=this.x_.insert(t,{type:2,doc:e.doc}):v():this.x_=this.x_.insert(t,e)}O_(){let e=[];return this.x_.inorderTraversal((t,r)=>{e.push(r)}),e}}class nv{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new nv(e,t,ny.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e2(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.N_=void 0,this.listeners=[]}}class n_{constructor(){this.queries=new e5(e=>e4(e),e2),this.onlineState="Unknown",this.B_=new Set}}async function nT(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i||(n=!0,i=new nE),n)try{i.N_=await e.onListen(r)}catch(r){let e=np(r,`Initialization of query '${e3(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.listeners.push(t),t.L_(e.onlineState),i.N_&&t.k_(i.N_)&&nA(e)}async function nI(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),n=0===i.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function nC(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.k_(n)&&(r=!0);i.N_=n}}r&&nA(e)}function nS(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function nA(e){e.B_.forEach(e=>{e.next()})}class nN{constructor(e,t,r){this.query=e,this.q_=t,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new nv(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),t=!0):this.W_(e,this.onlineState)&&(this.G_(e),t=!0),this.K_=e,t}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let t=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),t=!0),t}W_(e,t){return!e.fromCache||(!this.options.z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}U_(e){if(e.docChanges.length>0)return!0;let t=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}G_(e){e=nv.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.key=e}}class nD{constructor(e){this.key=e}}class nk{constructor(e,t){this.query=e,this.ta=t,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=ts(),this.mutatedKeys=ts(),this.ia=e8(e),this.sa=new ny(this.ia)}get oa(){return this.ta}_a(e,t){let r=t?t.aa:new nw,n=t?t.sa:this.sa,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=e9(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.ua(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this.ia(h,o)>0||l&&0>this.ia(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{sa:s,aa:r,Hi:a,mutatedKeys:i}}ua(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;let i=e.aa.O_();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return r(e)-r(t)})(e.type,t.type)||this.ia(e.doc,t.doc)),this.ca(r);let s=t?this.la():[],a=0===this.ra.size&&this.current?1:0,o=a!==this.na;return(this.na=a,0!==i.length||o)?{snapshot:new nv(this.query,e.sa,n,i,e.mutatedKeys,0===a,o,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:s}:{ha:s}}L_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({sa:this.sa,aa:new nw,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(e=>this.ta=this.ta.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ta=this.ta.delete(e)),this.current=e.current)}la(){if(!this.current)return[];let e=this.ra;this.ra=ts(),this.sa.forEach(e=>{this.Pa(e.key)&&(this.ra=this.ra.add(e.key))});let t=[];return e.forEach(e=>{this.ra.has(e)||t.push(new nD(e))}),this.ra.forEach(r=>{e.has(r)||t.push(new nb(r))}),t}Ia(e){this.ta=e._s,this.ra=ts();let t=this._a(e.documents);return this.applyChanges(t,!0)}Ta(){return nv.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,0===this.na,this.hasCachedResults)}}class nR{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nx{constructor(e){this.key=e,this.Ea=!1}}class nL{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.da={},this.Aa=new e5(e=>e4(e),e2),this.Ra=new Map,this.Va=new Set,this.ma=new Y(U.comparator),this.fa=new Map,this.ga=new rv,this.pa={},this.ya=new Map,this.wa=rf.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return!0===this.Sa}}async function nV(e,t){var r,n;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=nO.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nJ.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nq.bind(null,e),e.da.s_=nC.bind(null,e.eventManager),e.da.Da=nS.bind(null,e.eventManager),e),o=a.Aa.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Ta();else{let e=await (r=a.localStore,n=e0(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.Qr.getTargetData(e,n).next(i=>i?(t=i,$.resolve(t)):r.Qr.allocateTargetId(e).next(i=>(t=new ro(n,i,"TargetPurposeListen",e.currentSequenceNumber),r.Qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=r.Zi.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.Zi=r.Zi.insert(e.targetId,e),r.Xi.set(n,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await nM(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&r2(a.remoteStore,e)}return s}async function nM(e,t,r,n,i){e.ba=(t,r,n)=>(async function(e,t,r,n){let i=t.view._a(r);i.Hi&&(i=await rV(e.localStore,t.query,!1).then(({documents:e})=>t.view._a(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return nj(e,t.targetId,a.ha),a.snapshot})(e,t,r,n);let s=await rV(e.localStore,t,!0),a=new nk(t,s._s),o=a._a(s.documents),l=tK.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);nj(e,r,u.ha);let h=new nR(t,r,a);return e.Aa.set(t,h),e.Ra.has(r)?e.Ra.get(r).push(t):e.Ra.set(r,[t]),u.snapshot}async function nF(e,t){let r=e.Aa.get(t),n=e.Ra.get(r.targetId);if(n.length>1)return e.Ra.set(r.targetId,n.filter(e=>!e2(e,t))),void e.Aa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await rL(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),r4(e.remoteStore,r.targetId),nQ(e,r.targetId)}).catch(B)):(nQ(e,r.targetId),await rL(e.localStore,r.targetId,!0))}async function nP(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=nz.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nB.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=L.now(),s=t.reduce((e,t)=>e.add(t.key),ts());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=e6,l=ts();return e.ts.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=th(n.transform,e||null);null!=i&&(null===r&&(r=eN.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new tN(e.key,t,function e(t){let r=[];return H(t.fields,(t,n)=>{let i=new O([t]);if(eC(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new et(r)}(t.value.mapValue),tE.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:tt(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.pa[i.currentUser.toKey()])||(e=new Y(R)),e=e.insert(n,r),i.pa[i.currentUser.toKey()]=e,await nW(i,s.changes),await ni(i.remoteStore)}catch(t){let e=np(t,"Failed to persist write");r.reject(e)}}async function nO(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.Zi;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.ts.newChangeBuffer({trackRemovals:!0});n=e.Zi;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;u.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(en.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),n=n.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Qr.updateTargetData(i,h))});let h=e6,c=ts();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,a=ts(),o=ts(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=e6;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(V.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):g("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{ss:t,os:o}})).next(e=>{h=e.ss,c=e.os})),!r.isEqual(V.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return $.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.Zi=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.fa.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||v(),t.addedDocuments.size>0?n.Ea=!0:t.modifiedDocuments.size>0?n.Ea||v():t.removedDocuments.size>0&&(n.Ea||v(),n.Ea=!1))}),await nW(e,r,t)}catch(e){await B(e)}}function nU(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.Aa.forEach((e,r)=>{let n=r.view.L_(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.listeners)e.L_(t)&&(r=!0)}),r&&nA(n),i.length&&e.da.s_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function nq(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.fa.get(t),i=n&&n.key;if(i){let r=new Y(U.comparator);r=r.insert(i,eb.newNoDocument(i,V.min()));let n=ts().add(i),s=new t$(V.min(),new Map,new Y(R),r,n);await nO(e,s),e.ma=e.ma.remove(i),e.fa.delete(t),nH(e)}else await rL(e.localStore,t,!1).then(()=>nQ(e,t,r)).catch(B)}async function nz(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.ts.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=$.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||v(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ts();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});nK(e,n,null),n$(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await nW(e,i)}catch(e){await B(e)}}async function nB(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||v(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});nK(e,t,r),n$(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await nW(e,i)}catch(e){await B(e)}}function n$(e,t){(e.ya.get(t)||[]).forEach(e=>{e.resolve()}),e.ya.delete(t)}function nK(e,t,r){let n=e.pa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.pa[e.currentUser.toKey()]=n}}function nQ(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Ra.get(t)))e.Aa.delete(n),r&&e.da.Da(n,r);e.Ra.delete(t),e.isPrimaryClient&&e.ga.Vr(t).forEach(t=>{e.ga.containsKey(t)||nG(e,t)})}function nG(e,t){e.Va.delete(t.path.canonicalString());let r=e.ma.get(t);null!==r&&(r4(e.remoteStore,r),e.ma=e.ma.remove(t),e.fa.delete(r),nH(e))}function nj(e,t,r){for(let n of r)n instanceof nb?(e.ga.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.ma.get(r)||e.Va.has(n)||(g("SyncEngine","New document in limbo: "+r),e.Va.add(n),nH(e))}(e,n)):n instanceof nD?(g("SyncEngine","Document no longer in limbo: "+n.key),e.ga.removeReference(n.key,t),e.ga.containsKey(n.key)||nG(e,n.key)):v()}function nH(e){for(;e.Va.size>0&&e.ma.size<e.maxConcurrentLimboResolutions;){var t;let r=e.Va.values().next().value;e.Va.delete(r);let n=new U(F.fromString(r)),i=e.wa.next();e.fa.set(i,new nx(n)),e.ma=e.ma.insert(n,i),r2(e.remoteStore,new ro(e0((t=n.path,new eJ(t))),i,"TargetPurposeLimboResolution",Q.ae))}}async function nW(e,t,r){let n=[],i=[],s=[];e.Aa.isEmpty()||(e.Aa.forEach((a,o)=>{s.push(e.ba(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=rb.Ki(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.da.s_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>$.forEach(t,t=>$.forEach(t.qi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>$.forEach(t.Qi,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!K(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.Zi.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.Zi=e.Zi.insert(t,i)}}}(e.localStore,i))}async function nY(e,t){if(!e.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let r=await rR(e.localStore,t);e.currentUser=t,e.ya.forEach(e=>{e.forEach(e=>{e.reject(new _(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.ya.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await nW(e,r.rs)}}function nJ(e,t){let r=e.fa.get(t);if(r&&r.Ea)return ts().add(r.key);{let r=ts(),n=e.Ra.get(t);if(!n)return r;for(let t of n){let n=e.Aa.get(t);r=r.unionWith(n.view.oa)}return r}}class nX{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rG(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,r,n,i;return t=this.persistence,r=new rD,n=e.initialUser,i=this.serializer,new rk(t,r,n,i)}createPersistence(e){return new rS(rN.Hr,this.serializer)}createSharedClientState(e){return new rF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nZ{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nU(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nY.bind(null,this.syncEngine),await nd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new n_}createDatastore(e){var t,r,n;let i=rG(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new rK(t));return r=e.authCredentials,n=e.appCheckCredentials,new rJ(r,n,s,i)}createRemoteStore(e){var t,r,n,i;return t=this.localStore,r=this.datastore,n=e.asyncQueue,i=rO.v()?new rO:new rP,new rZ(t,r,n,e=>nU(this.syncEngine,e,0),i)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new nL(e,t,r,n,i,s);return a&&(o.Sa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.S_.add(5),await r1(e),e.D_.shutdown(),e.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=k.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=np(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function n2(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await rR(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function n4(e,t){e.asyncQueue.verifyOperationInProgress();let r=await n3(e);g("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>nc(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>nc(t.remoteStore,r)),e._onlineComponents=t}async function n3(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await n2(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;y("Error using user provided cache. Falling back to memory cache: "+t),await n2(e,new nX)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await n2(e,new nX)}return e._offlineComponents}async function n9(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await n4(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await n4(e,new nZ))),e._onlineComponents}async function n8(e){let t=await n9(e),r=t.eventManager;return r.onListen=nV.bind(null,t.syncEngine),r.onUnlisten=nF.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n5(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n6=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n7(e,t,r){if(!r)throw new _(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ie(e){if(!U.isDocumentKey(e))throw new _(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function it(e){if(U.isDocumentKey(e))throw new _(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ir(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":v()}function ii(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=ir(e);throw new _(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new _(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new _(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new _(E.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=n5(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new _(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new _(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new _(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ia{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new is({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new _(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new is(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"firstParty":return new N(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new _(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=n6.get(e);t&&(g("ComponentProvider","Removing Datastore"),n6.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new io(this.firestore,e,this._query)}}class il{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new iu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new il(this.firestore,e,this._key)}}class iu extends io{constructor(e,t,r){super(e,t,new eJ(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new il(this.firestore,null,new U(e))}withConverter(e){return new iu(this.firestore,e,this._path)}}function ih(e,t,...r){if(e=(0,l.m9)(e),n7("collection","path",t),e instanceof ia){let n=F.fromString(t,...r);return it(n),new iu(e,null,n)}{if(!(e instanceof il||e instanceof iu))throw new _(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(F.fromString(t,...r));return it(n),new iu(e.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new rj(this,"async_queue_retry"),this.tu=()=>{let e=rQ();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Uo.Lo()};let e=rQ();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;let t=rQ();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});let t=new T;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(0!==this.ja.length){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!K(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){let t=this.za.then(()=>(this.Za=!0,e().catch(e=>{let t;this.Ya=e,this.Za=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw p("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Za=!1,e))));return this.za=t,t}enqueueAfterDelay(e,t,r){this.nu(),this.eu.indexOf(e)>-1&&(t=0);let n=ng.createAndSchedule(this,e,t,r,e=>this.su(e));return this.Ja.push(n),n}nu(){this.Ya&&v()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(let t of this.Ja)if(t.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{for(let t of(this.Ja.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Ja))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){let t=this.Ja.indexOf(e);this.Ja.splice(t,1)}}class id extends ia{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new ic,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ip(this),this._firestoreClient.terminate()}}function im(e,t,r){r||(r="(default)");let n=(0,s.qX)(e,"firestore");if(n.isInitialized(r)){let e=n.getImmediate({identifier:r}),i=n.getOptions(r);if((0,l.vZ)(i,t))return e;throw new _(E.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new _(E.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new _(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:r})}function ig(e){return e._firestoreClient||ip(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ip(e){var t,r,n,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new ec(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,n5(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new n1(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(r=o.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this._byteString=e}static fromBase64String(e){try{return new iy(en.fromBase64String(e))}catch(e){throw new _(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new iy(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new _(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new O(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_=/^__.*__$/;class iT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new tN(e,this.data,this.fieldMask,t,this.fieldTransforms):new tA(e,this.data,t,this.fieldTransforms)}}function iI(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class iC{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new iC(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.hu({path:r,Iu:!1});return n.Tu(e),n}Eu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.hu({path:r,Iu:!1});return n.cu(),n}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return ik(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(0===e.length)throw this.Au("Document fields must not be empty");if(iI(this.lu)&&i_.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class iS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||rG(e)}mu(e,t,r,n=!1){return new iC({lu:e,methodName:t,Vu:r,path:O.emptyPath(),Iu:!1,Ru:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iA(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof L||e instanceof iE||e instanceof iy||e instanceof il||e instanceof iv)}function iN(e,t,r){if(!iA(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=ir(r);throw"an object"===n?t.Au(e+" a custom object"):t.Au(e+" "+n)}}let ib=RegExp("[~\\*/\\[\\]]");function iD(e,t,r){if(t.search(ib)>=0)throw ik(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new iw(...t.split("."))._internalPath}catch(n){throw ik(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function ik(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new _(E.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new il(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new ix(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(iL("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ix extends iR{data(){return super.data()}}function iL(e,t){return"string"==typeof t?iD(e,t):t instanceof iw?t._internalPath:t._delegate._internalPath}class iV{convertValue(e,t="none"){switch(em(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ea(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return H(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new iE(ea(e.latitude),ea(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=eu(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eh(e));default:return null}}convertTimestamp(e){let t=es(e);return new L(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=F.fromString(e);ra(r)||v();let n=new ed(r.get(1),r.get(3)),i=new U(r.popFirst(5));return n.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iF extends iR{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new iP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(iL("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class iP extends iF{data(e={}){return super.data(e)}}class iO{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new iM(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new iP(this._firestore,this._userDataWriter,r.key,r,new iM(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new iP(e._firestore,e._userDataWriter,r.doc.key,r.doc,new iM(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new iP(e._firestore,e._userDataWriter,t.doc.key,t.doc,new iM(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class iU extends iV{constructor(e){super(),this.firestore=e}convertBytes(e){return new iy(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new il(this.firestore,null,t)}}function iq(e){e=ii(e,io);let t=ii(e.firestore,id),r=ig(t),n=new iU(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new _(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new n0({next:r=>{t.enqueueAndForget(()=>nI(e,a)),r.fromCache&&"server"===n.source?i.reject(new _(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new nN(r,s,{includeMetadataChanges:!0,z_:!0});return nT(e,a)})(await n8(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new iO(t,n,e,r)))}function iz(e,t){var r,n,i;let s=ii(e.firestore,id),a=function(e,t,...r){if(e=(0,l.m9)(e),1==arguments.length&&(t=k.V()),n7("doc","path",t),e instanceof ia){let n=F.fromString(t,...r);return ie(n),new il(e,null,new U(n))}{if(!(e instanceof il||e instanceof iu))throw new _(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(F.fromString(t,...r));return ie(n),new il(e.firestore,e instanceof iu?e.converter:null,new U(n))}}(e),o=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return(i=[(function(e,t,r,n,i,s={}){let a,o;let u=e.mu(s.merge||s.mergeFields?2:0,t,r,i);iN("Data must be an object, but it was:",u,n);let h=function e(t,r){let n={};return W(t)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):H(t,(t,i)=>{let s=function t(r,n){if(iA(r=(0,l.m9)(r)))return iN("Unsupported field value:",n,r),e(r,n);if(r instanceof iv)return function(e,t){if(!iI(t.lu))throw t.Au(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Au(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(r,n),null;if(void 0===r&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),r instanceof Array){if(n.settings.Iu&&4!==n.lu)throw n.Au("Nested arrays are not supported");return function(e,r){let n=[],i=0;for(let s of e){let e=t(s,r.du(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(r,n)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!G(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tl(n):to(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=L.fromDate(e);return{timestampValue:t4(t.serializer,r)}}if(e instanceof L){let r=new L(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:t4(t.serializer,r)}}if(e instanceof iE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof iy)return{bytesValue:t3(t.serializer,e._byteString)};if(e instanceof il){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Au(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:t8(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Au(`Unsupported field value: ${ir(e)}`)}(r,n)}(i,r.Pu(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}(n,u);if(s.merge)a=new et(u.fieldMask),o=u.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=function(e,t,r){if((t=(0,l.m9)(t))instanceof iw)return t._internalPath;if("string"==typeof t)return iD(e,t);throw ik("Field path arguments must be of type string or ",e,!1,void 0,r)}(t,n,r);if(!u.contains(i))throw new _(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}a=new et(e),o=u.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=u.fieldTransforms;return new iT(new eN(h),a,o)})(function(e){let t=e._freezeSettings(),r=rG(e._databaseId);return new iS(e._databaseId,!!t.ignoreUndefinedProperties,r)}(e.firestore),"addDoc",a._key,o,null!==e.converter,{}).toMutation(a._key,tE.exists(!1))],function(e,t){let r=new T;return e.asyncQueue.enqueueAndForget(async()=>nP(await n9(e).then(e=>e.syncEngine),t,r)),r.promise}(ig(s),i)).then(()=>a)}!function(e,t=!0){d=s.Jn,(0,s.Xd)(new a.wA("firestore",(e,{instanceIdentifier:r,options:n})=>{let i=e.getProvider("app").getImmediate(),s=new id(new S(e.getProvider("auth-internal")),new D(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new _(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ed(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(h,"4.1.2",void 0),(0,s.KN)(h,"4.1.2","esm2017")}()}}]);