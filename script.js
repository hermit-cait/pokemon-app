getData();

async function getData() {
  try {
    // Generates a URL for a random Pokemon from the first three generations
    randomPokemon = Math.floor(Math.random() * 387) + 1;
    randomURL = "https://pokeapi.co/api/v2/pokemon/"
    randomURL += randomPokemon;
    const response = await fetch(randomURL)
    const data = await response.json();

    // Creates markup to display Pokemon data in the DOM
    length = data.types.length;
    template = "";
    template += "<tr><td>name: " + data.name + "</td></tr>";
    template += "<tr><td><img src=" + data.sprites.front_default + "></td></tr>";

    // Adds Pokemon type(s) to the data but keeps it within the same table cell
    types = "";
    types += "<tr><td>type: "
    for (i = 0; i < length; i++) {
      types += data.types[i].type.name;
      // Adds comma if there is more than one type
      if (i < length - 1) {
        types += ", "
      };
    };
    types += "</td></tr>"
    template += types;
    template += "<tr><td>height: " + Math.round(data.height * 10) / 100 + "m</td></tr>";
    template += "<tr><td>weight: " + Math.round(data.weight * 10) / 100 + "kg</td></tr>";
    // Pushes generated markup and data to the DOM
    document.getElementById("data").innerHTML = template;

    const typeColours = {
      "normal": "#d6d6ca",
      "water": "#628ae5",
      "fire": "#ff6849",
      "grass": "#5ccc3e",
      "electric": "#ffd759",
      "ground": "#7c5f53",
      "psychic": "#ef7dc3",
      "flying": "#aec1ea",
      "fighting": "#b87e64",
      "bug": "#b0e455",
      "rock": "#b4a29a",
      "poison": "#a35bcb",
      "fairy": "#f2b9e3",
      "ice": "#e4ebf8",
      "steel": "#96a0b8",
      "dark": "#6d657c",
      "ghost": "#c2b7cf",
      "dragon": "#8765ff",
    };
    const typeArray = Object.entries(typeColours);
    //Selects background colour according to Pokemon type
    function changeBackground() {  
      for (x = 0; x < typeArray.length; x++) {
        if (typeArray[x][0] == data.types[0].type.name) {
          selectedColour = typeArray[x][1];
        };       
      };
      document.body.style.backgroundColor = selectedColour;
      const button = document.getElementById("button");
      if (selectedColour == "#e4ebf8" || selectedColour == "#d6d6ca") {
        button.style.backgroundColor = "rgba(0,0,0,0.1)";
        button.addEventListener("mouseover", function() {
          button.style.backgroundColor = "rgba(0,0,0,0.2)";
        });
        button.addEventListener("mouseleave", function() {
          button.style.backgroundColor = "rgba(0,0,0,0.1)";
        });
      } else {
        button.style.backgroundColor = "rgba(255,255,255,0.3)";
        button.addEventListener("mouseover", function() {
          button.style.backgroundColor = "rgba(255,255,255,0.5)";
        });
        button.addEventListener("mouseleave", function() {
          button.style.backgroundColor = "rgba(255,255,255,0.3)";
        });
      };
    };
    changeBackground(); 
      
  //Throws error if Pokemon data cannot be retrieved
  } catch (error) {
    console.log(error)
    let template = "";
    template += "<td>404 ERROR NOT FOUND</td>";
    document.getElementById("data").innerHTML = template;
  };
};

const info = document.getElementById("info");
const infoExpanded = document.getElementById("info-expanded");

function getInfo() {  
  if (infoExpanded.style.display == "none") {
    infoExpanded.style.display = "block";
  } else {
    infoExpanded.style.display = "none";
  };
};

function closeInfo() { 
  infoExpanded.style.display = "none";
};
