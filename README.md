# Overview
This is a reproduce-repo for a bug within NextJS API routes.
The bug is essentially a big difference between the DEV environment and the PROD environment in NextJS.
When only a GET and PUT handlers are defined for a given API route, only the GET handler will work in a PROD environment.

## Steps to reproduce
1. Clone this repo (or create an app using `create-next-app` with all default options)
2. Create a `route.ts` file in `src/app/api/anything`
3. Make 2 functions for handling the `PUT` and `GET` methods
4. Run `npm run dev` and `curl -X PUT http://localhost:3000/api/test` to make sure it doesn't produce an error
5. Close the dev server
6. Run `npm run build && npm run start` to start the optimized server.
7. Perform the same curl request using `curl -X PUT http://localhost:3000/api/test`
8. The server returns an HTML page about a 405 error.

## Expected behavior
The change in environment shouldn't affect the behavior of API routes.

## Credits
Credits to [Gede Dewo Wahyu M.W](https://github.com/gdwmw) for discovering this [here](https://stackoverflow.com/questions/78627618/encountered-put-error-code-405-method-not-allowed-in-production-on-next-js-14)
