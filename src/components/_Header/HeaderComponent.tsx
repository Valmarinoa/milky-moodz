import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoSVG } from './BRAZILMood.svg'
import { Marginals } from "../../styles/global";
import CountDownComponent from "../_CountDown/CountDownComponent"


export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 860px;
  width: 120%
`

export const Header = styled.header`
${Marginals}
justify-content: center;
padding: 100px;

@media (max-width: 700px){
  padding: 92px 15px 15px 15px;
}
`

const HeaderComponent = () => {
  return (
    <Header>
    <CountDownComponent/>
      {/* for SVGs: use title as a prop(similar to alt for images) to make it web accessible */}
      <Logo title="Milky Mood Logo"/>
    </Header>
  )
}

export default HeaderComponent