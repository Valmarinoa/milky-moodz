import React, { useState } from "react"
import FooterComponent from "./components/_Footer/FooterComponent"
import HeaderComponent from "./components/_Header/HeaderComponent"
import ImgBox from "./components/_ImgBox/ImgBox"
import './styles/globals.css'
import { Button, GlobalStyle, ImageContainer, Wrapper, Author } from "./styles/global"
import ModalComponent from "./components/_Modal/ModalComponent"
import ModalInner from "./components/_ModalInner/ModalInner"



interface _Clients {
  clientY: number;
  clientX: number;
}


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
  const [showModal, setShowModal] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("Olha com ela vem!")
  const firstMessage = "Olha com ela vem.."
  const secondMessage = "Nosssa, UAL."

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

  const toggleModal = () => {
    setShowModal((showModal => !showModal))
  }

  const toggleMessageIn:React.MouseEventHandler = () => {
    setMessage(()=> secondMessage)
  }
  const toggleMessageOut:React.MouseEventHandler = () => {
    setMessage(()=> firstMessage)
  }


  return (
    <>
      <GlobalStyle />
      {showModal && (
        <ModalComponent toggleModal={toggleModal}>
          <ModalInner />
        </ModalComponent>
      )}

      <HeaderComponent />
      <FooterComponent />
      <Wrapper
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        $color={Math.round(130 - distance * -90)}
      >
        <ImageContainer $isTogether={distance < 0.001}>
          <Button
            onClick={toggleModal}
            onMouseEnter={toggleMessageIn}
            onMouseLeave={toggleMessageOut}
          >
            {message}
          </Button>
          {matrix.map(([x, y], i) => (
            <ImgBox key={i} x={x} y={y} percent={distance} />
          ))}

          <Author $isTogether={distance < 0.001}>
            Photographer: Tinko Czetwertynski
          </Author>
        </ImageContainer>
      </Wrapper>
    </>
  );
}

export default App;
