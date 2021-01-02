import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Friends } from "./Friends";

export const FriendsList = () => {
  const { transactions } = useContext(GlobalContext);
  updateLocalStorage();

  function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

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
