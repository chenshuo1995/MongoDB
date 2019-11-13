//数据备份
mongodump --host 127.0.0.1 --port 27017 --out E:/databack/

// 数据恢复
mongorestore --host 127.0.0.1 --port 27017 E:/databack/