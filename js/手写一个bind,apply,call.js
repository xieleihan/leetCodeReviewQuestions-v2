// call .call(fn, arg1, arg2, ...)
Function.prototype.myCall = function (thisArg, ...args) {
    let fn = this; // 保存当前函数
    thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window; // 将thisArg转为对象，如果为null或undefined，则指向window
    
    thisArg.fn = fn; // 将当前函数赋值给thisArg对象的fn属性
    let result = thisArg.fn(...args); // 执行函数并传入参数
    delete thisArg.fn; // 删除fn属性
    return result; // 返回函数执行结果
}

// apply .apply(fn, [arg1, arg2, ...])
Function.prototype.myApply = function (thisArg, args) {
    let fn = this; // 保存当前函数
    thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window; // 将thisArg转为对象，如果为null或undefined，则指向window

    thisArg.fn = fn; // 将当前函数赋值给thisArg对象的fn属性
    let result;
    if (!args) {
        result = thisArg.fn(); // 执行函数
    } else {
        result = thisArg.fn(...args); // 执行函数并传入参数
    }
    delete thisArg.fn; // 删除fn属性
    return result; // 返回函数执行结果
}

// bind .bind(fn, arg1, arg2, ...)()
Function.prototype.myBind = function (thisArg, ...args) {
    let fn = this; // 保存当前函数
    thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window; // 将thisArg转为对象，如果为null或undefined，则指向window
    return function F(...innerArgs) { // 返回一个新的函数
        if (this instanceof F) { // 如果是new出来的实例
            return new fn(...args, ...innerArgs); // 返回fn的实例
        }
        return fn.apply(thisArg, [...args, ...innerArgs]); // 否则执行fn函数
    }
}