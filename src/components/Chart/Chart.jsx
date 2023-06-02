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
const allDates = [...incomes.map(inc => inc.date), ...expenses.map(exp => exp.date)];
const uniqueDates = Array.from(new Set(allDates));
uniqueDates.sort((a, b) => new Date(a) - new Date(b));
const labels = [];

for (const date of uniqueDates) {    
  const incomeEntry = incomes.reduce((acc, curr) => curr.date === date ? acc + curr.amount : acc, 0);
  const expenseEntry = expenses.reduce((acc, curr) => curr.date === date ? acc + curr.amount : acc, 0);  

  if (incomeEntry > 0 && expenseEntry > 0) {
    labels.push(`${date} (Income: ${incomeEntry}, Expense: ${expenseEntry})`);
  }
  else if (incomeEntry > 0) {
    labels.push(`${date} (Income: ${incomeEntry})`);
  }
  else if (expenseEntry > 0) {
    labels.push(`${date} (Expense: ${expenseEntry})`);
  }
}


// Use the labels array and populate the data arrays for each dataset accordingly
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Income',
      data: labels.map(label => {
        const incomeMatch = label.match(/Income: (\d+)/);
        return incomeMatch ? parseInt(incomeMatch[1]) : null;
      }),
      backgroundColor: 'green',
      tension: 0.2
    },
    {
      label: 'Expenses',
      data: labels.map(label => {
        const expenseMatch = label.match(/Expense: (\d+)/);
        return expenseMatch ? parseInt(expenseMatch[1]) : null;
      }),
      backgroundColor: 'red',
      tension: 0.2
    }
  ]
};

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