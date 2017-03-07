const router = require('koa-router')()
const fs = require('fs')
const db = require('./db')
const path = require('path')
const tool = require('./lib/tool')
const resolve = file => path.resolve(__dirname, file)

router
.post('/api/addUser', async function (ctx, next) {
    console.log(ctx.request.body)
    ctx.body = 123
})
.get('/api/sendSMS',async function(ctx,next){
	let code = tool.genVaryCode(4)

	var res = await tool.sendMsg(code)
	console.log(res)
	if(res.success){
		ctx.session.code = code
		console.log(ctx.session.code)
		ctx.body = code
	}
})
.get('/api/orderedSeats',async function(ctx,next){})
.get('/api/varyCode',function(ctx,next){
	console.log('1',ctx.query.code)
	console.log('2',ctx.session.code)
	if(ctx.query.code===ctx.session.code){
		ctx.body = 'success'		
	}else{
		ctx.body = 'fail'
	}
})
.get('*',function(ctx){
  const template = fs.readFileSync(resolve('./dist/static/index.html'), 'utf-8')
  ctx.body = template;
}) 


module.exports = router