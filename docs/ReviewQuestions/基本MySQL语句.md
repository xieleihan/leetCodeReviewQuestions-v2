**1. 下载 mysql  模块**

```sh      
 npm install  mysql        
```



**2. 数据库配置**

​    ![0](https://note.youdao.com/yws/public/resource/ec20c90469844fa8335f75a98336f131/xmlnote/9261BC3B25E542A3B3BA737476E8C8D2/23197643940B43178D68CC15E34E67B7/136730)

​    ![0](https://note.youdao.com/yws/public/resource/ec20c90469844fa8335f75a98336f131/xmlnote/9261BC3B25E542A3B3BA737476E8C8D2/8026B16A8879479988B147230312F5E6/136731)

**创建 database.js 文件**

```javascript
//  数据库配置文件
module.exports = {    
    mysql :{        
        host:'47.93.52.8',        
        user:'schools',        
        password:'schoolyard123456',        
        database:'schools',        
        port:3306    
    } 
} 
```



**创建 db.js 文件 （index.js）**

```javascript
const mysql = require('mysql'); 
const dbconfig = require('../config/database'); 
// 使用连接池 
var pool = mysql.createPool(dbconfig.mysql); 
module.exports = {    
    ///  以后只需要调用query方法执行sql语句    
    query: function (sql, callback) {        
        pool.getConnection(function (err, connection) {            					connection.query(sql, function (err, rows) {                
            callback(err, rows);                
            connection.release();            
        })        
      })    
   } 
}              
```



**加强版 (封装)**

```javascript
const mysql = require('mysql'); const dbconfig = require('../config/database'); 
// 使用连接池 
var pool = mysql.createPool(dbconfig.mysql); 
module.exports = {   
    //调用query方法执行sql语句   
    query: function (sql) {     
        // 返回操作数据库的promise     
        return new Promise((resolve, reject) => {       
            // 连接数据库       
            pool.getConnection(function (err, connection) {         
                // 执行sql语句         
                connection.query(sql, function (err, rows) {           
                    // 操作失败           
                    if(err){             
                        reject(err)           
                    }           
                    // 操作成功           
                    else {             
                        resolve(rows);           
                    }           
                    // 释放连接           
                    connection.release();         
                })       
            })     
        })   
    } 
} 
```



**数据的增删改查（sql语句）**

**参考手册：**https://www.runoob.com/mysql/mysql-select-query.html

建议使用es6写法

**1. 查询所有**

```sql        
 // 获取数据库中动态信息 let sql = "select * from User"      
```



**2. 查询语句（条件）**

```sql       
let sql = `select task_title from db_task where id='${id}'`; // 查询指定数量的任务的sql语句 let sql = `select * from db_task limit ${page_num} , ${page_size}`; // 通过关键字查询任务 let sql = `select * from db_task  where task_title like '%${keyword}%'`; 
```



**3. 插入数据**

```sql
let sql = `insert into 数据表(字段1,字段2,字段3) values('${值}','${值}','${值}')`;
```



**4. 删除数据**

```sql
// 删除数据 let sql = `delete from db_task where id = '${id}'` 
```



**5. 更新数据**  

```sql
let sql = `update db_task set task_title= '${task_title}' where  id= '${id}'`; 
```



**6. 统计数据**

```sql
let sql = `select count(*) as total from db_user`
```



**7. 分页数据**

```sql
let page_num= ((parseInt(page_num) - 1) * parseInt(page_size)) let page_size= (parseInt(page_size)) let sql =  `select * from db_task limit ${page_num} , ${page_size}`
```



**8、关键字查询（模糊查询）**

```sql
const sql = `select * from c_article where article_title like '%${keyword}%' or nav_name like '%${keyword}%' or article_author like '%${keyword}%'`; 
```

