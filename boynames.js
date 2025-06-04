async function init(){
  
  //Challenge 2: Add the URL link
  let link = "https://data.cityofnewyork.us/resource/25th-nujf.json";
  info = await fetch(link);
  data = await info.json();
  
  
  }

  function searchBoynames(){

    let output = document.getElementById("output");
    let searchBoynames = document.getElementById("namesearch");
    let build = "";

 
 
    for(let i=0; i<data.length; i++){
      let boynames = data[i]
        if(boynames.gndr == "MALE" && boynames.nm.startsWith(searchBoynames.value)){
      
          build += `<div class=card>`;
          build +=`<h3>${boynames.brth_yr}</h3>`;
          build += `<h2>${boynames.ethcty}</h2>`;
          build+= `<h2>${boynames.nm}</h2>`;
          build +=`</div>`
        }
      }
    output.innerHTML = build;

  }
