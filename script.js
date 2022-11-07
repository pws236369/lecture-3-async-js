const x = fetch("https://rickandmortyapi.com/api/character/0")

x
.then(res => res.json())
.then(x => console.log(x))
.catch(e => console.error(e))
