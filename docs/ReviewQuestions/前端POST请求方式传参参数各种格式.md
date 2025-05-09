# 前端POST请求方式传参参数各种形式

## 前端传参参数各种参数

- `form-data`
- `application/x-www-form-urlencoded`
- `application/json`
- `text/xml`

### `from-data`

> `enctyoe`等于`multipart/from-data`
>
> `from-data`格式主要是用来文件上传
>
> 调用接口的时候,`data`等于`formData`

### `application/x-www-form-urlencoded`

> 如果不设置`enctype`属性,那么最终会以`application/x-www-form-urlencoded`方式提交数据
>
> 表单传参格式,常见的post传参格式

### `application/json`

> 发送数据给后端的,支持键值对复杂对的结构化数据
>
> `application/json`这个`Content-Type`作为响应头

### `text/xml`

> 是一种使用`http`作为传输协议,`xml`作为编码方式的远程调用规范
>
> `XML-RPC`协议简单,功能够用