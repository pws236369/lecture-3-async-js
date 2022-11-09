const megaFetch = () => {
    fetch("userApi").then( res => res.json().then(
        user => {
            fetch(`cartApi/${user}`).then( res => res.json().then(
                userCart => {
                    fetch(`productsApi/${userCart}`).then( res => res.json().then(
                        allProducts => { console.log(allProducts)}
                    ))
                }
            ))
            }
    )
    )
}

// Not so cool... So we can use async/await keyword! Just syntx sugart 🍰

const getHuman = async (num) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${num}`);
    const human = await res.json();
    return human
}

const getBadHuman = async (num) => {
    const res = await fetch(`https://rickandasdsadmortyapi.com/api/character/${num}`);
    const human = await res.json();
    return human
}

const getFamily = async () => { // We forget to add await! add them :) 
    const rick =  getHuman(1)
    const morty =  getBadHuman(2)
    const summer =  getHuman(3)


    //return Promise.all([rick, morty, summer])
    return Promise.all([rick, morty, summer])
}

(async () => {

    let family;
    try {
         family = await getFamily()
    } catch (e) {
        console.log("😎😎😎😎😎" + e)
    }


console.log(family); // Let's check the network tab!

}
)()

console.log("Start...")
