function binaryGap(n: number): number{
    let str = n.toString(2); // 转成二进制
    let max = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === '1'){
            for(let j = i + 1; j < str.length; j++){
                if(str[j] === '1'){
                    max = Math.max(max, j - i);
                    break;
                }
            }
        }
    }

    return max;
}