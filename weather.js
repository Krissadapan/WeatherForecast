$(function () {
    $("#getWeather").click(function (e) {
        e.preventDefault();
        $("#forecastbox").empty();
        var city = $("#city").val();
        var d = new Date();
        var date = d.toDateString();
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ce8589a1f966ddfcbcb6d0717fb1da2e";

        $.get(urlApi, function (data) {
            var weatherC = data.weather[0].main;
            if (weatherC == "Clouds") {
                var weatherS = "cloudy1.png";
            }
            if (weatherC == "Rain") {
                var weatherS = "Rain1.png";
            }
            if (weatherC == "Clear") {
                var weatherS = "clear1.png";
            }
            if (weatherC == "Thunderstorm") {
                var weatherS = "Thunderstorm1.png";
            }
            if (weatherC == "Mist") {
                var weatherS = "mist1.png";
            }
            console.log(data);

            var row1 = "<br>  <center> <FONT SIZE=15 color='white'>" + data.name + "</FONT>  <br>" +                                        //CITY

                "<FONT SIZE=4 color='white'>" + date + "</FONT>" +                                                     //DATE

                "<table><tr><td width = '100%'><p id = 'text'><FONT SIZE=6 color='white'>" + data.weather[0].description + "</p></td></tr></table>" +   //WEATHER

                "<table><tr><td><img class = 'font' src='" + weatherS + "' alt='Cinque Terre' ></td>" +                               //Image

                "<td><FONT SIZE=12 color='white'>" + ((data.main.temp) / 10).toFixed(2) + "</FONT><FONT  SIZE=4 color='white'> °C </FONT></td></tr></table><br>" +            //Celsius

                "<table><tr><td><FONT SIZE=5 color='white'> Pressure&ensp;:&ensp;" + data.main.pressure +

                " hPa " + " &emsp;Humidity&ensp;:&ensp;" + data.main.humidity + " % &emsp; Wind&ensp;:&ensp;" + data.wind.speed + " meter/sec</FONT></td></tr><table> <br></center>";


            $("#forecastbox").append(row1);
        });
    });
});