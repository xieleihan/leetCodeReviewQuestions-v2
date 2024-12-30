function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    let arr: Array<number> = []

    let sumA = aliceSizes.reduce((prev, curr) => prev + curr);
    let sumB = bobSizes.reduce((prev, curr) => prev + curr);

    let diff = (sumA - sumB) / 2;

    if (diff % 1 !== 0) return arr;
    
    let setB = new Set(bobSizes);
    for (let a of aliceSizes) {
        let b = a - diff;
        if (setB.has(b)) {
            arr.push(a, b);
            break;
        }
    }
    
    return arr;
};