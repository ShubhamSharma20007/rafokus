import React from "react";
import Card from "./Card";
const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto mt-[3vw]  py-[3vw] flex gap-3 md:flex-nowrap md:px-5  flex-wrap  ">
        <Card  width={"basis-1/2"} start={false} para={true} />
        <Card width={"basis-2/3"} start={true} para={false} hover={true}/>
      </div>
    </div>
  );
};

export default Cards;
