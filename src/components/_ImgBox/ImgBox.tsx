import React from 'react'
import { Image } from './styles'
// import img from "../../../public/image.jpeg"

interface _MatrixProps {
  x: number;
  y: number
}

const ImgBox = ({x, y}: _MatrixProps) => {

  return (
      <Image $initialX={x} $initialY={y}/>
  )
}

export default ImgBox