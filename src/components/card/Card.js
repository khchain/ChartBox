import React from 'react';
import classNames from "classnames";

function Card({children, title, className}) {
  const containerClasses = classNames({
    "bg-white lg:w-1/3 w-2/3 max-w-[604px] min-w-40 p-5 rounded-xl shadow-sm overflow-hidden": true,
    [className]: !!className
  })
  return (
    <div className={containerClasses}>
      <h1 className="font-semibold mb-4">{title}</h1>
      <hr className="border-neutral-100 mb-5"/>
      {children}
    </div>
  );
}

export default Card;