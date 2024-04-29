 /**
* @param {number[]} height
* @return {number}
*/
var trap = function(height) {
   var x = height.length;
      if (x == 0) {
         return 0;
       }
       
   var leftMax = [];
   var rightMax = [];
       
   leftMax[0] = height[0];
   rightMax[x - 1] = height[x - 1];
       
   // 计算左右边界最大值
   for (var i = 1; i < x; ++i) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
      rightMax[x - i - 1] = Math.max(rightMax[x - i], height[x - i - 1]);
   }
       
   var sum = 0;
   for (var i = 0; i < x; ++i) {
      sum += Math.min(leftMax[i], rightMax[i]) - height[i];
   }
       
   return sum;
};
