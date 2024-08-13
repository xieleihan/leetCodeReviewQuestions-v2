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

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    var count = 0;
    for (var i = 1; i <= n; i++){
        n -= i;
        if (n < 0) {
            break;
        }
        count++;
    }
    return count;
};
console.log(arrangeCoins(5));