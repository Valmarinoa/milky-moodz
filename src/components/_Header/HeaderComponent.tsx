import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoSVG } from './logo.svg'
import { Marginals } from "../../styles/global";

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%
`

export const Header = styled.header`
${Marginals}
justify-content: center
`

const HeaderComponent = () => {
  return (
    <Header>
      {/* for SVGs: use title as a prop(similar to alt for images) to make it web accessible */}
      <Logo title="Milky Mood Logo"/>
    </Header>
  )
}

export default HeaderComponent