function onClick()
    {
        var location = document.getElementById("location").value;                
        var weather_data =  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=18f3f8149007befb7c68afdce646f455");
        
        weather_data.then((response, )=>{
            console.log("api response");
            return response.json()
        })
        .then(function(data){
            console.log(data)
            var temperature = data.main["temp"]
            var humidity = data.main["humidity"]
            document.querySelector("#place").innerHTML = "in " + location;
            document.querySelector("#humidity").innerHTML = humidity;
            if(document.getElementById("celsius").checked){
                document.getElementById("metric").innerHTML = "&deg; Celsius"
                document.querySelector("#temperature").innerHTML = temperature;
            }
            else{
                document.getElementById("metric").innerHTML = "&deg; Farenheit"
                document.querySelector("#temperature").innerHTML = temperature * 9/5 + 32;
            }
            
            
        })
        
    }