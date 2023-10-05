"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[4375],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=c(t),y=r,m=l["".concat(i,".").concat(y)]||l[y]||u[y]||p;return t?a.createElement(m,s(s({ref:n},d),{},{components:t})):a.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,s=new Array(p);s[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[l]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<p;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},9702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(4137));const p={sidebar_position:9},s="Typescript",o={unversionedId:"openapi-backend/typescript",id:"openapi-backend/typescript",title:"Typescript",description:"OpenAPI Backend is entirely built with typescript and supports using types in operation handlers.",source:"@site/docs/openapi-backend/typescript.md",sourceDirName:"openapi-backend",slug:"/openapi-backend/typescript",permalink:"/docs/openapi-backend/typescript",draft:!1,editUrl:"https://github.com/anttiviljami/openapi-stack/edit/main/docs/openapi-backend/typescript.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Auth with Security Handlers",permalink:"/docs/openapi-backend/security-handlers"},next:{title:"Reference",permalink:"/docs/openapi-backend/api"}},i={},c=[{value:"Using types in operation handlers",id:"using-types-in-operation-handlers",level:2},{value:"Generic Types",id:"generic-types",level:2}],d={toc:c},l="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(l,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"OpenAPI Backend is entirely built with typescript and supports using types in operation handlers."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/openapi-client-axios/typegen/"},"typegen CLI")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"openapi-client-axios")," is designed to also be used to generate types to for use on the backend side."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can set up a script in package.json to easily update types when the openapi spec is changed."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "openapi": "npx openapi-client-axios-typegen typegen ./openapi.yaml > src/types/openapi.d.ts"\n  }\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"openapi-client-axios-typegen")," supports both local and remote files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx openapi-client-axios-typegen ./openapi.yaml > src/types/openapi.d.ts # local file\nnpx openapi-client-axios-typegen https://petstore3.swagger.io/api/v3/openapi.json > src/types/openapi.d.ts # remote url\n")),(0,r.kt)("h2",{id:"using-types-in-operation-handlers"},"Using types in operation handlers"),(0,r.kt)("p",null,"You can import schemas and response/request models defined in your openapi definition as Typescript types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// types.ts\nimport { Components } from "./openapi.d.ts";\n\nexport type Pet = Components.Schemas.Pet;\nexport type User = Components.Schemas.User;\n\nexport type UpdatePetParams = Paths.AddPet.PathParameters;\nexport type UpdatePetRequest = Paths.AddPet.RequestBody;\nexport type UpdatePetResponse = Paths.AddPet.Responses.$200;\n')),(0,r.kt)("p",null,"These types can then be used part of your controllers and logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import type { Context } from "openapi-backend";\nimport type { Request, Response } from "express";\nimport type {\n  UpdatePetParams,\n  UpdatePetRequest,\n  UpdatePetResponse,\n} from "./types";\n\nasync function updatePetHandler(\n  c: Context<UpdatePetRequest, UpdatePetParams>,\n  _req: Request,\n  res: Response\n) {\n  const { petId } = c.request.params;\n  const requestBody = c.request.requestBody;\n\n  const updatedPet = await db.updatePet(petId, requestBody);\n\n  const response: UpdatePetResponse = {\n    ...updatedPet,\n  };\n\n  return res.status(200).json(response);\n}\n\napi.register("updatePet", updatePetHandler);\n')),(0,r.kt)("h2",{id:"generic-types"},"Generic Types"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," types from openapi-backend are generic and can be passed types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Passed context built for request. Passed as first argument for all handlers.\n */\nexport interface Context<\n  RequestBody = any,\n  Params = UnknownParams,\n  Query = UnknownParams,\n  Headers = UnknownParams,\n  Cookies = UnknownParams\n> {\n  api: OpenAPIBackend;\n  request: ParsedRequest<RequestBody, Params, Query, Headers, Cookies>;\n  operation: Operation;\n  validation: ValidationResult;\n  security: SecurityHandlerResults;\n  response: any;\n}\n\n/**\n * A handler for an operation with request Context and passed arguments from handleRequest\n */\nexport type Handler<\n  RequestBody = any,\n  Params = UnknownParams,\n  Query = UnknownParams,\n  Headers = UnknownParams,\n  Cookies = UnknownParams\n> = (\n  context: Context<RequestBody, Params, Query, Headers, Cookies>,\n  ...args: any[]\n) => any | Promise<any>;\n")))}u.isMDXComponent=!0}}]);