let data;

async function init(){

  let link = "https://data.cityofnewyork.us/resource/25th-nujf.json";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function accidentsByBorough(){
  
  let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z= 0;
  
   for (let i = 0;i<data.length;i++){
    let names = data[i] 
     if(names.nm.startsWith("A")){
         a+=1;
     }else if(names.nm.startsWith("B")){
         b+=1;
     }else if(names.nm.startsWith("C")){
         c+=1;
     }else if(names.nm.startsWith("D")){
         d+=1;
     }else if(names.nm.startsWith("E")){
         e+=1;
     }else if(names.nm.startsWith("F")){
         f+=1;
     }else if(names.nm.startsWith("G")){
         g+=1;
     }else if(names.nm.startsWith("H")){
         h+=1;
     }else if(names.nm.startsWith("I")){
         i+=1;
     }else if(names.nm.startsWith("J")){
         j+=1;
      }else if(names.nm.startsWith("K")){
         k+=1;
      }else if(names.nm.startsWith("L")){
         l+=1;
      }else if(names.nm.startsWith("M")){
         m+=1;
      }else if(names.nm.startsWith("N")){
         n+=1;
      }else if(names.nm.startsWith("O")){
         o+=1;
      }else if(names.nm.startsWith("P")){
         p+=1;
      }else if(names.nm.startsWith("Q")){
         q+=1;
      }else if(names.nm.startsWith("R")){
         r+=1;
      }else if(names.nm.startsWith("S")){
         s+=1;
      }else if(names.nm.startsWith("T")){
         t+=1;
      }else if(names.nm.startsWith("U")){
         u+=1;
      }else if(names.nm.startsWith("V")){
         v+=1;
      }else if(names.nm.startsWith("W")){
         w+=1;
      }else if(names.nm.startsWith("X")){
         x+=1;
      }else if(names.nm.startsWith("Y")){
         y+=1;
      }else if(names.nm.startsWith("Z")){
         z+=1;
      }
    }
   let chartdata = [
           ["A", a],
           ["B", b],
           ["C", c],
           ["D", d],
           ["E", e],
           ["F", f],
           ["G", g],
           ["H", h],
           ["I", i],
           ["J", j],
           ["K", k],
           ["L", l],
           ["M", m],
           ["N", n],
           ["O", o],
           ["P", p],
           ["Q", q],
           ["R", r],
           ["S", s],
           ["T", t],
           ["U", u],
           ["V", v],
           ["W", w],
           ["X", x],
           ["Y", y],
           ["Z", z]
  ]
  
   let chartType = document.getElementById("chartType").value;
  
   displayChart(chartdata,"chart",chartType);
  
}



function accidentsByVehicle(){
  
  let s = 0, w = 0, o = 0;
  for (let i = 0;i<data.length;i++){
    let accidents = data[i] 
     if(accidents.vehicle_type_code1 == "Sedan"){
         s+=1;
     }
     else if(accidents.vehicle_type_code1 == "Station Wagon/Sport Utility Vehicle"){
      w+=1;
     }else{
      o+=1;
     }
    }
     let chartdata = [
          ["Sedan", s],
          ["Station Wagon/Sport Utility Vehicle", w],
          ["Other", o] 
      ]
    console.log(chartdata);
     let chartType = document.getElementById("chartType").value;

     displayChart(chartdata,"chart",chartType);
  }
  
//Discussion 5: Using concepts of modular programming, create a function that accepts the data, an id to the div to display the chart and the type of chart
function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
)}