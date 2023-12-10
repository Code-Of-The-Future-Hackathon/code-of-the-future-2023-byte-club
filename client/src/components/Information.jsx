import React, { useState } from 'react';

const Information = () => {
    const informationList = [
        "Displays a map",
        "Diagnoses you",
        "Increases your mood"
    ];

    const [information, setInformation] = useState(informationList[0]);
    const [activeButton, setActiveButton] = useState(0);

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
                            activeButton === 0 ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100 hover:text-black'
                        }`}
                    >
                        Map
                    </button>
                    <button
                        onClick={() => toggleInformation(1)}
                        className={`border-2 w-[20rem] text-xl ${
                            activeButton === 1 ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100 hover:text-black'
                        }`}
                    >
                        AI Self Doctor
                    </button>
                    <button
                        onClick={() => toggleInformation(2)}
                        className={`border-2 rounded-b-lg w-[20rem] text-xl ${
                            activeButton === 2 ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100 hover:text-black'
                        }`}
                    >
                        Mood Increasor
                    </button>
                </div>

                <div className="bg-white border-2 shadow-md rounded-lg justify-center items-center flex px-48 text-xl w-1/3">
                    <p>{information}</p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Information;
