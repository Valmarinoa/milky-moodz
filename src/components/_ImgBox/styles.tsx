import styled from "styled-components"
import image from '../../assets/image1.jpeg'

interface _MatrixProps {
  $initialX: number;
  $initialY: number;
  $movedX: number;
  $movedY: number;
}

export const Image = styled.div.attrs(({$movedX, $movedY}:_MatrixProps) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`
  }
}))`
background-image: url(${image});
background-size: 400px 600px;
height: 100px;
width: 100px;
position: relative;
background-position: ${({$initialX, $initialY}:_MatrixProps) => 
  `-${$initialX * 100}px -${$initialY * 100}px`};


  @media (max-width: 400px) {
    height: 76px;
    width: 76px;
    background-size: 380px 580px;
    background-position: ${({$initialX, $initialY}:_MatrixProps) => 
  `-${$initialX * 100}px -${$initialY * 100}px`};
  }

`

