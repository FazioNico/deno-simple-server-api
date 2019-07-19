// import deps
import { ServerRequest, Response } from 'https://deno.land/std/http/server.ts';

// create router
export const router = async (req: ServerRequest): Promise<void> => {
  let data: Response = {};
  switch (true) {
    case req.url.includes('reqres'):
      // extract params url
      const [baseUrl, ...params] = req.url.split('/reqres/');
      const url = `https://reqres.in/api/${params.join('')}`;
      console.log('Request to: ', url);
      // do request to https://reqres.in with correct params
      data = await await fetch(url, {}).then(res => ({...res})).catch(err => err)
      break;
    // handle default request
    default:
      data.body =  new TextEncoder().encode('Hello World\n');
      break;
  }
  if (!data.body) return req.respond({status: 404, body: new TextEncoder().encode('Error response: Server endpoint not found.') });
  // return response
  return await req.respond(data).catch(err => err);
}