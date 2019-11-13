// db.workmate.update({sex:2},{$set:{money:1000}},false,true) // upsert 没有不增加  mutil true都修改
// var message = db.runCommand({getLastError:1})
// // if(message.updatedExisting){

// // }else{

// // }
// printjson(message)

//findAndModify 查找并修改
var myModify = {
    findAndModify:"workmate",
    query:{name:'ChenShuo'},
    update:{$set:{age:"18"}},
    new:true
}

var message = db.runCommand(myModify);
printjson(message)
