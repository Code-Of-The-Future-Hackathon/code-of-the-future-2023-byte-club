import React, { useState } from 'react';

const Information = () => {
    const informationList = [
        "Displays a map",
        "Diagnoses you",
        "Increases your mood"
    ];

    const [information, setInformation] = useState("");
    const [activeButton, setActiveButton] = useState(null);

    const toggleInformation = (index) => {
        setInformation(informationList[index]);
        setActiveButton(index);
    };

    return (
        <>
            <hr />
            <div className="flex flex-row-reverse mx-auto justify-center gap-x-[26rem] pb-20 mt-32">
                <div className="flex flex-col">
                    <button
                        onClick={() => toggleInformation(0)}
                        className={`border-2 rounded-t-lg w-[20rem] text-xl ${
                            activeButton === 0 ? 'bg-secondary text-white' : 'hover:bg-gray-800 hover:text-gray-200'
                        }`}
                    >
                        Map
                    </button>
                    <button
                        onClick={() => toggleInformation(1)}
                        className={`border-2 w-[20rem] text-xl ${
                            activeButton === 1 ? 'bg-secondary text-white' : 'hover:bg-gray-800 hover:text-gray-200'
                        }`}
                    >
                        AI Self Doctor
                    </button>
                    <button
                        onClick={() => toggleInformation(2)}
                        className={`border-2 rounded-b-lg w-[20rem] text-xl ${
                            activeButton === 2 ? 'bg-secondary text-white' : 'hover:bg-gray-800 hover:text-gray-200'
                        }`}
                    >
                        Mood Increasor
                    </button>
                </div>

                <div className="bg-white border-2 shadow-xl rounded-lg justify-center items-center flex px-48 text-xl w-1/3">
                    <p>{information}</p>
                </div>
            </div>
        </>
    )
}

export default Information;
