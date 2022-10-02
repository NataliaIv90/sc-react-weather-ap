export default function Main(props) {
  let city = props.city;
  let apiKey = "428ced130c91866c290ad7f8a9bb8995";
  let units = "metric";
  let apiUrl = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  let [weatherData, setWeatherData] = useState("");

  function getData(responce) {
    setWeatherData({
      temperature: responce.data.main.temp,
      windSpeed: responce.data.wind.speed,
      hymidity: responce.data.main.hymidity,
      clouds: responce.data.clouds.all,
      icon: `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`,
      time: responce.data.dt,
      city: responce.data.city,
    });
    console.log(responce.data);
  }
}
// axios.get(apiUrl).then(getData);
