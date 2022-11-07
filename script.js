const x = fetch("https://rickandmortyapi.com/api/character/2")

x
.then(res => res.json())
.then(x => console.log(x))
