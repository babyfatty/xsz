const Koa = require('koa');
const app = new Koa();
const path = require('path')
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const convert = require('koa-convert');
app.keys = ['1232312312312'];
var CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
};
app.use(require('koa-static')(path.join(__dirname, 'dist')))
app.use(convert(session(CONFIG,app)));
const router = require('./api')

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.on('error', (err, ctx) =>
  console.log('server error', err, ctx)
);
var opt ={}
app.use(bodyParser())
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8889);

console.log('listening from port 8889')