import React, { useState } from "react"
import FooterComponent from "./components/_Footer/FooterComponent"
import HeaderComponent from "./components/_Header/HeaderComponent"
import ImgBox from "./components/_ImgBox/ImgBox"
import './styles/globals.css'
import { GlobalStyle, ImageContainer, Wrapper } from "./styles/global"

// interface _Touches {
//   touches: _Clients
// }


interface _Clients {
  clientY: number;
  clientX: number;
}

const App = () => {
  const [distance, setDistance] = useState<number>(1)

  //calculate the distance between the cursor and the center/middle of the browser
  // Math.pow(i, z) uses the first argument as a base(num) and takes that to the power of the given exponent(3)
  // https://easings.net/#easeInCubic
  const easing = (num: number) => Math.pow(num, 3)

  const calculateDistance = ([x, y]: Array<number>) => {
    const center = [window.innerWidth / 2, window.innerHeight / 2]
    const maxHypot = Math.hypot(center[0], center[1])
    const hypot = Math.hypot(center[0] - x, center[1] - y)
    const distance = hypot / maxHypot

    const easeDistance = easing(distance)
    setDistance(easeDistance)
  }

  const handleMove = ({ clientX, clientY }: _Clients) => {
    calculateDistance([clientX, clientY])
  }

  const handleTouchMove:React.TouchEventHandler = ({touches}) => {
    calculateDistance([touches[0].clientX, touches[0].clientY])
  }

  console.log("Here's the distance value:",distance)

  const matrix: Array<number[]> = [
    [0, 0], [1, 0], [2, 0], [3, 0],
    [0, 1], [1, 1], [2, 1], [3, 1],
    [0, 2], [1, 2], [2, 2], [3, 2],
    [0, 3], [1, 3], [2, 3], [3, 3],
    [0, 4], [1, 4], [2, 4], [3, 4],
    [0, 5], [1, 5], [2, 5], [3, 5]
  ]

  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <FooterComponent />
      <Wrapper onMouseMove={handleMove} onTouchMove={handleTouchMove}>
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
