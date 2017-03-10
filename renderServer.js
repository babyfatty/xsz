const Koa = require('koa');
const app = new Koa();
const path = require('path')
const bodyParser = require('koa-bodyparser');
const fs = require('fs')
const resolve = file => path.resolve(__dirname, file)

// const session = require('koa-session');

// const session = require('koa2-cookie-session');
app.use(require('koa-static')(path.join(__dirname, 'dist')))
// app.use(convert(session(CONFIG,app)));
app.use((ctx,next)=>{
  const template = fs.readFileSync(resolve('./dist/static/index.html'), 'utf-8')
  ctx.body = template;
})
app.on('error', (err, ctx) =>
  console.log('server error', err, ctx)
);
app.listen(8880);
console.log('listening from port 8880')