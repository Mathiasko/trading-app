import React from "react";

const drawGraph = (currency) => {
    return (
        <div>
            <h1 key={currency ? currency.symbol : null}>
            {currency ? currency.symbol : null}:
                {currency
                    ? Math.round(
                          currency.values[currency.values.length - 1] * 100
                      ) / 100
                    : null}
            </h1>
            <div className="flex">
                {currency
                    ? currency.values.map((number) => (
                          <div
                              key={number}
                              className="w-1 h-1 bg-green-800 rounded-full relative"
                              style={{ bottom: number - 100 + "px" }}
                          />
                      ))
                    : "null"}
            </div>
        </div>
    );
};

export default drawGraph;
