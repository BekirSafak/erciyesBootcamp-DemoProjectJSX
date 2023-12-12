import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TiWeatherSunny, TiWeatherPartlySunny, TiWeatherShower, TiWeatherCloudy } from "react-icons/ti";

function Weather() {
    let [weatherData, setWeatherData] = useState(null)
    let [locationWeather, setLocationWeather] = useState('Kayseri')

    let locationWeatherChange = (e) => {
        setLocationWeather(e.target.value)
        // Refill The Input Start
        let fillInput = setTimeout(() => {
            if (e.target.value === '') {
                setLocationWeather('Kayseri')
                console.log("Worked")
            } else {
                clearTimeout(fillInput)
                console.log('Stoped')
            }
        }, 10000);
        // Refill The Input End
    }

    // Weathear Status Translate Start
    const translateCondition = (conditionText) => {
        const conditionMap = {
            "Sunny": 'Güneşli',
            "Partly cloudy": 'Parçalı Bulutlu',
            "Cloudy": "Bulutlu",
            "Overcast": 'Çok Bulutlu',
            "Moderate rain": 'Yağmurlu',
            "Patchy rain possible": "Yer yer Yağmurlu",
            "Light freezing rain": "Karla Karışık Yağmur",
            "Snow": 'Karlı',
            "Heavy snow": "Yoğun Kar",
            "Moderate snow": "Orta Derece Kar",
            "Light snow": "Hafif Kar",
        };
        return conditionMap[conditionText] || conditionText;
    };
    // Weathear Status Translate End

    // Get Today Date "yyyy-MM-dd" Format Start
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('tr-TR', options);
    };
    // Get Today Date "yyyy-MM-dd" Format End

    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${locationWeather}&days=4&aqi=yes&alerts=yes`)
                setWeatherData(response.data)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }

        if (locationWeather) {
            fetchData();
        }
    }, [locationWeather])


    // Weather Dynamic Icons Start
    const [iconIndex, setIconIndex] = useState(0);
    const wheatherIcons = [
        <TiWeatherSunny size={40} className='text-purple-800'></TiWeatherSunny>,
        <TiWeatherPartlySunny size={40} className='text-purple-800'></TiWeatherPartlySunny>,
        <TiWeatherShower size={40} className='text-purple-800'></TiWeatherShower>,
        <TiWeatherCloudy size={40} className='text-purple-800'></TiWeatherCloudy>
    ]
    useEffect(() => {
        const changeWeatherIcons = setInterval(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % wheatherIcons.length);
        }, 800);

        return () => clearInterval(changeWeatherIcons);
    }, [wheatherIcons.length]);
    // Weather Dynamic Icons End

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12 text-center'>
            <h1 className='flex justify-center text-purple-800 font-bold text-2xl md:text-4xl items-center'><span className=''>{wheatherIcons[iconIndex]}</span>Hava Durumu</h1>
            {/* Weather Form Start */}
            <div className='max-w-[820px] text-center mx-auto my-4'>
                <label className="block">
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                        placeholder="Hava durumunu görmek istediğiniz şehri yazabilirsiniz..."
                        value={locationWeather}
                        onChange={locationWeatherChange}
                    />
                </label>
            </div>
            {/* Weather Form End */}

            {/* Weather Days Box Start */}
            {weatherData && (
                <div className='my-10'>
                    <div className='flex flex-col md:flex-row justify-between gap-10'>
                        {
                            weatherData.forecast.forecastday.map((day) => (
                                <div key={day.date} className='flex flex-col border shadow-lg rounded-lg w-full'>
                                    <h1 className='py-2 text-center text-purple-800 font-bold select-none border-t border-b rounded-t-lg'>{formatDate(day.date)}</h1>
                                    <img src={day.day.condition.icon} alt="img" className='w-full h-[200px] object-fill border-b' />
                                    <div className='py-2'>
                                        <p className=' text-gray-700 font-bold select-none text-sm xl:text-base'>{day.day.avgtemp_c}°C</p>
                                        <span className='text-sm text-purple-400 font-bold'>{translateCondition(day.day.condition.text)}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
            {/* Weather Days Box End */}
        </div>
    )
}

export default Weather