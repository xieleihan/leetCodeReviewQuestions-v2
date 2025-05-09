function transpose(matrix: number[][]): number[][] {
    const rowLen: number = matrix.length;
    const colLen: number = matrix[0].length;

    // 开辟新数组
    const result: number[][] = Array.from({ length: colLen }, () => Array(rowLen).fill(0));

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
};