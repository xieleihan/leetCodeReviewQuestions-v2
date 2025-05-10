function toGoatLatin(sentence: string): string {
    const lowArr = sentence.split(' ')

    const rep = /^[aeiou]/i //匹配元音字母
    const prep = 'ma'

    let str: string[] = [];

    for (let i = 0; i < lowArr.length; i++) {
        const word = lowArr[i]
        if (rep.test(word)) {
            str.push(word + prep + 'a'.repeat(i + 1))
        } else {
            str.push(word.slice(1) + word[0] + prep + 'a'.repeat(i + 1))
        }
    }

    return str.join(' ')
};