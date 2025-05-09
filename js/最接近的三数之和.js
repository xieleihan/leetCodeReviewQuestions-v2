/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a - b);
    var l = nums.length;
    // 定义一个最接近的值,后续修改
    var res = nums[0] + nums[1] + nums[2];

    for(var i =0 ;i<l-2;i++){
        var leftPointer = i+1;
        var rightPointer = l-1;

        // 左指针向右,右向左 逼近
        while(leftPointer < rightPointer){
            const sum = nums[i] + nums[leftPointer] + nums[rightPointer];
            // 由于我们的一个题目的要求是要最接近值,所以,可以用绝对值的方式来判断是最合适的
            if(Math.abs(sum-target) < Math.abs(res-target)){
                res = sum;
            }
            // 理想情况,达到预期,直接return出去
            if(sum == target){
                return sum;
            }
            // 不然的话做出判断,指针走,再循环
            else if (sum < target){
                leftPointer++;
            }else{
                rightPointer--;
            }
        }
    }
    // 结果弹出
    return res;
};
