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

(async () => {

const human = await getHuman(1)

console.log(human);

}
)()

console.log("Start...")
