import * as React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive } from 'react-icons/md'
import { MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'


export const StatsData = [
    {
      icon: (
        <GiEarthAmerica style={{
            color:  "#047bf1"
            }}/> 
        ),
        title: "Mais de 100 destinos",
        desc: "Conheça mais de 100 destinos brasileiros inesqueciveis",
    },
    {
        icon: (
        <MdAirplanemodeActive style={{
            color:  "#f3a82e"}}/>
        ),
        title: "100 Mil Viagens",
        desc: "Mais de 100 mil viagens concluídas no ano passado",
    },
    {
        icon: (
        <MdTimer style={{
            color:  "#f34f2e"}}/>
        ),
        title: "Suporte mais rápido",
        desc: "Acesse nossa equipe de suporte 24h por dia, 7 dias por semana",
    },
    {
        icon: (
        <FaMoneyCheck style={{
            color:  "#3af576"}}/>
        ),
        title: "Os melhores preços",
        desc: "Nós oferecemos os melhores preços com várias opções de pagamentos",
    },
]
