import React from 'react'

export default function THTabla({ id, label, order, handleClick })  {
    return (
      <th
        onClick={handleClick}
        id={id}
        className="whitespace-nowrap relative px-1 py-2 font-medium text-primary-800 cursor-pointer hover:bg-primary-300/20 duration-200"
      >
        {label}
        <span className="duration-200 animate-aparecer absolute top-2 right-2">
          {order == id && "⬇️"}
        </span>
      </th>
    );
  };
