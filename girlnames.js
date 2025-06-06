async function init(){
  
  //Challenge 2: Add the URL link
  let link = "https://data.cityofnewyork.us/resource/25th-nujf.json";
  info = await fetch(link);
  data = await info.json();
  //alert(1)
  
  
  }

  function searchGirlnames(){
    
    let output = document.getElementById("output");
    let searchGirlnames = document.getElementById("namesearch");
    let build = "";
  //alert(searchGirlnames.value)
 
 
    for(let i=0; i<data.length; i++){
      let girlnames = data[i]
      output.innerHTML += girlnames.gndr;
        if(girlnames.gndr == "FEMALE" && girlnames.nm.startsWith(searchGirlnames.value)){
      
          build += `<div class=card>`;
          build +=`<h3>${girlnames.brth_yr}</h3>`;
          build += `<h2>${girlnames.ethcty}</h2>`;
          build+= `<h2>${girlnames.nm}</h2>`;
          build +=`</div>`
        }
      }
    output.innerHTML = build;

  }
