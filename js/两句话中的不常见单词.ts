function uncommonFromSentences(s1: string, s2: string): string[] {
    let arr: Array<string> = [];

    let s1Arr = s1.split(' ');
    let s2Arr = s2.split(' ');

    let obj = {};

    for (let i = 0; i < s1Arr.length; i++) {
        if (obj[s1Arr[i]]) {
            obj[s1Arr[i]]++;
        } else {
            obj[s1Arr[i]] = 1;
        }
    }

    for (let i = 0; i < s2Arr.length; i++) {
        if (obj[s2Arr[i]]) {
            obj[s2Arr[i]]++;
        } else {
            obj[s2Arr[i]] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            arr.push(key);
        }
    }

    return arr;
}