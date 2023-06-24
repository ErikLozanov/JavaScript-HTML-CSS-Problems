 function attachEvents() {
    let weatherBtnEl = document.getElementById('submit');

    weatherBtnEl.addEventListener('click',async ()=>{
        let location = document.getElementById('location').value;

        let url = 'http://localhost:3030/jsonstore/forecaster/locations';

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        let isFound = data.find(x=> x.name == location);
        let forecastEl = document.getElementById('forecast');

        if(!isFound || response.status !== 200) {
            forecastEl.style.display = 'block';
            // forecastEl.querySelector('#upcoming').remove();

            forecastEl.querySelector('#current').querySelector('.label').textContent = 'Error';
            return;
        }

        let code = isFound.code;

        let url2 = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        console.log(data2);


        let url3 = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        let response3 = await fetch(url3);
        let data3 = await response3.json();
        

        let currentForecastEl = document.getElementById('current');
        let upcomingForecastEl = document.getElementById('upcoming');
        forecastEl.style.display = 'block';

        // currentForecastEl.querySelector('.forecasts').remove()
        // upcomingForecastEl.querySelector('.forecast-info').remove();
        currentForecastEl.innerHTML = '<div class="label">Current conditions</div>';
        upcomingForecastEl.innerHTML = '<div class="label">Three-day forecast</div>';

        let forecastsDiv = document.createElement('div');
        forecastsDiv.classList.add('forecasts');
        let conditionSymbol = document.createElement('span');
        conditionSymbol.classList.add('condition','symbol');
        if(data2.forecast.condition == 'Sunny') {
            conditionSymbol.textContent = '☀';
        } else if (data2.forecast.condition == 'Partly sunny'){
            conditionSymbol.textContent = '⛅';

        }else if (data2.forecast.condition == 'Overcast') {
            conditionSymbol.textContent = '☁';

        }else if (data2.forecast.condition == 'Rain') {
            conditionSymbol.textContent = '☂';

        }

        let conditionSpan = document.createElement('span');
        conditionSpan.classList.add('condition');
        let placeSpan = document.createElement('span');
        placeSpan.classList.add('forecast-data');
        placeSpan.textContent = data2.name;
        let degreesSpan = document.createElement('span');
        degreesSpan.classList.add('forecast-data');
        degreesSpan.textContent = `${data2.forecast.low}°/${data2.forecast.high}°`;
        let weatherSpan =document.createElement('span');
        weatherSpan.classList.add('forecast-data');
        weatherSpan.textContent = data2.forecast.condition;

        conditionSpan.appendChild(placeSpan);
        conditionSpan.appendChild(degreesSpan);
        conditionSpan.appendChild(weatherSpan);

        forecastsDiv.appendChild(conditionSymbol);
        forecastsDiv.appendChild(conditionSpan);

        currentForecastEl.appendChild(forecastsDiv);

        let forecastInfoEl = document.createElement('div');
        forecastInfoEl.classList.add('forecast-info');
        for(let el of data3.forecast) {

        let upcomingSpan = document.createElement('span');
        upcomingSpan.classList.add('upcoming');
        let weatherSymbol = document.createElement('span');
        weatherSymbol.classList.add('symbol');
        if(el.condition == 'Sunny') {
            weatherSymbol.textContent = '☀';
        } else if (el.condition == 'Partly sunny'){
            weatherSymbol.textContent = '⛅';

        }else if (el.condition == 'Overcast') {
            weatherSymbol.textContent = '☁';

        }else if (el.condition == 'Rain') {
            weatherSymbol.textContent = '☂';

        }
        
        let weatherTemp = document.createElement('span');
        weatherTemp.classList.add('forecast-data');
        weatherTemp.textContent = `${el.low}°/${el.high}°`;
        let conditionWeather = document.createElement('span');
        conditionWeather.classList.add('forecast-data');
        conditionWeather.textContent = el.condition;

        upcomingSpan.appendChild(weatherSymbol);
        upcomingSpan.appendChild(weatherTemp);
        upcomingSpan.appendChild(conditionWeather);

        forecastInfoEl.appendChild(upcomingSpan);
    }

    upcomingForecastEl.appendChild(forecastInfoEl);
    })
}

attachEvents();