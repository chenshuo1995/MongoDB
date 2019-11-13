function GetRandomNum(min,max){
    let rang = max-min;
    let rand = Math.random()
    return (min + Math.round(rand * rang))
}
// console.log(GetRandomNum(10000,99999))

function GetRandomUserName(min,max){
    let tempStringArray = '123456789qwertyuiopasdfggh'.split("")
    let outPuttext = ''
    for (let i = 0; i < GetRandomNum(min,max); i++) {
        outPuttext = outPuttext+tempStringArray[GetRandomNum(0,tempStringArray.length)]
    }
    return outPuttext
}
// console.log(GetRandomUserName(7,16))
var db = connect('company')
db.randomInfo.drop()
var tempInfo = []
var startTime = new Date().getTime()
for (let i = 0; i < 2000000; i++) {
   tempInfo.push(
       {
           username:GetRandomUserName(7,16),
           regeditTime:new Date(),
           randNum0:GetRandomNum(10000,99999),
           randNum1:GetRandomNum(10000,99999),
           randNum2:GetRandomNum(10000,99999),
           randNum3:GetRandomNum(10000,99999),
           randNum4:GetRandomNum(10000,99999),
           randNum5:GetRandomNum(10000,99999),
           randNum6:GetRandomNum(10000,99999),
           randNum7:GetRandomNum(10000,99999),
           randNum8:GetRandomNum(10000,99999),
           randNum9:GetRandomNum(10000,99999),
           randNum10:GetRandomNum(10000,99999),
       }
   )  
}


db.randomInfo.insert(tempInfo)
var endTime = (new Date().getTime() - startTime)
print("[demo]----------------"+endTime+"success!")