// import deps module with url
import { serve, ServerRequest } from 'https://deno.land/std/http/server.ts';
// import router file
import { router } from './router.ts';

// create async function to run server with router
const main = async ({host, port}: {host: string, port: string}) => {
  // create basic server
  const s = serve(`${host}:${port}`);
  for await (const req of s) {
    await router((req as ServerRequest)).catch(err => {
      console.log('Error: ', err);
    });
  }
}
// run main() function
main({host: '0.0.0.0', port: '8000'});

