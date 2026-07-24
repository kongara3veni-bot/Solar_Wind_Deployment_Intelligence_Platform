import React, { useState } from "react";
import API from "../api";

function Prediction() {

    const [formData, setFormData] = useState({
        temperature: "",
        wind_speed: "",
        humidity: "",
        rainfall: ""
    });

    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handlePredict = async () => {

        try {

            const response = await API.get(
                "/prediction/predict",
                {
                    params: formData
                }
            );

            setResult(response.data.prediction);

        } catch(error) {

            console.log(error);
            setResult("Prediction failed");

        }
    };


    return (
        <div>

            <h1>
                Solar Wind Prediction
            </h1>


            <input
                name="temperature"
                placeholder="Temperature"
                onChange={handleChange}
            />


            <input
                name="wind_speed"
                placeholder="Wind Speed"
                onChange={handleChange}
            />


            <input
                name="humidity"
                placeholder="Humidity"
                onChange={handleChange}
            />


            <input
                name="rainfall"
                placeholder="Rainfall"
                onChange={handleChange}
            />


            <button onClick={handlePredict}>
                Predict
            </button>


            <h2>
                Result: {result}
            </h2>

        </div>
    );
}

export default Prediction;