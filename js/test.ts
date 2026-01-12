function getConcatenation(nums: number[]): number[] {
    let arr: number[] = nums;
    let result: number[] = JSON.parse(JSON.stringify(nums))

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
};

function shuffle(nums: number[], n: number): number[] {
    if(n = 0 || nums.length === 0) return [];

    let result: number[] = [];
    let firstHalf: number[] = nums.slice(0, n);
    let secondHalf: number[] = nums.slice(n);

    for (let i = 0; i < n; i++) {
        result.push(firstHalf[i]);
        result.push(secondHalf[i]);
    }
    return result;
};

function findMaxConsecutiveOnes(nums: number[]): number {
    let maxCount: number = 0;
    let currentCount: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }
    return maxCount;
};

