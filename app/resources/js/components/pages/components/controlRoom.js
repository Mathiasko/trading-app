import { parseInt } from "lodash";
import React, { useRef } from "react";

const ControlRoom = ({ money, setMoney, buyBTC, sellBTC }) => {
    const number = useRef(null);
    return (
        <div>
            <div className="flex">
                <button
                    onClick={() => setMoney(10000)}
                    className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                >
                    Add money
                </button>
                <div className="pl-5">
                    <p>Current money:</p>
                    <p>{money ? money : "No money ;("}</p>
                </div>
            </div>
            <div className="flex mt-10">
                <div>
                    <p>Buy BTC:</p>
                    <input ref={number} type="number" />
                    <br />
                    <button
                        className="mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 hover:border-blue rounded"
                        onClick={() => {
                            buyBTC(parseInt(number.current.value));
                            
                        }}
                    >
                        BUY!
                    </button>

                    <p className="mt-5">Sell BTC:</p>
                    <button
                        className="mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 hover:border-blue rounded"
                        onClick={() => sellBTC()}
                    >
                        SELL!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ControlRoom;
