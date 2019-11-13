var db = connect("company")
// var result = db.workmate.find(
//     {$or:[
//             {age:[25,30]} ,
//             {sex:1}
//         ]
//     }
// )
// var result = db.workmate.find(
//     {age:{$in:[25,30]}},
//     {name:1,age:1,_id:0}
// )

// var result = db.workmate.find(
//     {
//         $or:[
//             {age:{$gte:30}},
//             {sex:1}
//         ]   
//     },
//     {name:1,age:1,sex:1,_id:0}
// )

var result = db.workmate.find(
    {
        interest:{$in:['画画','看电影']}
    },
    {name:1,age:1,sex:1,interest:{$slice:2},_id:0}
)
result.forEach(function(result){
    printjson(result)
})