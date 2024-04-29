/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var l = nums.length; // 取到数据的长度
    var a=[]; // 新建一个变量接受数据
    // 两层for循环遍历
    for (var i = 0; i < l; ++i) {
        for (var j = i + 1; j < l; ++j) {
            if (nums[i] + nums[j] === target) {
                a.push(i, j);
                return a; // 在找到结果后立即返回
            }
        }
    }
    return a;
}
