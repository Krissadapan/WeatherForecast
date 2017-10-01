$(function () {
    
        $("#loaddata").click(function (e) {
            e.preventDefault();
            $.get("data.json", function (data) {
                console.log(data);
                $.each(data, function (index, item) {     //การใช้ each เป็นฟังก์ชั่นของ jq ajex 
                    var row = "<h3>" + item.ofocode + ":" + item.passcode + ":" + item.location.lag + "," + item.location.lng + "</h3>";
                    $("#datapanel").append(row);
                });
            });
        });
    
        $("#loadwebapi").click(function (e) {
            e.preventDefault();
    
            $("#wpanel").empty();
            var city = $("#cityName").val();
            var urlAPI = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=bae431f8aceea6df5af1a329aaf183f6";
            $.get(urlAPI, function (data) {
                console.log(data);
                var row1 = "<h3>"+data.name+"<br>"+"Temperature: " + data.main.temp/10 + "<br>Humidity: " + data.main.humidity + "<br>Weather: " + data.weather[0].description + "<h3>";
                $("#wpanel").append(row1);
            });
        });
    });