// var startTime = new Date().getTime()
// var db = connect('company');
// var rs = db.randomInfo.find({'username':'3qy78igd49ho'})

// rs.forEach(rs=>{printjson(rs)})

// var runTime = new Date().getTime() - startTime
// print('[demo] run time is '+runTime+'ms')

//建立索引
// db.randomInfo.ensureIndex({username:1})
//复合索引
// db.randomInfo.ensureIndex({randNum0:1})

var startTime = new Date().getTime()
var db = connect('company');
// var rs = db.randomInfo.find({username:'3qy78igd49ho',randNum0:53265})//双索引查询
var rs = db.randomInfo.find({username:'3qy78igd49ho',randNum0:53265}).hint({randNum0:1}) // 优先数字值索引查询 比字符串索引值快

rs.forEach(rs=>{printjson(rs)})

var runTime = new Date().getTime() - startTime
print('[demo] run time is '+runTime+'ms')

//建立索引
// db.randomInfo.entureIndex({randNum0:1})
//删除索引
// db.randomInfo.dropIndex('randNum0_1')