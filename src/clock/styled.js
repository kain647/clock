import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;
export const ClockBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  padding: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 50px #dfdfdf, -26px -26px 30px 35px rgb(255 255 255 / 60%),
    0 0 50px 50px rgb(0 0 0 / 10%);
  :before {
    content: "";
    position: absolute;
    z-index: 0;
    left: -25px;
    right: -25px;
    top: -25px;
    bottom: -25px;
    border-radius: 50%;
    box-shadow: inset 10px 10px 20px 5px rgb(0 0 0 / 10%),
      inset -6px -6px 25px rgb(255 255 255 / 75%);
  }
  span {
    display: flex;
    box-sizing: border-box;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -30px;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    letter-spacing: 0.2em;
    font-size: 20px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    &.Twelve {
      transform: rotate(0deg) translateY(-150px) rotate(0deg);
    }
    &.One {
      transform: rotate(30deg) translateY(-150px) rotate(-30deg);
    }
    &.Two {
      transform: rotate(60deg) translateY(-150px) rotate(-60deg);
    }
    &.Three {
      transform: rotate(90deg) translateY(-150px) rotate(-90deg);
    }
    &.Four {
      transform: rotate(120deg) translateY(-150px) rotate(-120deg);
    }
    &.Five {
      transform: rotate(150deg) translateY(-150px) rotate(-150deg);
    }
    &.Six {
      transform: rotate(180deg) translateY(-150px) rotate(-180deg);
    }
    &.Seven {
      transform: rotate(210deg) translateY(-150px) rotate(-210deg);
    }
    &.Eight {
      transform: rotate(240deg) translateY(-150px) rotate(-240deg);
    }
    &.Nine {
      transform: rotate(270deg) translateY(-150px) rotate(-270deg);
    }
    &.Ten {
      transform: rotate(300deg) translateY(-150px) rotate(-300deg);
    }
    &.Eleven {
      transform: rotate(330deg) translateY(-150px) rotate(-330deg);
    }
  }
`;

export const Hand = styled.div`
	position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  transform: ${({rotate}) => rotate};
	margin: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
`;

export const Center = styled.div`
  display: flex;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #c62828;
  z-index: 1000;
`;
export const Second = styled(Hand)`
  height: 3px;
  width: 60%;
  background: #c62828;
  left: 8%;
  margin: auto;
  transform-origin: 70%;
  z-index: 999;
  :before {
    content: "";
    height: 20px;
    width: 20px;
    background: #c62828;
    position: absolute;
    border-radius: 10px;
    top: 0;
    right: 5%;
    bottom: 0;
    margin: auto;
  }
`;
export const Minutes = styled(Hand)`
  height: 3px;
  width: 50%;
  background: #424242;
  left: 10%;
  transform-origin: 80%;
`;
export const Hours = styled(Hand)`
  height: 7px;
  width: 25%;
  background: #424242;
  left: 25%;
  transform-origin: 100%;
`;
