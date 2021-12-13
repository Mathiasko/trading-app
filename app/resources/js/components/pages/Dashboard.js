import axios from "axios";
import React, { useState } from "react";
import ControlRoom from "./components/controlRoom";
import graphs from "./components/graphs";
const Dashboard = () => {
    const [money, setMoney] = useState();
    const [wallet, setWallet] = useState({ BTC: 0, GBH: 0 });
    const [currentVal, setCurrentVal] = useState({});

    const buyBTC = (amount) => {
        if (money >= amount) {
            setWallet({ ...wallet, BTC: wallet.BTC + amount / currentVal.BTC });
            setMoney(money - amount);
            createTransaction(amount);
        } else {
            alert("Not enough $$$");
        }
    };

    const sellBTC = () => {
        setMoney(Math.round((money + wallet.BTC * currentVal.BTC) * 100) / 100);
        console.log("money", money);
        console.log("wallet.BTC", wallet.BTC);
        console.log("currentVal", currentVal);

        setWallet({ ...wallet, BTC: 0 });

        alert(
            `You sold ${Math.round(wallet.BTC * 100) / 100}BTC for ${
                Math.round(wallet.BTC * currentVal.BTC * 100) / 100
            }$`
        );
    };

    const createTransaction = (ammount) =>{
        axios.post('http://localhost:3000/transaction', {userId:1, currency:'BTC', ammount})
        .then(console.log)
        .catch(console.log)
    }

    return (
        <div className="flex items-start">
            <div className="mr-10">
                <div className="flex relative">{graphs(setCurrentVal)}</div>
            </div>
            <div className="">
                <ControlRoom
                    money={money}
                    setMoney={setMoney}
                    buyBTC={buyBTC}
                    sellBTC={sellBTC}
                    createTransaction={createTransaction}
                />
            </div>
        </div>
    );
};

export default Dashboard;
