---
title: "Quick Start: Client"
hide_title: true
sidebar_position: 1
---

<div align="center">
<img alt="openapi-client-axios logo" src="/img/openapi-stack-logo.png" className="max-w-[150px]" />
<h1 className="mb-6">
  openapi-client-axios
  <a href="https://github.com/openapistack/openapi-client-axios" target="_blank"><img className="w-[1em] ml-2 relative top-1" src="https://img.icons8.com/material-sharp/96/000000/github.png" alt="GitHub" /></a>
</h1>

[![CI](https://github.com/openapistack/openapi-client-axios/workflows/CI/badge.svg)](https://github.com/openapistack/openapi-client-axios/actions?query=workflow%3ACI)
[![npm version](https://img.shields.io/npm/v/openapi-client-axios.svg)](https://www.npmjs.com/package/openapi-client-axios)
[![npm downloads](https://img.shields.io/npm/dw/openapi-client-axios)](https://www.npmjs.com/package/openapi-client-axios)
[![GitHub stars](https://img.shields.io/github/stars/openapistack/openapi-client-axios)](https://github.com/openapistack/openapi-client-axios)
[![bundle size](https://img.shields.io/bundlephobia/minzip/openapi-client-axios?label=gzip%20bundle)](https://bundlephobia.com/package/openapi-client-axios)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/openapistack/openapi-client-axios/blob/master/LICENSE)
[![Buy me a coffee](https://img.shields.io/badge/donate-buy%20me%20a%20coffee-orange)](https://buymeacoff.ee/anttiviljami)

<p>JavaScript client library for consuming OpenAPI-enabled APIs with <a href="https://github.com/axios/axios" target="_blank">axios</a>. Types included.</p>
</div>

## Features

- [x] Create API clients from [OpenAPI v3 definitions](https://github.com/OAI/OpenAPI-Specification)
- [x] Client is configured in runtime. **No generated code!**
- [x] Generate TypeScript definitions (.d.ts) for your APIs with full IntelliSense support
- [x] Easy to use API to call API operations using JavaScript methods
  - `client.getPet(1)`
  - `client.searchPets()`
  - `client.searchPets({ ids: [1, 2, 3] })`
  - `client.updatePet(1, payload)`
- [x] Built on top of the robust [axios](https://github.com/axios/axios) JavaScript library
- [x] Isomorphic, works both in browser and Node.js

## Quick Start

```
npm install --save axios openapi-client-axios
```

```
yarn add axios openapi-client-axios
```

With promises / CommonJS syntax:

```javascript
const OpenAPIClientAxios = require("openapi-client-axios").default;

const api = new OpenAPIClientAxios({
  definition: "https://example.com/api/openapi.json",
});
api
  .init()
  .then((client) => client.getPetById(1))
  .then((res) => console.log("Here is pet id:1 from the api", res.data));
```

With async-await / ES6 syntax:

```javascript
import OpenAPIClientAxios from "openapi-client-axios";

const api = new OpenAPIClientAxios({
  definition: "https://example.com/api/openapi.json",
});
api.init();

async function createPet() {
  const client = await api.getClient();
  const res = await client.createPet(null, { name: "Garfield" });
  console.log("Pet created", res.data);
}
```

## Typesafe Clients

![TypeScript IntelliSense](/img/intellisense.gif)

`openapi-client-axios` comes with a tool called `typegen` to generate typescript type files (.d.ts) for
OpenAPIClient instances using an OpenAPI definition file.

```
npx openapicmd typegen ./openapi.yaml > src/types/openapi.d.ts
```

The output file exports a type called `Client`, which can directly be used with instances created with `OpenAPIClientAxios`.

```typescript
import type { Client as PetStoreClient } from "./openapi.d.ts";

const client = await api.getClient<PetStoreClient>();
```
