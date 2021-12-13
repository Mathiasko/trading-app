import axios from "axios";
import React, { useEffect, useState } from "react";
import drawGraph from "../../../helper/drawGraph";

const graphs = (setCurrentVal) => {
    const [loading, setLoading] = useState(true);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/getall")
            .then(({ data }) => {
                setCurrencies(data);
            })
            .catch((error) => console.error);
    }, []);

    useEffect(() => {
        let val = {};
        currencies
            ? currencies.forEach((currency) => {
                  val = Object.defineProperty(val, currency.symbol, {
                      value: currency.values[currency.values.length - 1],
                      writable: true,
                  });
              })
            : [];
            setCurrentVal(val);
    }, [currencies]);

    return (
        <div>
            {currencies
                ? currencies.map((currency) => (
                      <div
                          key={currency.symbol}
                          className="border rounded-lg border-black mb-5 pb-24"
                      >
                          {drawGraph(currency)}
                      </div>
                  ))
                : ""}
        </div>
    );
};

export default graphs;
