//**构造函数（Constructor Function）**是用于创建多个具有相同结构的对象的一种函数形式。
function myNew(Constructor, ...agrs) {
    const obj = {};

    Object.setPrototypeOf(obj, Constructor.prototype); // 将原型指向构造函数的prototype

    const result = Constructor.apply(obj, agrs); // 执行构造函数，this指向新对象

    return typeof result === 'object' ? result : obj; // 如果构造函数返回的是对象，则返回该对象，否则返回新对象
}