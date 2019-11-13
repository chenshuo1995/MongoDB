//mongoDB 管理
 
//创建用户
db.createUser({
    user:'jspang',
    pwd:'123456',
    customData:{
        name:'技术胖',
        email:'web0432@126.com',
        age:18,
    },
    roles:[
        {
            role:"readWrite",
            db:'company',
        },
        'read'
    ]
})
//新建用户
// db.system.users.find()
//删除用户
// db.system.users.remove({user:'jspang'})
//建权
db.auth("jspang","123456")