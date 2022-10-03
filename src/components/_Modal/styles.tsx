import styled from "styled-components";


export const Modal = styled.div`
   left: 50%;
   top:50%;
   position: absolute;
   transform: translate(-50%,-50%);
   animation: glow 1s forwards;
   background-color: #fbfbfbfb;
   box-sizing: border-box;
   padding: 60px;
   max-width: 800px;
   width: calc(100vw - 60px);
   z-index: 3;

   @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
   }
`

export  const BG = styled.div`
background: rgba(0, 0, 0, 0.5);
cursor: pointer;
height: 100vh;
position: fixed;
width: 100vw;
z-index: 2;
`