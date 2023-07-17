getData();

async function getData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/magikarp')
  const data = await response.json();
  length = data.types.length;
  var template = "";
  template += "<tr>";
  template += "<td>" + data.name + "</td>";
  template += "<td><img src=" + data.sprites.front_default + "></td>";
  for (i=0;i<length;i++)
  {          
    template += "<td>" + data.types[i].type.name + "</td>";
  }
  document.getElementById("data").innerHTML = template;
}
