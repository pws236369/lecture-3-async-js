/* Now, we will pass a callback. only after
The timeout is done, we invoce the callback function.
*/ 

const getSharks = (cb) => {
    setTimeout( () => {
        cb("🦈🦈🦈🦈🦈🦈")
    }, 3500)  
}

getSharks( (sharks) => console.log(sharks))

// And now, lets try with 1 ms.
