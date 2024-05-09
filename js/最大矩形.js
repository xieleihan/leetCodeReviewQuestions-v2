/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    // 如果数据为空，则设置为0
    if(matrix.length == 0 || matrix[0].length == 0){
        return 0;
    }

    // 存储数据的row，col
    const row = matrix.length;
    const col = matrix[0].length;

    // 创建数据存储每一行的高度
    const height = new Array(col).fill(0);

    // 初始化面积
    var maxArea = 0;

    for (let i = 0; i < row; i++) {
        // 更新每一行对应的列的高度数组
        for (let j = 0; j < col; j++) {
            
            height[j] = matrix[i][j] === '1' ? height[j] + 1 : 0;
        }

        // 计算当前行的最大矩形面积并更新最大值
        maxArea = Math.max(maxArea, largestRectangleArea(height));
    }

    return maxArea;
};
// 处理
function largestRectangleArea(height){
    // 使用stack数据结构
    // 初始化一个空栈
    const stack = [];
    // 初始化maxArea
    var maxArea = 0;
    // 循环item
    let i = 0;
    while (i < height.length) {
        // 当前高度大于等于栈顶高度时，将当前位置入栈
        if (stack.length === 0 || height[i] >= height[stack[stack.length - 1]]) {
            // 入栈才执行i++
            stack.push(i++);
        } else {
            // 当前高度小于栈顶高度时，计算以栈顶元素为高度的矩形面积
            const top = stack.pop();
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height[top] * width);
            // 注意：此处不递增 i，因为当前高度未进入矩形，需要重新计算面积
        }
    }

    // 处理栈中剩余的元素
    while (stack.length > 0) {
        const top = stack.pop();
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height[top] * width);
    }

    return maxArea;
}
