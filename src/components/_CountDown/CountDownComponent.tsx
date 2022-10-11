import React, { useEffect, useState } from 'react'
import { Counter, H2Counters } from './styles'

const CountDownComponent = () => {
  const [dias, setDias] = useState<number>()
  const [horas, setHoras] = useState<number>()
  const [minutos, setMinutos] = useState<number>()
  const [segundos, setSegundos] = useState<number>()

 

  const contador = function () {
    var diaFinal = new Date("Nov 19, 2022").getTime();
    var hoy = new Date().getTime();
    var falta = diaFinal - hoy;
    setDias(Math.floor(falta / (1000 * 60 * 60 * 24)));
    setHoras(Math.floor((falta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutos(Math.floor((falta % (1000 * 60 * 60)) / (1000 * 60)));
    setSegundos(Math.floor((falta % (1000 * 60)) / 1000));
  }

  useEffect(() => {
    setInterval(function () {
      contador()
    }, 1000)


  }, [])

  return (
    <Counter>
      <H2Counters>{dias}</H2Counters><H2Counters>:{horas}</H2Counters><H2Counters>:{minutos}</H2Counters><H2Counters>:{segundos}</H2Counters>
    </Counter>

  )
}

export default CountDownComponent