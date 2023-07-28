import * as yaml from "https://deno.land/std@0.196.0/yaml/mod.ts";

const resp = await fetch("https://www.val.town/docs/openapi.yaml");
const res = await resp.text();
const spec = yaml.parse(res);

const module = `export default ${JSON.stringify(
  spec,
  null,
  2
)} as const`.trim();

await Deno.writeTextFile("./mod.ts", module);
