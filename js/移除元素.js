/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0; // 初始化一个指针来跟踪数组中的当前位置
    // 第一步：获取原数组的长度
    var l = nums.length;
    // 根据题目的要求，不能开辟新的内存空间
    // for(var i =0;i<l;i++){
    //  if(nums[i]==val){
    //      // 删除数组中指定的元素
    //      nums.splice(nums.indexOf(val), 1)
    //   }
    // }
    // 上面那个有点问题，在于你删除元素的时候，i不能完全遍历到

    while (i < l) { // 遍历数组
        if (nums[i] === val) { // 如果当前元素等于要移除的值
            nums.splice(i, 1); // 移除索引为 i 的元素
        } else {
            i++; // 移动到下一个元素
        }
    }
    
    return nums.length;
    
};