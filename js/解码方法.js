/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(!s || s.length == 0){
        return 0;
    }
    // 新建一个数组，存放我们遍历string的每一个item
    var arr = new Array(s.length + 1).fill(0);
    arr[0] = 1;
    arr[1] = s[0] !== '0' ? 1 : 0;
    for(let i = 2; i <= s.length; i++){
        const oneDigit = parseInt(s.substring(i-1,i));
        const twoDigits = parseInt(s.substring(i-2,i));
        if(oneDigit >= 1 && oneDigit <= 9){
            arr[i] += arr[i-1];
        }
        if(twoDigits >=10 && twoDigits <= 26){
            arr[i] += arr[i-2];
        }
    }
    return arr[s.length];
};
