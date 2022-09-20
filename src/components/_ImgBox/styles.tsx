import styled from "styled-components"
import image from '../../assets/image1.jpeg'

interface _MatrixProps {
  $initialX: number;
  $initialY: number
}

export const Image = styled.div`
background-image: url(${image});
background-size: 400px 600px;
height: 100px;
width: 100px;
position: relative;
background-position: ${({$initialX, $initialY}:_MatrixProps) => 
  `-${$initialX * 100}px -${$initialY * 100}px`}
`