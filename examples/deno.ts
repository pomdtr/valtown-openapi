import { createClient, type NormalizeOAS } from "npm:fets";
import type openapi from "npm:valtown-openapi@0.1.0";

const valtownToken = Deno.env.get("VALTOWN_TOKEN");

const client = createClient<NormalizeOAS<typeof openapi>>({
  endpoint: "https://api.val.town",
});

const resp = await client["/v1/alias/{username}"].get({
  headers: {
    Authorization: `Bearer ${valtownToken}`,
  },
  params: {
    username: "pomdtr",
  },
});

if (resp.status !== 200) {
  console.error(resp);
  Deno.exit(1);
}

console.log(await resp.json());
