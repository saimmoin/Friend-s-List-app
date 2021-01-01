import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Friends } from "./Friends";

export const FriendsList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Friends key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
