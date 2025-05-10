/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // 将数组排序
    const result = [];

    const length = nums.length;
    for (let i = 0; i < length - 2; i++) {
        // 避免重复的第一个数
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        for (let j = i + 1; j < length - 1; j++) {
            // 避免重复的第二个数
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            for (let k = j + 1; k < length; k++) {
                // 避免重复的第三个数
                if (k > j + 1 && nums[k] === nums[k - 1]) {
                    continue;
                }

                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    return result;
};
