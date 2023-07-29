import * as yaml from "yaml";
import * as fs from "fs";

const resp = await fetch("https://www.val.town/docs/openapi.yaml");
const res = await resp.text();
const spec = yaml.parse(res);

const types = `declare const openapi: ${JSON.stringify(
  spec,
  null,
  2
)}; export default openapi;`.trim();

fs.writeFileSync("./index.d.ts", types);
