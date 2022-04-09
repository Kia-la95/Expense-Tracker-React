import React, { useContext, useState } from 'react';
import { GlobalConetxt } from '../context/GlobalState';


export const AddTransaction = () => {

    const [transaction, setTransaction] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalConetxt);


    const updateAmount = (event) => {
        setAmount(event.target.value);
    }

    const updateTransaction = (event) => {
        setTransaction(event.target.value);
    }

    const onSubmit = (event) => {

        event.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text: transaction,
            amount: +amount
        }

        addTransaction(newTransaction);

    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" value={transaction} onChange={updateTransaction} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label for="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={updateAmount} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
