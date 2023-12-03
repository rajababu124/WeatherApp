import { useEffect, useState } from "react";
import "./App.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";

import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "363270bc064723544c6d53c55b1398e0";
  const formattedNumber = (number) => {
    return Number(number - 273.15).toFixed(2);
  };
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );

        setWeather(response.data.main);
        setError(null);
      } catch (err) {
        setWeather(null);
        setError("City not found !!");
      }
    };
    getWeather();
  }, [city, apiKey]);

  return (
    <>
      <div className="container bg-white  shadow-2xl px-20 py-5 rounded mx-auto">
        <div className="input">
          <input
            type="search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='border-b-2 border-w-1 border-gray-400 rounded p-2  text-gray-700 focus:border-gray-900 ease-in duration-300  focus:outline-none"
            '
            placeholder="Search by city..."
          />
        </div>
        {error ? (
          <h2 className=" text-2xl px-5 py-10"> {error} </h2>
        ) : weather ? (
          <div className="content  my-5">
            <br />
            <div className="location text-3xl  mb-5 flex items-center justify-center">
             <div className="location text-3xl mr-5 mb-5 flex items-center justify-center">
             <h2>
                <FaLocationDot />
              </h2>
              <h2> {city}</h2>
             </div>
          <div className="location text-3xl mb-5 flex items-center justify-center">
          <h2 className="text-2xl flex items-center justify-center ">
              {/* <IoIosCloud /> */}
               {formattedNumber(weather.temp)} °C{" "}
            </h2>
          </div>
            </div>
            <hr className="" />
            <div className="location   flex items-left justify-center">
              <h2 >Min: {formattedNumber(weather.temp_min)} °C <p className=""> </p> </h2>
              <h2 className="mx-4">|</h2>
              <h2>  Max: {formattedNumber(weather.temp_max)} °C</h2>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
