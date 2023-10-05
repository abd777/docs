"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[8594],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=s,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:s,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(7462),s=(t(7294),t(4137));const a={title:"Building APIs",sidebar_position:2},i=void 0,p={unversionedId:"examples/building-apis",id:"examples/building-apis",title:"Building APIs",description:"In this example, we will design and build a simple REST API using express and openapi-backend.",source:"@site/docs/examples/building-apis.md",sourceDirName:"examples",slug:"/examples/building-apis",permalink:"/docs/examples/building-apis",draft:!1,editUrl:"https://github.com/anttiviljami/openapi-stack/edit/main/docs/examples/building-apis.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Building APIs",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Calling APIs",permalink:"/docs/examples/calling-apis"},next:{title:"Quick Start: Backend",permalink:"/docs/openapi-backend/intro"}},o={},l=[{value:"Full Example",id:"full-example",level:2}],c={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this example, we will design and build a simple REST API using express and openapi-backend."),(0,s.kt)("p",null,"Let's start by setting up a basic express server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import express from 'express';\n\nconst app = express();\n\n// use the json middleware\napp.use(express.json());\n\n// start server\napp.listen(9000, () => console.info('api listening at http://localhost:9000'));\n")),(0,s.kt)("p",null,"We can then import ",(0,s.kt)("inlineCode",{parentName:"p"},"openapi-backend")," and initialize it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { OpenAPIBackend } from 'openapi-backend';\n\nconst api = new OpenAPIBackend({\n  definition: './openapi.yml',\n});\n\napi.init();\n")),(0,s.kt)("p",null,"We are loading our API definition from ",(0,s.kt)("inlineCode",{parentName:"p"},"openapi.yml"),", so let's write a simple API design with a ",(0,s.kt)("inlineCode",{parentName:"p"},"getPets")," operation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'openapi: 3.0.2\ninfo:\n  title: "Pet API"\n  version: 1.0.0\npaths:\n  "/pets":\n    get:\n      operationId: getPets\n      responses:\n        "200":\n          description: list of pets\n          content:\n            application/json:\n              schema:\n                type: array\n                items:\n                  $ref: "#/components/schemas/Pet"\ncomponents:\n  schemas:\n    Pet:\n      type: object\n      properties:\n        id:\n          type: string\n        type:\n          type: string\n          enum: ["cat", "dog"]\n        name:\n          type: string\n      required:\n        - id\n        - type\n')),(0,s.kt)("p",null,"Let's then implement ",(0,s.kt)("inlineCode",{parentName:"p"},"getPets")," and some default handlers in our code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"api.register('getPets', async (c, req: Express.Request, res: Express.Response) =>\n  res.status(200).json([{ id: '1', type: 'cat', name: 'Garfield' }])\n)\napi.register('validationFail', (c, req: Express.Request, res: Express.Response) =>\n  res.status(400).json({ err: c.validation.errors }),\n)\napi.register('notFound', (c, req: Express.Request, res: Express.Response) =>\n  res.status(404).json({ err: 'not found' }),\n)\n")),(0,s.kt)("p",null,"Finally we can use openapi-backend as an express middleware to route, validate and handle API requests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"app.use((req, res) => api.handleRequest(req, req, res));\n")),(0,s.kt)("h2",{id:"full-example"},"Full Example"),(0,s.kt)("p",null,"Putting everything together, here is our full code example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// server.ts\nimport { OpenAPIBackend, Request } from 'openapi-backend';\nimport express from 'express';\n\nconst api = new OpenAPIBackend({\n  definition: './openapi.yml',\n});\n\napi.init();\n\napi.register('getPets', async (c, req: express.Request, res: express.Response) =>\n  res.status(200).json([{ id: '1', type: 'cat', name: 'Garfield' }])\n)\napi.register('validationFail', (c, req: express.Request, res: express.Response) =>\n  res.status(400).json({ err: c.validation.errors }),\n)\napi.register('notFound', (c, req: express.Request, res: express.Response) =>\n  res.status(404).json({ err: 'not found' }),\n)\n\nconst app = express();\n\napp.use(express.json());\napp.use((req, res) => api.handleRequest(req as Request, req, res));\n\napp.listen(9000, () => console.info('api listening at http://localhost:9000'));\n")))}d.isMDXComponent=!0}}]);