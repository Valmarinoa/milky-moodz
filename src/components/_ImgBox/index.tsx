import React from 'react'
import { Image } from './styles'
// import img from "../../../public/image.jpeg"

interface _MatrixProps {
  x: number;
  y: number
}

const ImgBox = ({x, y}: _MatrixProps) => {
  console.log("axis: X", x)
  console.log("axis: Y", y)

  return (
    <div className='img-container'>
      {/* <div className='image-styled-component'></div> */}
      <Image $initialX={x} $initialY={y}/>

    </div>
  )
}

export default ImgBox