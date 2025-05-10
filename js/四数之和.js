/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // 跟三数之和是差不多的
    /**  
     * 第一步:我们还是对数组进行排序,方便我们的双指针
     * 因为什么呢,遇到这种多数计算的,双指针可以更好的实现
     * 相比我之前的暴力解法,这种方式很好
     */
    nums.sort((a, b) => a - b);
    var res = new Array();
    var l = nums.length;
    // 外层遍历数组,固定第一个数
    for (var i = 0; i < l - 3; i++) {
        // 如果当前的数与上一个数相等,则跳过
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        // 二层循环,用于固定第二个数
        for (var j = i + 1; j < l - 2; j++) {
            // 跟上一个数相等的话直接跳过
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }

            // 定义左右Pointer
            var leftPointer = j + 1;
            var rightPointer = l - 1;

            // 遍历剩下的数组,找另外两个数
            while (leftPointer < rightPointer) {
                // const sum = nums[0]+nums[1]+nums[2]+nums[3]+nums[4];
                // 设置当前四个数的和
                const sum = nums[i] + nums[j] + nums[leftPointer] + nums[rightPointer];

                // 如果等于target
                if (sum == target) {
                    // 进入数组
                    res.push([nums[i], nums[j], nums[leftPointer], nums[rightPointer]])

                    // 跳过重复的左pointer
                    while (leftPointer < rightPointer && nums[leftPointer] == nums[leftPointer + 1]) {
                        leftPointer++;
                    }
                    // 跳过重复的右pointer
                    while (leftPointer < rightPointer && nums[rightPointer] == nums[rightPointer - 1]) {
                        rightPointer--;
                    }

                    // 移动左右pointer
                    leftPointer++;
                    rightPointer--;
                } else if (sum < target) {
                    // sum小于target,左pointer右移
                    leftPointer++;
                }
                else {
                    // 否则,右pointer左移
                    rightPointer--;
                }
            }
        }
    }

    return res;
};
