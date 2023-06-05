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
    // console.log(incomes, expenses)

  return (
    <ChartStyled>
        <Line data={data}/>
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    border: 2px solid blue;
`

export default Chart;