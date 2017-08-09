# juxta-proxy-server

I built a fantasy football tool using AngularJS
(check it out: [JuxtaPosition](https://m-tambo.com/juxta-position))

But I was having trouble with my API calls, due to cross-origin restrictions.

So I built this little proxy server in Node.js to handle the calls for me.

In the process, I added a few NPM packages to my tool belt

![screen shot 2017-04-28 at 11 10 45 am](https://cloud.githubusercontent.com/assets/23462252/25537398/ef03af5e-2c03-11e7-9942-6349e9e1d449.png)

## [cors](https://www.npmjs.com/package/cors)
This simply enables CORS for whatever routes you define.

## [request-promise](https://www.npmjs.com/package/request-promise)
Just what it sounds like... an HTTP request with a promise built-in. I wait until the data is received and then passit back to the client.
