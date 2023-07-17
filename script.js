getData();

async function getData() {
  try {
    // Generates a URL for a random Pokemon from the first three generations
    randomPokemon = Math.floor(Math.random() * 387);
    randomURL = "https://pokeapi.co/api/v2/pokemon/"
    randomURL += randomPokemon
    const response = await fetch(randomURL)
    const data = await response.json();

    // Creates markup to display Pokemon data in the DOM
    length = data.types.length;
    template = "";
    template += "<td>name: " + data.name + "</td>";
    template += "<td><img src=" + data.sprites.front_default + "></td>";

    // Adds Pokemon type(s) to the data but keeps it within the same table cell
    types = "";
    types += "<td>type: "
    for (i = 0; i < length; i++) {
      types += data.types[i].type.name;
      // Adds comma if there is more than one type
      if (i < length - 1) {
        types += ", "
      }
    }
    types += "</td>"

    // Pushes generated markup and data to the DOM
    document.getElementById("data").innerHTML = template + types;
    
  } catch (error) {
    console.log(error)
    var template = "";
    template += "<td>404 ERROR NOT FOUND</td>";
    document.getElementById("data").innerHTML = template;
  }
}
