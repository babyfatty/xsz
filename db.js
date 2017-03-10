var SQL = require('sequelize')
// var sql = new SQL('xsz', 'root')
var sql = new SQL('xsz', 'root', 'VIvid1993@', {
  host: 'rm-bp1z7c3g05d1nr18ho.mysql.rds.aliyuncs.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
var User = sql.define('user', {
  username: SQL.STRING,
  school: SQL.STRING,
  grade: SQL.STRING,
  phone: SQL.STRING
})

var Register = sql.define('register',{
	uid:SQL.STRING,
	sid:SQL.STRING
})

var Speech = sql.define('speech',{
	name:SQL.STRING
})

var Seats = sql.define('seats',{
	row:SQL.STRING,
	column:SQL.STRING
})

User.sync({ force: false })
Register.sync({ force: false })
Speech.sync({ force: false })
Seats.sync({ force: false })

var addUser = function(user){
	return User.create(user);
}

var findUserByPhone = function(phone){
	return User.findOne({ where: {phone: phone} })
}

var register = function(regInfo){
	return  Register.create(regInfo)
}

var sessionInfo = function(){
	return Speech.findAll()
}

module.exports = {
	addUser,
	register,
	sessionInfo,
	findUserByPhone
}