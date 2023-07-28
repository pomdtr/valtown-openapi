# Val Town Zod Client

This package is automatically generated from Val Town [OpenApi Spec](https://www.val.town/docs/openapi.yaml) using [openapi-zod-client](https://github.com/astahmer/openapi-zod-client/).

## Usage

```ts
import { createApiClient } from "valtown-zod-client";

const apiClient = createApiClient("https://api.val.town");
const params = {
  params: { username: "nbbaier", val_name: "hello" },
};
const user = await apiClient.getValname(params);
console.log(user);
```
