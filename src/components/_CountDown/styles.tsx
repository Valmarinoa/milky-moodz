import styled from "styled-components";
// import { AbsoluteCenter } from "../../styles/global";

export const Counter = styled.div`
  left: 50%;
  top:5%;
  width: 100%;
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 10%;
  justify-content:space-evenly;
  width: 400px;
  z-index: 99;
  color: #000000;

  @media (max-width: 400px) {
    width: 95%;
  }
`
export const CounterContainer = styled.div`
  width: 15%;
  height: 28% ;
  overflow: visible;
  color: #FBFBFB;
  text-align: center;
  /* display: flex; */
`

export const H2Counters = styled.h2`
  position: relative;
  border: 1px solid white;
  overflow: visible;
  /* background-color: #FBFBFB; */
  /* width: 2vw; */
  line-height: 130%;
  text-align: center;
  color: #fbfbfb;
  font-size: 2em;
  padding: 4%;
  border-radius: 50%;
  animation: 2s infinite pulse;
`;