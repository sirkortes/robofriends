import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // if (true) throw new Error("NOOOOO!");

  return robots.map(({ id, name, email }, i) => (
    <Card key={i} id={id} name={name} email={email} />
  ));
};

export default CardList;
