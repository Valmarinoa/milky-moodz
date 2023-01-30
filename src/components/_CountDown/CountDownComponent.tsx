import React, { useEffect, useState } from 'react'
import { Counter, H2Counters, CounterContainer } from './styles'

const CountDownComponent = () => {
  const [dias, setDias] = useState<number>(0o0)
  const [horas, setHoras] = useState<number>(0o0)
  const [minutos, setMinutos] = useState<number>(0o0)
  const [segundos, setSegundos] = useState<number>(0o0)



  const contador = function () {
    var diaFinal = new Date("Feb 22, 2023").getTime();
    var hoy = new Date().getTime();
    var falta = diaFinal - hoy;
    setDias(Math.floor(falta / (1000 * 60 * 60 * 24)));
    setHoras(Math.floor((falta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutos(Math.floor((falta % (1000 * 60 * 60)) / (1000 * 60)));
    setSegundos(Math.floor((falta % (1000 * 60)) / 1000));
  };

  useEffect(() => {
    setInterval(function () {
      contador();
    }, 1000);
  }, []);

  return (
    <Counter>
      <CounterContainer>
        Días
        <H2Counters>{dias}</H2Counters>
      </CounterContainer>
      <CounterContainer>
        Hrs
        <H2Counters>{horas}</H2Counters>
      </CounterContainer>
      <CounterContainer>
        Min
        <H2Counters>{minutos}</H2Counters>
      </CounterContainer>
      <CounterContainer>
        Sec
        <H2Counters>{segundos}</H2Counters>
      </CounterContainer>
    </Counter>
  );
}

export default CountDownComponent