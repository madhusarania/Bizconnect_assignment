import React from "react";

const List = ({ title, total, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h3 className="text-xl font-bold">{title}</h3>
      {total && <p className="text-2xl">{total}</p>}
      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
