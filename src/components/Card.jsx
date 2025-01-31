import React from "react";

const Card = ({ title, amount }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-2xl">{amount}</p>
    </div>
  );
};

export default Card;
