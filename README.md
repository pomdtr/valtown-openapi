# Val Town OpenApi

This package contains the openapi specs for the Val Town Api.

## Usage

This package is supposed to be used in conjunction with a [feTS client](https://the-guild.dev/openapi/fets/client/quick-start).

```ts
import { createClient, type NormalizeOAS } from "fets";
import type openapi from "valtown-openapi";

const client = createClient<NormalizeOAS<typeof openapi>>({});

const pomdtr = await client["/v1/alias/{username}"].get({
  params: {
    username: "pomdtr",
  },
});

const pets = await response.json();
console.log(pomdtr);
```
