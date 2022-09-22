import React, {useState} from "react"
import FooterComponent from "./components/_Footer/FooterComponent"
import HeaderComponent from "./components/_Header/HeaderComponent"
import ImgBox from "./components/_ImgBox/ImgBox"
import './styles/globals.css'
import { GlobalStyle, ImageContainer, Wrapper } from "./styles/global"



const App = () => {
  const [distance, setDistance] = useState<number>(1)

  //calculate the distance between the cursor and the center/middle of the browser

  const easing = (num:number) => Math.pow(num, 3)






const matrix:Array<number[]> = [
  [0, 0], [1, 0], [2, 0], [3, 0],
  [0, 1], [1, 1], [2, 1], [3, 1], 
  [0, 2], [1, 2], [2, 2], [3, 2], 
  [0, 3], [1, 3], [2, 3], [3, 3], 
  [0, 4], [1, 4], [2, 4], [3, 4], 
  [0, 5], [1, 5], [2, 5], [3, 5]
]

console.log(matrix)

  return (
    <>
      <GlobalStyle />
        <HeaderComponent />
        <FooterComponent />
        <Wrapper>
          <ImageContainer>
            {matrix.map(([x, y], i) => (
              <ImgBox key={i} x={x} y={y} />
            ))}
        </ImageContainer>
        </Wrapper>
        
      
        
        
    </>
  )
}

export default App;
