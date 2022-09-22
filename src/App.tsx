import React from "react"
import FooterComponent from "./components/_Footer/FooterComponent"
import Header from "./components/_Header/Header"
import ImgBox from "./components/_ImgBox/index"
import './styles/globals.css'
import { GlobalStyle } from "./styles/global"


const App = () => {

const matrix:Array<number[]> = [
  [0, 0], [1, 0], [2, 0], [3, 0],
  [0, 1], [1, 1], [2, 1], [3, 1],
  [0, 2], [1, 2], [2, 2], [3, 2],
  [0, 3], [1, 3], [2, 3], [3, 3],
  [0, 4], [1, 4], [2, 4], [3, 4],
  [0, 5], [1, 5], [2, 5], [3, 5]
]

  return (
    <div className="App">
      <GlobalStyle />
        <Header />
      <div className="wrapper">
        {matrix.map(([x, y], i) => (
          <ImgBox key={i} x={x} y={y} />
        ))}
      </div>
        <FooterComponent />
    </div>
  )
}

export default App;
