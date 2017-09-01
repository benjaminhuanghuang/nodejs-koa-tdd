const Koa = require("koa");
const app = new Koa();

// This is a global error handler for all middleware
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};

const main = ctx => {
  ctx.throw(500);
};

app.use(handler);
app.use(main);

app.on('error', (err, ctx) =>{
  console.error('server error', err);
});

app.listen(3010);
