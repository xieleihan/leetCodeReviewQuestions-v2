function projectionArea(grid: number[][]): number{
    let sum = 0;

    if (grid.length === 0) { 
        return sum;
    }
    if (grid.length === 1 && grid[0].length === 1) {
        sum = grid[0][0] * 2 + 1;
        return sum;
    }
    for (let i = 0; i < grid.length; i++) {
        let maxRow = 0;
        let maxCol = 0;
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > 0) {
                sum++;
            }
            maxRow = Math.max(maxRow, grid[i][j]);
            maxCol = Math.max(maxCol, grid[j][i]);
        }
        sum += maxRow + maxCol;
    }
    return sum;
}