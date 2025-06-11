// /**
//  * @param {number} num
//  * @return {boolean}
//  */
// var checkPerfectNumber = function (num) {
//     var bool = false;
//     var arr = [];
//     var index = Math.floor(Math.sqrt(num));
//     for (var i = 1; i <= index; i++){
//         if (num % i === 0) {
//             arr.push(i);
//             if (i != 1) {
//                 arr.push(num / i);
//             }
//         }
//     }
//     var temp = 0;
//     console.log(arr);
//     for (var i = 0; i < arr.length; i++){
//         temp += arr[i];
//     }
//     console.log(temp);
//     if (temp === num) {
//         bool = true;
//     }
//     return bool;
// };

// console.log(checkPerfectNumber(6));

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var repeatedSubstringPattern = function (s) {
//     var bool = false;
//     for (var i = 1; i <= Math.floor(s.length / 2); i++) {
//         if (s.length % i === 0) {
//             var temp = s.substring(0, i);
//             var newTemp = temp.repeat(s.length / i);
//             if (newTemp === s) {
//                 bool = true;
//                 break;
//             }
//         }
//     }

//     return bool;
// };
// console.log(repeatedSubstringPattern("ababab"));

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var islandPerimeter = function (grid) {
//     var result = 0;
//     // var arr = [];
//     for (var i = 0; i < grid.length; i++) {
//         for (var j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] === 1) {
//                 result += 4;
//                 if (i > 0 && grid[i - 1][j] === 1) {
//                     result -= 2;
//                 }
//                 if (j > 0 && grid[i][j - 1] === 1) {
//                     result -= 2;
//                 }
//             }
//         }
//     }
//     // arr.push(count);
//     // for (var i = 0; i < arr.length; i++) {
//     //     switch (arr[i]) {
//     //         case 0:
//     //             break;
//     //         case 1:
//     //             if (arr[i - 1]) {
//     //                 result += 3;
//     //             } else {
//     //                 result += 2;
//     //             }
//     //             if (arr.length === 1) {
//     //                 result += 4;
//     //             };
//     //             break;
//     //         case 2:
//     //             result += 5;
//     //             break;
//     //         case 3:
//     //             result += 6;
//     //             break;
//     //     }
//     // }
//     return result;
// };
// console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));

// /**
//  * @param {string} word
//  * @return {boolean}
//  */
// var detectCapitalUse = function (word) {
//     var bool = false;
//     var arr = word.split("");
//     console.log(arr);
//     // for (var i = 1; i < arr.length; i++){
//     //     if (arr[0] === arr[0].toUpperCase() && arr[i] === arr[i].toUpperCase()) {
//     //         bool = true;
//     //     } else if (arr[0] === arr[0].toUpperCase() && arr[i] === arr[i].toLowerCase()) {
//     //         bool = true;
//     //     } else if (arr[0] === arr[0].toLowerCase() && arr[i] === arr[i].toLowerCase()) {
//     //         bool = true;
//     //     }
//     // }
//     return bool;
// };
// console.log(detectCapitalUse("FlaG"));


// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// var reverseStr = function (s, k) {
//     var result = '';
//     for (var i = 0; i < s.length; i += k * 2){
//         var temp = s.slice(i, i + k).split('').reverse().join('');
//     }

//     return result;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var thirdMax = function (nums) {
//     var arr = nums.sort((a, b) => a - b);
//     console.log(arr);

//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) { // 检查新数组中是否存在该元素
//             newArr.push(arr[i]); // 如果不存在，添加到新数组中
//         }
//     }
//     console.log(newArr);
//     if (newArr.length >= 3) {
//         return newArr[newArr.length - 3];
//     } else {
//         return newArr[newArr.length - 1];
//     }
// };
// console.log(thirdMax([3, 2,2, 1]));

// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var addStrings = function (num1, num2) {
//     var str = '';
//     var newNum1 = num1.split("").reverse().join("");
//     var newNum2 = num2.split("").reverse().join("");
//     var carry = 0; // 用于存储进位
//     var len = Math.max(newNum1.length, newNum2.length); // 获取最长的长度
//     var result = [];

//     for (var i = 0; i < len; i++) {
//         var digit1 = i < newNum1.length ? parseInt(newNum1[i]) : 0; // 如果长度不够，用0代替
//         var digit2 = i < newNum2.length ? parseInt(newNum2[i]) : 0; // 如果长度不够，用0代替

//         var temp = digit1 + digit2 + carry;
//         if (temp > 9) {
//             carry = 1;
//             temp = temp - 10;
//         } else {
//             carry = 0;
//         }
//         result.push(temp);
//     }

//     if (carry > 0) { // 如果最后还有进位，添加到结果中
//         result.push(carry);
//     }

//     str = result.reverse().join("");
//     console.log(str);
//     return str;
// };
// addStrings("123", "456");

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var countSegments = function (s) {
//     var count = 0;
//     var arr = s.split(" ");
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] !== "") {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(countSegments("Hello, my name is John"));

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var arrangeCoins = function (n) {
//     var count = 0;
//     for (var i = 1; i < n; i++){
//         count += i;
//         if (count > n) {
//             count = i - 1;
//             break;
//         }
//     }
//     return count;
// };
// console.log(arrangeCoins(5));

// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// var reverseStr = function (s, k) {
//     var result = '';
//     var arr = s.split("");
//     for (var i = 0; i < arr.length; i += k * 2) {
//         var temp = arr.slice(i, i + k).reverse().join('');
//         result += temp + arr.slice(i + k, i + k * 2).join('');
//     }
//     return result;
// };
// console.log(reverseStr("abcdefg", 2));

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var arrangeCoins = function (n) {
//     var count = 0;
//     for (var i = 1; i <= n; i++){
//         n -= i;
//         if (n < 0) {
//             break;
//         }
//         count++;
//     }
//     return count;
// };
// console.log(arrangeCoins(5));

// /**
//  * @param {number[]} flowerbed
//  * @param {number} n
//  * @return {boolean}
//  */
// var canPlaceFlowers = function (flowerbed, n) {
//     var result = false;
//     // var head = 0;
//     // var foot = 0;
//     // for (var i = 0; i < flowerbed.length; i++) {
//     //     if (flowerbed[i] === 1) {
//     //         head = i;
//     //         for (var j = i; j < flowerbed.length; j++) {
//     //             if (flowerbed[j] === 1) {
//     //                 foot = j;
//     //                 var num = foot - head;
//     //                 if (num % 2 === 0) {
//     //                     // if (0 === n - (num - 2) / 2) {
//     //                     //     result = true;
//     //                     //     console.log(num);
//     //                     // };
//     //                     if (0 === n - (num - 2) / 2) {
//     //                         result = true;
//     //                     }
//     //                 } else {
//     //                     if (0 === n - (num - 1) / 2) {
//     //                         result = true;
//     //                         console.log(num);
//     //                     };
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }
//     for (var i = 0; i < flowerbed.length; i++){
//         var count = 0;
//         var length = flowerbed.length;

//         for (var i = 0; i < length; i++) {
//             // 当当前位置为0，且前后位置也为0（或是边界情况）
//             if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === length - 1 || flowerbed[i + 1] === 0)) {
//                 flowerbed[i] = 1;
//                 count++;
//                 if (count >= n) return true;
//             }
//         }

//         return count >= n;

//     }
//     return result;
// };
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
// console.log(canPlaceFlowers([1, 0, 0, 0,0, 1], 2));

/*
* getRandomColor(type) 生成随机颜色
* @param {string} : type: hex, 16进制; rgb, rgb颜色; rgba, rgba颜色; hsl, hsl颜色; hsla, hsla颜色  (非必须,默认传入的是生成hex颜色)
* @return {string} 
*/

// function getRandomColor(type) {
//     if (type === '' || type === undefined) {
//         return "#" + Math.random().toString(16).substring(2, 8).padEnd(6, '0');
//     }
//     switch (type) {
//         case 'hex':
//             return "#" + Math.random().toString(16).substring(2, 8).padEnd(6, '0');
//         case 'rgb':
//             return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//         case 'rgba':
//             return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(1)})`;
//         case 'hsl':
//             return `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 101)}%, ${Math.floor(Math.random() * 101)}%)`;
//         case 'hsla':
//             return `hsla(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 101)}%, ${Math.floor(Math.random() * 101)}%, ${Math.random().toFixed(1)})`;
//         default:
//             return "#" + Math.random().toString(16).substring(2, 8).padEnd(6, '0');
//     }
// }
// console.log(getRandomColor());

// /*
// * getRandomNumber() 生成随机数字
// * @return {number}
// */
// const crypto = require('crypto');
// function getRandomNumber() {
//     var num = (Math.random().toString().substring(2,10) + Math.random().toString().substring(2)).toString().substring(2, 10);
//     var date = new Date();
//     date = date.getTime();
//     num = (num * date).toString().substring(0, 8);
//     let random = crypto.getRandomValues(new Uint32Array(1))[0];
//     num = (num * random).toString().substring(0, 8);
//     return num;
// }

// console.log(getRandomNumber());

// /*
// * getTwoNumberOfSymbols() 获取两个数的符号时候一致
// * @param {number,number} num1,num2
// * @return {boolean}
// */
// function getTwoNumberOfSymbols(num1 , num2) {
//     return (num1 ^ num2) >= 0;
// }
// console.log(getTwoNumberOfSymbols(3, 3));

// /*
// * isPowerOf() 判断一个数是不是2的整数幂
// * @param {number} num
// * @return {boolean}
// */
// function isPowerOf(num) {
//     return (num & (num - 1)) === 0;
// }
// console.log(isPowerOf(-16));

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {character}
//  */
// var findTheDifference = function (s, t) {
//     let obj = {}
//     let copyObj = {}

//     for (let i = 0; i < s.length; i++) {
//         if (obj[s[i]]) {
//             obj[s[i]]++;
//         } else {
//             obj[s[i]] = 1;
//         }
//     }
//     for (let i = 0; i < t.length; i++) {
//         if (copyObj[t[i]]) {
//             copyObj[t[i]]++
//         } else {
//             copyObj[t[i]] = 1
//         }
//     }

//     for (let key in copyObj) {
//         if (!obj[key] || copyObj[key] !== obj[key]) {
//             return key
//         }
//     }
// };

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isSubsequence = function (s, t) {
//     let result = true;

//     for (let i = 0; i < s.length; i++){
//         for (let j = 0; j < t.length; j++) {
//             if(t.length === 0) {
//                 return false;
//             }
//             if (s[i] === t[j]) {
//                 t = t.slice(j + 1);
//                 break;
//             } else if (j === t.length - 1) {
//                 return false;
//             }
//         }
//     }

//     return result
// };

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestPalindrome = function (s) {
//     // 重新排列后的回文串,使用对象的方式
//     // 当字符出现偶数次时，可以成对放置在回文串的两端
//     // 当字符出现奇数次时，可以放置在回文串的中间
//     let obj = {};
//     for (let i = 0; i < s.length; i++) {
//         if (obj[s[i]]) {
//             obj[s[i]]++;
//         } else {
//             obj[s[i]] = 1;
//         }
//     }

//     let length = 0;
//     let hasOdd = false; // 标记是否存在奇数次的字符

//     for (let key in obj) {
//         if (obj[key] % 2 === 0) {
//             length += obj[key]; // 偶数次字符直接加到长度
//         } else {
//             if (!hasOdd) {
//                 length += obj[key]; // 奇数次字符减一后加到长度
//                 hasOdd = true; // 标记存在奇数次字符
//             }
//         }
//     }

    
//     return length;
// };

// console.log(longestPalindrome("abccccdd")); // 输出 7
// console.log(longestPalindrome("a")); // 输出 1

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var fizzBuzz = function (n) {
//     let result = [];

//     for (let i = 0; i < n; i++){
//         if((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
//             result.push("FizzBuzz");
            
//         }
//         if((i + 1) % 3 === 0 && (i + 1) % 5 !== 0) {
//             result.push("Fizz");
//         }
//         if((i + 1) % 3 !== 0 && (i + 1) % 5 === 0) {
//             result.push("Buzz");
//         }
//         if((i + 1) % 3 !== 0 && (i + 1) % 5 !== 0) {
//             result.push((i + 1).toString());
//         }
//     }

//     return result;
// };

// console.log(fizzBuzz(15)); // 输出 ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
// console.log(fizzBuzz(5)); // 输出 ["1", "2", "Fizz", "4", "Buzz"]
// console.log(fizzBuzz(3)); // 输出 ["1", "2", "Fizz"]

let obj = [{
    name: "John",
    age: 30,
    city: "New York"
},
{
    name: "John1",
    age: 301,
    city: "New York1"
    },
    {
        name: "John2",
        age: 302,
        city: "New York2"
    }]
function objectToArray(arr) {
    const keys = Object.keys(arr[0]);
    const value = arr.map(item => {
        return keys.map(key => item[key]);
    });
    return [keys, ...value];
}
console.log(objectToArray(obj));

// 节流: 某段时间内触发一次
function throttle(fn, wait) {
    let time = null;

    return function (...args) {
        if (!time) {
            time = setTimeout(() => {
                fn.apply(this, args);
                time = null;
            }, wait);
        }
    }
}

function throttle(fn, wait) {
    let lasttime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lasttime >= wait) {
            lasttime = now;
            fn.apply(this, args);
        }
    }
}

// 某段时间触发最后一次叫防抖,如果多次触发,则重新计时
function debounce(fn, wait) {
    let time = null;
    return function (...args) {
        if (time) {
            clearTimeout(time);
        }
        time = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    }
}

// 创建XHR
// const xhr = new XMLHttpRequest();
// // 设置请求方法和URL
// xhr.open('GET', 'https://api.example.com/data', true);
// // 发送请求
// xhr.send();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) { // 请求完成
//         if (xhr.status === 200) { // 成功
//             console.log('Response:', xhr.responseText);
//         } else {
//             console.error('Error:', xhr.status, xhr.statusText);
//         }
//     }
// };


/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let arr = num.split('');
    let stack = [];

    for (let i = 0; i < arr.length; i++) { 
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if(arr.length <= k) {
        return '0';
    }

    if(arr[0] === '0') {
        let index = 0;
        while (index < arr.length && arr[index] === '0') {
            index++;
        }
        arr = arr.slice(index);
    }
    stack = arr.slice(0, arr.length - k);

    // 数组转字符串
    let str = stack.join('');
    return str
};

console.log(removeKdigits("1432219", 3))