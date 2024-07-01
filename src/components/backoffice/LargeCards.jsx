import { Layers } from "lucide-react";
import React from "react";
import {LargeCardData} from "../datafile/ObjData";

const LargeCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4">
      {LargeCardData.map((item, index) => (
        <div className={`rounded-lg text-white  p-8 flex items-center flex-col gap-2 ${item.class}`} key={index}>
          {item.icon}
          <h4>{item.text}</h4>
          <h2 className="text-2xl lg:text-3xl">{item.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default LargeCards;
