function getWeather(){
    var City = document.getElementById('cityName').value;
    var weatherurl = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + City + "&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";
    fetch(weatherurl)
    .then((res) => res.json())
    .then(apicall => {
        var element = `
                    <div class="card" style="width:50%;height:420px;margin-left:25%;margin-top:2%;clear:right">
                        <div class="card-body">
                            <h5 class="card-title">${apicall.city.name}</h5>
                            <img src="http://openweathermap.org/img/wn/${apicall.list[0].weather[0].icon}@2x.png" alt="weather icon" class="w-icon"/>
                            <h5 class="temp">Min:<span id="mincss">${apicall.list[0].temp.min}&deg;<sup>c</sup></span>&nbsp &nbsp &nbspMax:<span id="mincss">${apicall.list[0].temp.max}&deg;<sup>c</sup></span></h5>
                            <div class="block-one">
                            <p><i class="fas fa-sun"></i>Sunrise: ${window.moment(apicall.list[0].sunrise*1000).format('HH:mm a')}</p>
                            <p><i class="fas fa-cloud-sun"></i>Sunset: ${window.moment(apicall.list[0].sunset*1000).format('HH:mm a')}</p>
                            <p><i class="fas fa-temperature-high"></i> Humidity: ${apicall.list[0].humidity}</p>
                            <p><i class="fas fa-smog"></i> Weather: ${apicall.list[0].weather[0].main}</p>
                            </div>
                            <div class="block-two">
                            <p>&nbsp&nbsp&nbsp<i class="fas fa-water"></i> Pressure : ${apicall.list[0].pressure}mm</p>
                            <p>&nbsp&nbsp&nbsp<i class="fas fa-wind"></i> Wind Speed : ${apicall.list[0].speed}m/s</p>
                            <p>&nbsp&nbsp&nbsp<i class="fas fa-cloud-moon"></i> Clouds : ${apicall.list[0].clouds} per/sqrs</p>
                            <p>&nbsp&nbsp&nbsp<i class="fas fa-cloud-rain"></i> Rain : ${apicall.list[0].rain} mm/Hg</p>
                            </div>
                        </div>
                    </div>
                    <div id="other-days" data-aos="zoom-in">
                    <h1>Next 4 Days weather forecast </h1>
                    </div>
                    <div class="card col-md-3" data-aos="fade-right" style="width:20%;height:300px;float:left;margin-left:5%;margin-top:2%">
                        <div class="card-body">
                            <h3>DAY - 1</h3>
                            <img src="http://openweathermap.org/img/wn/${apicall.list[1].weather[0].icon}@2x.png" alt="weather icon" class="w-icon"/>
                            <h5 class="temp">Min:${apicall.list[1].temp.min}&nbsp &nbsp &nbspMax:${apicall.list[1].temp.max}</h5>
                            <p><i class="fas fa-temperature-high"></i> Humidity: ${apicall.list[1].humidity}</p>
                            <p><i class="fas fa-smog"></i> Weather: ${apicall.list[1].weather[0].main}</p>
                            <p><i class="fas fa-sun"></i>
                            Overview: ${apicall.list[0].weather[0].description}</p>
                        </div>
                    </div>
                    <div class="card col-md-3" data-aos="fade-right" style="width:20%;height:300px;float:left;margin-left:2%;margin-top:2%">
                        <div class="card-body">
                            <h3>DAY - 2</h3>
                            <img src="http://openweathermap.org/img/wn/${apicall.list[2].weather[0].icon}@2x.png" alt="weather icon" class="w-icon"/>
                            <h5 class="temp">Min:${apicall.list[2].temp.min}&nbsp &nbsp &nbspMax:${apicall.list[2].temp.max}</h5>
                            <p><i class="fas fa-temperature-high"></i>Humidity: ${apicall.list[2].humidity}</p>
                            <p><i class="fas fa-smog"></i>Weather: ${apicall.list[2].weather[0].main}</p>
                            <p><i class="fas fa-sun"></i> Overview: ${apicall.list[0].weather[0].description}</p>
                        </div>
                    </div>
                    <div class="card col-md-3" data-aos="fade-left" style="width:20%;height:300px;float:left;margin-left:2%;margin-top:2%">
                        <div class="card-body">
                            <h3>DAY - 3</h3>
                            <img src="http://openweathermap.org/img/wn/${apicall.list[3].weather[0].icon}@2x.png" alt="weather icon" class="w-icon"/>
                            <h5 class="temp">Min:${apicall.list[3].temp.min}&nbsp &nbsp &nbspMax:${apicall.list[3].temp.max}</h5>
                            <p><i class="fas fa-temperature-high"></i>Humidity: ${apicall.list[3].humidity}</p>
                            <p><i class="fas fa-smog"></i>Weather: ${apicall.list[3].weather[0].main}</p>
                            <p><i class="fas fa-sun"></i> Overview: ${apicall.list[0].weather[0].description}</p>
                        </div>
                    </div>
                    <div class="card col-md-3" data-aos="fade-left" style="width:20%;height:300px;float:left;margin-left:2%;margin-top:2%">
                        <div class="card-body">
                            <h3>DAY - 4</h3>
                            <img src="http://openweathermap.org/img/wn/${apicall.list[4].weather[0].icon}@2x.png" alt="weather icon" class="w-icon"/>
                            <h5 class="temp">Min:${apicall.list[4].temp.min}&nbsp &nbsp &nbspMax:${apicall.list[4].temp.max}</h5>
                            <p><i class="fas fa-temperature-high"></i>Humidity: ${apicall.list[4].humidity}</p>
                            <p><i class="fas fa-smog"></i>Weather: ${apicall.list[4].weather[0].main}</p>
                            <p><i class="fas fa-sun"></i> Overview: ${apicall.list[0].weather[0].description}</p>
                        </div>
                        <footer data-aos="zoom-in">
                        <h5 style="text-align:center; color:#fff; padding-top: 10px">Still not found your location ? Write Us </h5>
                        <div id="footer-form">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Location</label>
                            </div>
                        </div>
                        <div id="submit-btn">
                            <button type="button" class="btn btn-primary">Submit</button>
                            <h5 style="margin:10px 0">&copy; 2021 License Free.</h5>
                        </div>
                    </footer>
                    </div>`
                //$('#display').append(element);
                document.getElementById('display').innerHTML= `${element}`
    });
}