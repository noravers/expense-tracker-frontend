/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import { Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import { useGlobalContext } from '../../hooks/globalContext'
import useChartData from '../../hooks/useChartData'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext();
    const { data } = useChartData(incomes, expenses)    

  return (
    <ChartStyled>
        <Line data={data}/>
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 10px rgba(0,0,0,.3);
    padding: 1rem;
    border-radius: 20px;
    height: 50%;
`

export default Chart;