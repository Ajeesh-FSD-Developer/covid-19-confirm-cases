
var res =fetch("https://data.covid19india.org/v4/min/data.min.json");
res.then((data)=>data.json()).then((data1)=>{
for(var i in data1){
    console.log(i, data1[i].total.confirmed);

    var div = document.createElement("div");
    div.innerHTML = `<p>${i}</p>

   <h4>${data1[i].total.confirmed}</h4> `
   document.body.append(div);
}
 });
