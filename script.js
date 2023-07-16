fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
.then(res => {
  return res.json()
})
.then(data => console.log(data))
.catch(error => console.log("ERROR"))