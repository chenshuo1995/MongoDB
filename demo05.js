//查询

// 等于
// db.workmate.find(
//     {"skill.skillOne":"HTML+CSS"},
//     {name:true,"skill.skillOne":true,_id:false}
// )

//不等
// db.workmate.find(
//     {age:{$lte:30,$gte:25}},
//     {name:true,"skill.skillOne":true,_id:false}
// )

// var startDate = new Date("2018/01/01")
// db.workmate.find(
//     {regeditTime:{$gt:startDate}},
//     {name:true,"skill.skillOne":true,_id:false}
// )

//$in 一个键多个值
//nin
db.workmate.find(
    {age:{$in:[25,33]}},
    {name:true,"skill.skillOne":true,age:true,_id:false}
)
db.workmate.find(
    {age:{$nin:[25,33]}},
    {name:true,"skill.skillOne":true,age:true,_id:false}
)
//$or
db.workmate.find(
    {$or:[
        {age:{$gte:30}},
        {'skill.skillThree':'PHP'}
    ]},
    {name:true,"skill.skillThree":true,age:true,_id:false}
)
//$and
db.workmate.find(
    {$and:[
        {age:{$gte:30}},
        {'skill.skillThree':'PHP'}
    ]},
    {name:true,"skill.skillThree":true,age:true,_id:false}
)
//$not
db.workmate.find({
    age:{
            $not:{
                $lte:30,
                $gte:20
            }
        }
    },
    {name:true,"skill.skillThree":true,age:true,_id:false}
)

//操作数组

db.workmate.find(
    {interest:['画画','聚会','看电影']},
    {name:1,age:1,interest:1,_id:0}
)

db.workmate.find(
    {interest:'画画'},
    {name:1,age:1,interest:1,_id:0}
)
//多项匹配查询 与 $all
db.workmate.find(
    {interest:{$all:['看电影','画画']}},
    {name:1,age:1,interest:1,_id:0}
)
//或者 $in
db.workmate.find(
    {interest:{$in:['看电影','画画']}},
    {name:1,age:1,interest:1,_id:0}
)
//数组个数$size
db.workmate.find(
    {interest:{$size:5}},
    {name:1,age:1,interest:1,_id:0}
)
//$slice 显示选项
db.workmate.find(
    {},
    {name:1,age:1,interest:{$slice:2},_id:0}
) //显示前两项

//find 参数使用(query, fields, limit, skip, batchSize, options)

db.workmate.find(
    {},
    {name:1,age:1,interest:1,_id:0}
).limit(2).skip(2).sort({age:1})

//$where 强大 有风险 数据库压力增大
db.workmate.find(
    {$where:'this.age>30'},
    {name:1,age:1,interest:1,_id:0}
)