import styled from "styled-components";
import { AbsoluteCenter } from "../../styles/global";

export const Modal = styled.div`
  ${AbsoluteCenter};
   animation: glow 1s forwards;
   background-color: #fbfbfbfb;
   box-sizing: border-box;
   padding: 60px;
   max-width: 560px;
   width: calc(100vw - 60px);
   z-index: 10;

   @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
   }
`

export const BG = styled.div`
   background: rgba(0, 0, 0, 0.5);
   cursor: pointer;
   height: 100vh;
   position: fixed;
   width: 100vw;
   z-index: 2;
`

export const Close = styled.button`
   background: transparent;
   cursor: pointer;
   border: none;
   position: absolute;
   top: 60px;
   right: 60px;
   width: 30px;
   height: 30px;

   &::before,
   &::after {
      background: #006834;
      content: "";
      position: absolute;
      height: 33px;
      width: 2px;
      left: 15px;
      top: 0;
   }

   &::before {
      transform: rotate(45deg);
   }

   &::after {
      transform: rotate(-45deg);
   }

   @media (max-width: 700px) {
      right: 30px;
      top: 30px;
   }
`