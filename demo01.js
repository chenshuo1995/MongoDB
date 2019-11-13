var startTime = (new Date()).getTime()
var db = connect('log')
// for (let i = 0; i < 1000; i++) {
//     db.demo.insert({num:1})
    
// }
var arr = []
for (let i = 0; i < 100; i++) {
    arr.push({num:1})
    
}
db.demo.insert(arr)

var runTime = (new Date()).getTime() - startTime
print("[demo]:log print "+runTime+"ms")