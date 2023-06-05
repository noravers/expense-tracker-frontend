/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react"
function useChartData(incomes = [], expenses = []) {

    const labels = useMemo(() => {
        console.log('icnomes', incomes)
        const allDates = [...incomes.map(e => e.date), ...expenses.map(e => e.date)]
        const uniqueDates = Array.from(new Set(allDates))
        uniqueDates.sort((a,b) => new Date(a)- new Date(b))
        let labels = []

        for(const date of uniqueDates){
            const incomeEntry = incomes.reduce((acc, curr) => curr.date === date ? acc + curr.amount : acc, 0);
            const expensesEntry = expenses.reduce((acc, curr) => curr.date === date ? acc + curr.amount : acc, 0)
            if(expensesEntry > 0 && incomeEntry > 0){
                labels.push(`${date} (Income: ${incomeEntry}), (Expense: ${expensesEntry})`)
            }
            else if (incomeEntry > 0){
                labels.push(`${date} Income: ${incomeEntry}`)
            }
            else if(expensesEntry > 0){
                labels.push(`${date} Expense: ${expensesEntry}`)
            }
            console.log(labels, 'labels')
        }
        console.log(labels, 'LABELS')
        // console.log(labels, 'returning labels')
        return labels
    },[incomes, expenses]) 

    const data = useMemo(() => ({
        labels: labels,
        datasets: [
            {
                label: 'Income',
                data: labels.map(e => {
                    const match = e.match(/Income: (\d+)/);
                    console.log(match)
                    return match ? parseInt(match[1]) : null
                    }),
                backgroundColor: 'red',
                tension: 0.2
            },
            {
                label: 'Expenses',
                data: labels.map(e => {
                    const match = e.match(/Expense: (\d+) /);
                    return match ? parseInt(match[1]) : null
                }),
                backgroundColor: 'green',
                tension: 0.2

            }
        ]
    }), [labels])

    // console.log(labels, data, 'labesl and data')


    return {
    labels, 
    data
  }
}

export default useChartData;