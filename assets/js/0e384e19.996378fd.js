"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[9671],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=a(7462),i=(a(7294),a(4137));const r={title:"Overview",hide_title:!0,sidebar_position:0},o=void 0,p={unversionedId:"intro",id:"intro",title:"Overview",description:"openapi-stack",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/openapistack/docs/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"API First",permalink:"/docs/api-first"}},s={},l=[{value:"Backend",id:"backend",level:2},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:2},{value:"Features",id:"features",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"text-center mt-4 mb-8"},(0,i.kt)("img",{alt:"openapicmd logo",src:"/img/openapi-stack-logo.png",className:"max-w-[150px] mb-4"}),(0,i.kt)("h1",null,"openapi-stack",(0,i.kt)("a",{href:"https://github.com/openapistack/docs",target:"_blank"},(0,i.kt)("img",{className:"w-[1em] ml-2 relative top-1",src:"https://img.icons8.com/material-sharp/96/000000/github.png",alt:"GitHub"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openapistack/docs/blob/master/LICENSE"},(0,i.kt)("img",{parentName:"a",src:"http://img.shields.io/:license-mit-blue.svg",alt:"License"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapi-backend"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dw/openapi-backend?label=backend",alt:"npm downloads"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapi-backend"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dw/openapi-client-axios?label=client",alt:"npm downloads"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openapistack/docs"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/openapistack/docs?label=github%20stars",alt:"GitHub stars"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"openapi-stack")," is a collection of open source libraries and tools for full stack software development using ",(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI specification"),"."),(0,i.kt)("p",null,"The goal is to unlock great developer experience and full stack type safety for software teams using REST; inspired by tools like ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," and ",(0,i.kt)("a",{parentName:"p",href:"https://trpc.io"},"tRPC"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"How does openapi-stack compare to ",(0,i.kt)("i",null,"GraphQL"),"?")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},(0,i.kt)("em",{parentName:"a"},"GraphQL"))," is a query language for APIs developed by Facebook. It gives API clients full control over the data they query, making it extremely flexible and efficient for client-centric use cases."),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI specification"),", GraphQL APIs define a strongly typed schema for the data and mutations they support which makes them discoverable and intuitive to develop against."),(0,i.kt)("p",null,"OpenAPI stack achieves the same type safety and great developer experience by using the OpenAPI specification as a single source of truth for the API contract, used to generate types for both client and server side and utilising it for routing and validation during runtime."),(0,i.kt)("p",null,"Both GraphQL and openapi-stack encourage an ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-first/"},"API First")," approach where the API contract is treated as a first class citizen in software design instead of treating it as merely documentation."),(0,i.kt)("p",null,"While REST APIs don't generally provide the same level of control to clients as GraphQL, many times this could be seen as a benefit especially in scenarios where strict control over data access and operations is crucial."),(0,i.kt)("p",null,"Many organizations choose REST over GraphQL due to more established conventions, simplicity, and the ability to leverage standard HTTP features directly. Widespread knowledge around REST contribute to its choice among organizations looking for a tried-and-tested approach to building APIs.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"How does openapi-stack compare to ",(0,i.kt)("i",null,"tRPC"),"?")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://trpc.io/"},"tRPC")," is a ",(0,i.kt)("em",{parentName:"p"},"Remote Procedure Call")," (RPC) library for Typescript to build and consume typesafe APIs."),(0,i.kt)("p",null,"Designed for full-stack Typescript applications, tRPC allows direct sharing of types between both the client and server, without relying on code generation."),(0,i.kt)("p",null,"Unlike GraphQL and REST, tRPC doesn't expose a standard machine-readable API schema to be consumed by clients, instead taking a more straightforward approach of exposing endpoints or ",(0,i.kt)("em",{parentName:"p"},"procedures"),", essentially ",(0,i.kt)("a",{parentName:"p",href:"https://trpc.io/docs/concepts#its-just-functions"},(0,i.kt)("em",{parentName:"a"},'"just functions"'))," invoked by the client to the server."),(0,i.kt)("p",null,"OpenAPI stack achieves type safety using a similar workflow to tRPC's procedures with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#operation-object"},(0,i.kt)("em",{parentName:"a"},"OpenAPI operations")),", also avoiding code generation by only generating types from OpenAPI spec and using the machine readable contract in the runtime for routing and validation."),(0,i.kt)("p",null,"While the lightweight tRPC approach is optimal for teams just looking to build full stack applications, teams looking to build robust APIs are better served by the API design first approach of openapi-stack or GraphQL.")),(0,i.kt)("h2",{id:"backend"},"Backend"),(0,i.kt)("p",null,"Build, Validate, Route, Authenticate, and Mock your backend using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openapistack/openapi-backend"},"openapi-backend")," library."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/openapi-backend/intro"},"Quickstart")," - ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapi-backend"},"NPM")),(0,i.kt)("h2",{id:"client"},"Client"),(0,i.kt)("p",null,"Easily consume your API using the typesafe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openapistack/openapi-client-axios"},"openapi-client-axios")," library."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/openapi-client-axios/intro"},"Quickstart")," - ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapi-client-axios"},"NPM")),(0,i.kt)("h2",{id:"cli"},"CLI"),(0,i.kt)("p",null,"Generate types, design and test your API using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openapistack/openapicmd"},"openapicmd")," command line tool."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/openapicmd/intro"},"Quickstart")," - ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapicmd"},"NPM")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\ud83d\ude80 Battle-tested in production. High test coverage."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\ud83e\udd1d Built with TypeScript, types included with full autocomplete support"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\ud83e\udd43 Framework agnostic \u2013 works with your stack"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\ud83c\udfce Lightweight - small frontend bundle + optimized for serverless cold starts"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\ud83e\uddd9\u200d\u2642\ufe0f No code generation \u2013 we only generate types"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u2764\ufe0f OpenAPI 3.x support"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\ud83d\udc40 ",(0,i.kt)("a",{parentName:"li",href:"/docs/openapi-backend/examples"},"Samples")," included")))}m.isMDXComponent=!0}}]);