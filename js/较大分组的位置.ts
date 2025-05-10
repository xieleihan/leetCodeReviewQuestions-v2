function largeGroupPositions(s: string): number[][] {
    let arr: number[][] = []

    let arr1 = s.split('')

    let count = 1
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr1[i + 1]) {
            count++
        } else {
            if (count >= 3) {
                arr.push([i - count + 1, i])
            }
            count = 1
        }
    }

    return arr;
};