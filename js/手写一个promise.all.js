function myPromiseAll(promise) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promise)){
            return reject(new TypeError('argument must be an array'))
        }

        const result = []
        let count = 0

        if (promise.length === 0) {
            return resolve(result)
        }

        promise.forEach((item, index) => {
            Promise.resolve(item)
                .then(res => {
                    result[index] = res
                    count++
                    if (count === promise.length) {
                        resolve(result)
                    }
                })
                .catch(err => {
                    reject(err)// 一旦有错误，立即 reject
                }
            )
        })
     })

}