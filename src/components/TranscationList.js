import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transcation } from "./Transcation";
export const TranscationList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transcation key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
