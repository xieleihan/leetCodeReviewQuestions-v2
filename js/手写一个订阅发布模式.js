class PubSub{

    constructor() {
        this.events = {}; // 创建一个新对象,用来保存事件名和对应的回调函数
    }

    pub(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }// 检查事件名是否存在,如果不存在就创建一个新的数组,然后将回调函数添加到数组中
    // 如果事件名已经存在,就将回调函数添加到对应的数组中

    sub(eventName, data) {
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName].forEach(callback => {
            callback(data);
        });
    }// 查看是否有监听该事件的回调函数,如果有就遍历所有的回调函数,并将数据传递给它们

    unsub(eventName, callback) {
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    }// 卸载事件 如果没有这个事件名，直接返回用 filter 移除指定的 callback 回调函数（基于引用对比）。
}