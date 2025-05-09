function flipAndInvertImage(image: number[][]): number[][] {
    let arr: number[][] = []

    for (let i = 0; i < image.length; i++) {
        let arr1 = image[i].reverse()
        for (let j = 0; j < arr1.length; j++) {
            arr1[j] = arr1[j] === 0 ? 1 : 0
        }
        arr.push(arr1)
    }

    return arr;
};