const woltPromise = new Promise(
    (resolve, reject) => {
        woltIsHere = true
        if(woltIsHere) {
            setTimeout( () => { // Now we need to wait...
                resolve("Yami! 🍦")
            }, 2000)            
        } else {
            reject("Oh no! 😠")
        }
})


woltPromise
.then( result => { console.log(result)})
.catch( error => { console.error(error)})


console.log(woltPromise)