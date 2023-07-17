getData();

async function getData() {
  try {
    randomPokemon = Math.floor(Math.random() * 387);
    randomURL = "https://pokeapi.co/api/v2/pokemon/"
    randomURL += randomPokemon
    const response = await fetch(randomURL)
    const data = await response.json();

    length = data.types.length;
    template = "";
    template += "<td>name: " + data.name + "</td>";
    template += "<td><img src=" + data.sprites.front_default + "></td>";
    types = "";
    types += "<td>type: "

    for (i = 0; i < length; i++) {
      types += data.types[i].type.name;
      if (i < length - 1) {
        types += ", "
      }
    }

    types += "</td>"
    document.getElementById("data").innerHTML = template + types;
    
  } catch (error) {
    console.log(error)
    var template = "";
    template += "<td>404 ERROR NOT FOUND</td>";
    document.getElementById("data").innerHTML = template;
  }
}
