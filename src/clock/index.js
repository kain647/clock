import React, { useState, useEffect} from "react";
import { Container, ClockBox, Center, Second, Minutes, Hours } from "./styled";

const Clock = () => {

  const [rotations, setRotations] = useState({
    srotate: "", mrotate : "", hrotate : ""
  });

  const timer = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var srot = s*6+90;
    var mrot = m*6+90;
    var hrot = h*30+90+m/2;

    var srotate = "rotate(" + srot + "deg)";
    var mrotate = "rotate(" + mrot + "deg)";
    var hrotate = "rotate(" + hrot + "deg)";
    setRotations({srotate, mrotate, hrotate})
  }

  useEffect(
    () => {
      const id = setInterval(timer, 1000);
      return () => clearInterval(id);
    },
    [rotations]
  )

  return (
    <Container>
      <ClockBox>
        <span className={"Twelve"}>12</span>
        <span className={"One"}>1</span>
        <span className={"Two"}>2</span>
        <span className={"Three"}>3</span>
        <span className={"Four"}>4</span>
        <span className={"Five"}>5</span>
        <span className={"Six"}>6</span>
        <span className={"Seven"}>7</span>
        <span className={"Eight"}>8</span>
        <span className={"Nine"}>9</span>
        <span className={"Ten"}>10</span>
        <span className={"Eleven"}>11</span>
      </ClockBox>
      <Center />
      <Second rotate={rotations.srotate}/>
      <Minutes rotate={rotations.mrotate}/>
      <Hours rotate={rotations.hrotate}/>
    </Container>
  );
};

export default Clock;
