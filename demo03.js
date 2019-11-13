var db = connect('company')
// -----------------one
// var workmate1 = {
//     name:'cs',
//     age:12,
//     sex:10,
//     job:'前端',
//     skill:{
//         skillOne:'html+css',
//         skillTwo:'javacript',
//         skillThree:'vue'
//     },
//     time:new Date()
// }

// db.workmate.update({name:'cs'},workmate1)

// ------------------two
//$set
// db.workmate.update({name:'cs'},{"$set":{age:9}})
// db.workmate.update({name:'cs'},{"$set":{'skill.skillThree':''}})

// $unset
// db.workmate.update({name:'cs'},{$unset:{age:''}}) // 删除
// db.workmate.update({name:'cs'},{$set:{age:20}})

//$inc  // -2
// db.workmate.update({name:'cs'},{$inc:{age:-2}}) 

//multi 依次添加
// db.workmate.update({},{$set:{interset:[]}},{multi:true})


//upsert
// db.workmate.update({name:'xiaowang1'},{$set:{age:20}},{upsert:true})

// $push //数组修改
// db.workmate.update({name:'mhm'},{$push:{interset:'draw'}})
// db.workmate.update({name:'cdd'},{$push:{"skill.skillFour":'draw'}})

//$ne
// db.workmate.update({name:'cdd',interset:{$ne:'game'}},{$push:{interset:'playGame'}})

//$addToSet
// db.workmate.update({name:'cdd'},{$addToSet:{interset:'readbook'}})

//$each 修改器 // 循环修改
// var newInters = ['sing','dance','code']
// db.workmate.update({name:'cdd'},{$addToSet:{interset:{$each:newInters}}})

//$pop 删除  1 从末端开始删除 -1从开始位置删除
// db.workmate.update({name:'cdd'},{$pop:{interset:1}})

//数组定位修改 非应答式操作
db.workmate.update({name:'cdd'},{$set:{"interset.2":"code"}})

//findAndModify

//db.runCommand()
print("update success!")