Function.prototype.myCall = function (thisArg, ...args) {
    let fn = this; // 保存当前函数
    thisArg = thisArg !== null ? Object(thisArg) : window; // 将thisArg转为对象，如果为null或undefined，则指向window
    
    thisArg.fn = fn; // 将当前函数赋值给thisArg对象的fn属性
    let result = thisArg.fn(...args); // 执行函数并传入参数
    delete thisArg.fn; // 删除fn属性
    return result; // 返回函数执行结果
}