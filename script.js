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

const getFamily = async () => { // We forget to add await! add them :) 
    const rick = await getHuman(1)
    const morty = await getHuman(2)
    const summer = await getHuman(3)


    return [rick, morty, summer]
}

(async () => {

const family = await getFamily()

console.log(human); // Let's check the network tab!

}
)()

console.log("Start...")
