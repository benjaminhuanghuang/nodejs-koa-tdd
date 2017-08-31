const Koa = require('koa')
const fs = require('fs');

const app = new Koa();


// main function setup the body of response
const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./templates/main.html');
};
app.use(main);

app.listen(3010);

