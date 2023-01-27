import styled, { createGlobalStyle, css } from "styled-components"
import image from '../assets/bg.png'


export const GlobalStyle = createGlobalStyle` 
 
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: rgb(255, 255 ,255) 0 0 0px
  }
  50% {
    opacity: .2;
    box-shadow: rgb(255, 255, 255) 0px 0px 30px;
  }
}
     
     @keyframes glow {
          0% {
               box-shadow: rgb(252, 210 ,23) 0 0 0px;
          }
          100% {
               box-shadow: rgb(252, 210, 23) 0 10px 100px;
          }
     }

    body{
        color: #FBFBFB;
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        background: rgb(122, 183, 142);
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
        background-image: url(${image});
        background-size: cover;
        background-blend-mode: difference;
        background-position: bottom;
        
    }
   `

export const Marginals = css`
        box-sizing: border-box;
        display: flex;
        pointer-events: none;
        position: fixed;
        width: 100vw;
        z-index: 1;
   `

export const ImageContainer = styled.div.attrs<{ $isTogether: boolean }>(
     ({ $isTogether }) => ({
       style: {
         animation: $isTogether ? 'glow 3s infinite alternate' : 'none',
       },
     })
   )
   <{ $isTogether: boolean }>`
     display: flex;
     flex-wrap: wrap;
     position: relative;
     height: 600px;
     width: 400px;

     @media (max-width: 400px) {
      height: 455px;
     width: 304px;
    }
     
   `;

export const Author = styled.p.attrs<{ $isTogether: boolean }>(
     ({ $isTogether }) => ({
       style: {
         opacity: $isTogether ? 1: 0,
       },
     })
   )
   <{ $isTogether: boolean }>`
     color: #fbfbfb;
     font-size: 10px
   `;

export const Wrapper = styled.section.attrs<{ $color:number }>(
     ({ $color }) => ({
          style :{
         backgroundColor: `hsl(${$color}, 100%, 19%, 90%)`,

          }
     })
   )
   <{ $color:number }>`
   background: #006834;
     display:flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
     width: 100vw;
   `;


export const AbsoluteCenter = css`
     left: 50%;
     top:50%;
     position: absolute;
     transform: translate(-50%,-50%);
     `

export const Button = styled.button`
     ${AbsoluteCenter};
     /* -webkit-text-fill-color: transparent; */
     background: transparent;
     border-radius: 100%;
     border: 2px solid #fbfbfb;
     cursor: pointer;
     font-size: 24px;
     font-weight: 600;
     line-height: 1;
     text-transform: uppercase;
     padding: 25px 0 ;
     width: 300px;
     z-index: 4;
     font-family: 'Work Sans', sans-serif;

   @media (max-width: 700px) {
     font-size: 24px;
     width: 220px;
   }

   @media (max-width: 400px) {
    font-size: 18px;
  }
   `

  


