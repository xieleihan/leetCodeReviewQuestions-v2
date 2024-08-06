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

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    var result = 0;
    // var arr = [];
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                result += 4;
                if (i > 0 && grid[i - 1][j] === 1) {
                    result -= 2;
                }
                if (j > 0 && grid[i][j - 1] === 1) {
                    result -= 2;
                }
            }
        }
    }
    // arr.push(count);
    // for (var i = 0; i < arr.length; i++) {
    //     switch (arr[i]) {
    //         case 0:
    //             break;
    //         case 1:
    //             if (arr[i - 1]) {
    //                 result += 3;
    //             } else {
    //                 result += 2;
    //             }
    //             if (arr.length === 1) {
    //                 result += 4;
    //             };
    //             break;
    //         case 2:
    //             result += 5;
    //             break;
    //         case 3:
    //             result += 6;
    //             break;
    //     }
    // }
    return result;
};
console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));