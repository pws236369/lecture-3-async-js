const woltPromise = new Promise(
    (resolve, reject) => {
        se
        woltIsHere = true
        if(woltIsHere) {
            resolve("Yami! 🍦")
        } else {
            reject("Oh no! 😠")
        }
})


woltPromise
.then( result => { console.log(result)})
.catch( error => { console.error(error)})


console.log(woltPromise)