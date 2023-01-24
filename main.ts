/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

const decoder = new TextDecoder("utf-8");
const pico = Deno.readFileSync("./pico/pico.min.css");

await start(manifest, {
  plugins: [
    {
      name: "globalCss",
      render(_ctx) {
        _ctx.render();
        return {
          styles: [{ cssText: decoder.decode(pico), id: "_global" }],
        };
      },
    },
  ],
});
