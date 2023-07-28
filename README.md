# Val Town Zod Client

This package is automatically generated from Val Town [OpenApi Spec](https://www.val.town/docs/openapi.yaml) using [openapi-zod-client](https://github.com/astahmer/openapi-zod-client/).

## Usage

```ts
const vt = require("valtown-zod-client");

const apiClient = vt.createApiClient("https://api.val.town");
const params = {
  params: { username: "nbbaier", val_name: "hello" },
};

apiClient.getV1aliasUsernameVal_name(params).then(console.log);
```
