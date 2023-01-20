function temp(){
    var x=document.getElementById("city").value;
    var key=`fa1d5e8d1018554d3709e21352a68e26`;
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${key}`;
    fetch(url)
    .then((abc)=>abc.json())
    .then(abc=>{
        document.getElementById("cityname").innerHTML=abc.name;
        document.getElementById("temp").innerHTML=abc.main.temp;
    })
    
    }