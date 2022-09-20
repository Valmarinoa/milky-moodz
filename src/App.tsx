import React from "react"
import Footer from "./components/_Footer/Footer"
import Header from "./components/_Header/Header"
import ImgBox from "./components/_ImgBox/index"
import './styles/globals.css'


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
    <div className="App font-work ">
      <header>
        <Header />
      </header>
      <div className="wrapper">
        {matrix.map(([x, y], i) => (
          <ImgBox key={i} x={x} y={y} />
        ))}
      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
