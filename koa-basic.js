const Koa = require('koa');
const app = new Koa();


// main function setup the body of response
const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(main);

app.listen(3010);

