function myPromiseAllSettled(promise) {
    if (!Array.isArray(promise)){
       throw new TypeError('argument must be an array')
    }

    const result = []
    let count = 0

    if (promise.length === 0) {
        return Promise.resolve(result)
    }

    return new Promise((resolve) => {
        promise.forEach((item, index) => {
            Promise.resolve(item)
                .then(res => {
                    result[index] = { status: 'fulfilled', value: res }
                })
                .catch(err => {
                    result[index] = { status: 'rejected', reason: err }
                })
                .finally(() => {
                    count++
                    if (count === promise.length) {
                        resolve(result)
                    }
                })
        })
    })
}