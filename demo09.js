db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

//建立全文索引
db.info.ensureIndex({contextInfo:'text'})

//全文索引查找
//$text:表示要在全文索引中查东西。
//$search:后边跟查找的内容
db.info.find(
    {$text:{$search:'programmer family  -drink'}}
)
//转义符
db.info.find(
    {$text:{$search:'\"love PlayGame\" drink'}}
)