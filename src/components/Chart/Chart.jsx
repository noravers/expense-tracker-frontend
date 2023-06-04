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
import { useChartData } from '../../hooks/useChartData'

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
    border: 2px solid blue;
`

export default Chart

// function Chart() {
//     const { incomes, expenses } = useGlobalContext();
//     // Combine incomes and expenses into a single array
// const allEntries = [...incomes, ...expenses];

// // Sort allEntries by date in ascending order
// allEntries.sort((a, b) => new Date(a.date) - new Date(b.date));

// // Create an array of formatted date labels
// const labels = allEntries.map(entry => {
//   const { date, amount } = entry;
//   const formattedDate = new Date(date).toLocaleDateString();
//   return `${formattedDate} (${amount})`;
// });

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Income',
//       data: allEntries.map(entry => entry.amount),
//       backgroundColor: 'green',
//       tension: 0.2
//     },
//     {
//       label: 'Expenses',
//       data: allEntries.map(entry => entry.amount),
//       backgroundColor: 'red',
//       tension: 0.2
//     }
//   ]
// };

//   return (
//     <ChartStyled>
//         <Line data={data}/>
//     </ChartStyled>
//   )
// }