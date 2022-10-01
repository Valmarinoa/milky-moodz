import React, { useState } from "react"
import FooterComponent from "./components/_Footer/FooterComponent"
import HeaderComponent from "./components/_Header/HeaderComponent"
import ImgBox from "./components/_ImgBox/ImgBox"
import './styles/globals.css'
import { Button, GlobalStyle, ImageContainer, Wrapper } from "./styles/global"



interface _Clients {
  clientY: number;
  clientX: number;
}

// interface _Togetherness {
//   $isTogether?: boolean;
//   $color: number
// }

const matrix: Array<number[]> = [
  [0, 0], [1, 0], [2, 0], [3, 0],
  [0, 1], [1, 1], [2, 1], [3, 1],
  [0, 2], [1, 2], [2, 2], [3, 2],
  [0, 3], [1, 3], [2, 3], [3, 3],
  [0, 4], [1, 4], [2, 4], [3, 4],
  [0, 5], [1, 5], [2, 5], [3, 5]
]

const App = () => {
  const [distance, setDistance] = useState<number>(1)

  //calculate the distance between the cursor and the center/middle of the browser
  // Math.pow(i, z) uses the first argument as a base(num) and takes that to the power of the given exponent(3)
  // https://easings.net/#easeInCubic
  const easing = (num: number) => Math.pow(num, 3)
 
  const calculateDistance = ([x, y]: Array<number>) => {

    // Find the position(coordinates: x,y) of the cursor in the window browser.
    // Use Hypotheneuse to find the shortest distance between the cursor and the center of the browser.
    // const distance calculates the distance as a percentage, based off the current value and the max. value
    // ..giving a number between 0 ---> 1
    const center = [window.innerWidth / 2, window.innerHeight / 2]
    const maxHypot = Math.hypot(center[0], center[1])
    const hypot = Math.hypot(center[0] - x, center[1] - y)
    const distance = hypot / maxHypot

    const easeDistance = easing(distance)
    setDistance(easeDistance)
  }

  // returns mouse pointer position values x, y
  const handleMove = ({ clientX, clientY }: _Clients) => {
    calculateDistance([clientX, clientY])
  }

  const handleTouchMove:React.TouchEventHandler = ({touches}) => {
    calculateDistance([touches[0].clientX, touches[0].clientY])
  }


  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <FooterComponent />
      <Wrapper onMouseMove={handleMove} onTouchMove={handleTouchMove} $color={Math.round(240 - distance *40)}>
        <ImageContainer $isTogether={distance < 0.001}>
          
          <Button>Vem falar oi!</Button>
          {matrix.map(([x, y], i) => (
            <ImgBox key={i} x={x} y={y} percent={distance}/>
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  )
}

export default App;
