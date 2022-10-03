import styled,{createGlobalStyle, css} from "styled-components"

interface _Togetherness {
     $isTogether: boolean;
     $color: number
}

 export const GlobalStyle = createGlobalStyle` 
     
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
        background: #2828e6;
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
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

   export const ImageContainer = styled.div.attrs(({$isTogether}: _Togetherness) => ({
     sytle: {
          animation: `${$isTogether} ? 'glow 3s infinite alternate' : 'none'`
     }
   }))`
        display: flex;
        flex-wrap: wrap;
        position: relative;
        height: 600px;
        width: 400px;
   `
   
   export const Wrapper = styled.section.attrs(({$color}:_Togetherness) => ({
     style :{
          backgroundColor:`hsl(${$color}, 79%, 53%)`
     }
   }))`
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
   `

   export const Button = styled.button`
   left: 50%;
   top:50%;
   position: absolute;
   transform: translate(-50%,-50%);
   background: none;
   border-radius: 100%;
   border: 2px solid #fbfbfb;
   cursor: pointer;
   font-size: 34px;
   font-weight: 600;
   line-height: 1;
   text-transform: uppercase;
   padding: 25px 0 ;
   width: 300px;
   z-index: 90;
   font-family: 'Work Sans', sans-serif;

   @media (max-width: 700px) {
     font-size: 24px;
     width: 220px;
   }
   `


