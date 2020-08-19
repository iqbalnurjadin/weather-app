import { parse } from "https://deno.land/std@0.61.0/flags/mod.ts";

const args = parse(Deno.args);
if (args.city == undefined) {
    console.error("No city supplied");
    Deno.exit();
}

console.log(args);
