import styled from "styled-components";
import { Marginals } from "../../styles/global";

export const Footer = styled.footer`
  ${Marginals}
  bottom: 0;
  justify-content: space-between;
  padding: 15px;

  @media (max-width: 400px) {
    position: absolute;
    bottom: 0;
  }
`

export const H2 = styled.h2`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.7;
  margin: 0;
  padding: 15px;

  @media (max-width: 900px){
  font-size: 44px;
}

@media (max-width: 700px){
  font-size: 24px;
  padding: 0%;
}
`

export const H2Middle = styled(H2)`
  flex-grow: 1;
  position: relative;
  text-align: center;
  font-weight: 400;

  &::after {
    content: '';
    background-color: #fbfbfb;
    display: block;
    position: absolute;
    height: 1.5px;
    left: 15px;
    right: 15px;
    top: 55%
  }
`