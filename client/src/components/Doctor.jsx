import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "./";

const Doctor = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [response, setResponse] = useState("");

  const handleSymptomSelect = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSubmit = async () => {
    try {
      const prompt = `User selected symptoms: ${selectedSymptoms.join(", ")}\n\nDiagnose the possible sicknesses
       and provide maximum 2 additional symptoms for each diagnosis
       and recommend treatmant ways but if doctor help is needed recommend
       doctor visiting a doctor. (You have 75 words and don't go for too
       much in details and don't use too complex terminologies. 
       The response should be in format: Possible sickness: {Sickness Name}:
       \n Symptoms: {Symptoms of the sickness} \n Treatment: {Treatment in 10 
        words maximum}). Add 3 newlines after treatment`;
      
      const serverResponse = await axios.post("http://localhost:8080/chat", {
        userPrompt: prompt,
      });
  
      setResponse(serverResponse.data.doctorResponse);
    } catch (error) {
      console.error("Error fetching response from server:", error);
    }
  };
  
  

  return (
    <>
      <Navbar/>

      <div className="mt-20">
        <h1>Doctor Chat</h1>

        <div>
          <h2>Select Symptoms:</h2>
          <div className="flex flex-col">
            <label>
              <input
                type="checkbox"
                value="Fever"
                onChange={() => handleSymptomSelect("Fever")}
              />
              Fever
            </label>
            <label>
              <input
                type="checkbox"
                value="Headache"
                onChange={() => handleSymptomSelect("Headache")}
              />
              Headache
            </label>
            <label>
              <input
                type="checkbox"
                value="Temperature"
                onChange={() => handleSymptomSelect("Temperature")}
              />
              Temperature
            </label>
            <label>
              <input
                type="checkbox"
                value="Stomach Cramps"
                onChange={() => handleSymptomSelect("Stomach Cramps")}
              />
              Stomach Cramps
            </label>
            <label>
              <input
                type="checkbox"
                value="Leg pain"
                onChange={() => handleSymptomSelect("Leg pain")}
              />
              Leg pain
            </label>
            <label>
              <input
                type="checkbox"
                value="Muscle aches"
                onChange={() => handleSymptomSelect("Muscle aches")}
              />
              Muscle aches
            </label>
          </div>
          {/* Add more symptoms*/}
        </div>
      
        <button onClick={handleSubmit} className="w-1/6 bg-indigo-100">Get Diagnosis</button>

        {response && (
          <div>
            <h2>Doctor's Response:</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: response.replace(/\\n/g, "<br />"),
              }}
            />
          </div>
        )}

      </div>
    </>
  );
};

export default Doctor;
