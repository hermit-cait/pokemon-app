getData();

  async function getData(){
       const response= await fetch('https://pokeapi.co/api/v2/pokemon/magikarp')
       console.log(response);
       const data= await response.json();
       length=data.types.length;
       var temp="";
       temp+="<tr>";
       temp+="<td>"+data.name+"</td>";
       temp+="<td><img src="+data.sprites.front_default+"></td>";
       for(i=0;i<length;i++)
       {          
         temp+="<td>"+data.types[i].type.name+"</td>";
       }

    document.getElementById("data").innerHTML=temp;
     }