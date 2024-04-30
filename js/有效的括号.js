/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 这个得用数据结构,stack(栈)的方式
    // 解题思路是这样的,当你遇到左闭合符号的时候,压入stack,
    // 当遇到右闭合的时候,将stack弹出,来比对,直到stack没有任何东西
    var stack = []; // 创建一个新栈
    for(var i =0;i<s.length;i++){
        var char = s[i];
        if(char === '{' || char === '(' || char === '['){
            stack.push(char);
        }else{
            // 上面的那个是遇到左括号的情况
            // 如果都没左括号,直接不用再比对了
            if(stack.length == 0){
                return false;
            }
            // 弹出栈
            var right = stack.pop();
            // check
            if((char==='}' && right !=='{') || (char===')' && right !=='(') || (char===']' && right !=='[')){
                return false;
            }
        }
    }
    // return true;
    return stack.length === 0;
};