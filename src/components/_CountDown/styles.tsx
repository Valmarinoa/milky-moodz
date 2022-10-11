import styled from "styled-components";
// import { AbsoluteCenter } from "../../styles/global";

export const Counter = styled.div`
  left: 50%;
  top:2%;
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 10%;
  justify-content:space-evenly;
  width: 400px;
  z-index: 99;
  color: #000000;
`

export const H2Counters = styled.h2`
  position: relative;
  border: 2px solid white;
  /* width: 2vw; */
  line-height: 100%;
  text-align: center;
  color: #FBFBFB;
  font-size: 2vw;
  padding: 4%;
  border-radius: 50%;
  `