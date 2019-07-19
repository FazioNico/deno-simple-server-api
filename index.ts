// import deps
import { serve } from 'https://deno.land/std/http/server.ts';
import { router } from './router.ts';

// create basic server
const s = serve("0.0.0.0:8000");
// create async function to run server with router
async function main() {
  for await (const req of s) {
    router(req);
  }
}
// run main() function
main();

