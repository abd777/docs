---
sidebar_position: 3
title: Typegen
---

# Typegen package

:::tip

It's recommended to use [`openapicmd typegen`](/docs/openapicmd/typegen/) to generate types instead of directly installing the typegen package. 

:::

`openapi-client-axios-typegen` is a command line tool to generate easy to use Typescript types from
OpenAPI files.

![TypeScript IntelliSense](/img/intellisense.gif)

## Usage

```
npm install -g openapi-client-axios-typegen
```

or with npx:

```
npx openapi-client-axios-typegen
```

```
Usage: typegen [file]

Options:
      --help                    Show help                              [boolean]
      --version                 Show version number                    [boolean]
  -t, --transformOperationName                                          [string]

Examples:
  typegen ./openapi.yml > openapi.d.ts
  typegen https://openapistack.co/petstore.openapi.json > openapi.d.ts
```

`typegen` supports both local and remote files:

```
typegen ./openapi.yaml > openapi.d.ts # local file
typegen https://petstore3.swagger.io/api/v3/openapi.json > openapi.d.ts # remote url
```

## Typesafe Clients

The output of `typegen` exports a type called `Client`, which can be directly used with clients created with `OpenAPIClientAxios`.

Both the `api.getClient()` and `api.init()` methods support passing in a Client type.

```typescript
import { Client as PetStoreClient } from "./openapi.d.ts";

const client = await api.init<PetStoreClient>();
const client = await api.getClient<PetStoreClient>();
```

## Importing Schemas

You can import schemas and response/request models defined in your openapi definition as Typescript types:

```ts
import { Components, Paths } from "./openapi.d.ts";

export type Pet = Components.Schemas.Pet;
export type User = Components.Schemas.User;

export type AddPetRequest = Paths.AddPet.RequestBody;
export type AddPetResponse = Paths.AddPet.Responses.$200;
```

## Advanced: `--transformOperationName`

You can provide a predicate function to typegen to transform operation names in the output type file.

The function needs to be exported from a module:

```ts
// operation-transform.ts
export const prefix = (operationId: string) => ["$", operationId].join("");
```

Example usage:

```
typegen ./openapi.yaml --transformOperationName operation-transform.prefix > openapi.d.ts
```
