import React from "react";
import { SmallCardData } from "../datafile/ObjData";

const SmallCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-10">
      {SmallCardData.map((item, index) => (
        <div
          className={`rounded-lg text-white p-4 flex items-center flex-col gap-2 dark:bg-slate-800 bg-slate-300`}
          key={index}
        >
          <div className="flex space-x-4">
            <div className={`w-12 h-12 rounded-full items-center flex justify-center ${item.class}`}>{item.icon}</div>
            <div className="text-black dark:text-white">
              <h4>{item.text}</h4>
              <h3 className="text-2xl font-bold">{item.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallCards;
