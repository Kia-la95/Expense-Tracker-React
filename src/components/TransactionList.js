import React, { useContext } from 'react'
import { GlobalConetxt } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {

    const { transactions } = useContext(GlobalConetxt);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transactionItem => (<Transaction transaction={transactionItem} />))}

            </ul>
        </>
    )
}
