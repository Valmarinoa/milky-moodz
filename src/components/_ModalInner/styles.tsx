import styled from "styled-components"
import senoras from './senoras-felices.png'

export const Container = styled.div`
  color: #000;
  max-width: 440px;
`

export const H3 = styled.h3`
  font-size: 44px;
  font-weight: 600;
  line-height: 0.7;
  margin: 0;
  color: #006834;
`;

export const P = styled.p`
  font-size: 16px;
  margin: 20px 0;

  @media (max-width: 700px){
  font-size: 14px;
}
`

export const Senoras = styled.div`
background-image: url(${senoras});
background-repeat: no-repeat;
    background-size: contain;
    width: 120px;
    height: 110px;
    object-fit: contain;
    /* background-color: red; */
`


export const H4 = styled.h4`
  color:#006834;
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  margin: 20px 0 0;

  @media (max-width: 700px){
  font-size: 24px;
}
`

export const SuccessContainer = styled.div`
/* max-width: 440px; */
color: #000;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  text-align: center;


`
