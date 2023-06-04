import { useEffect, useMemo } from "react"
function useChartData({incomes, expenses}) {

    const labels = useMemo((incomes, expenses) => {
        const allDates = [...incomes.map(e => e.date), ...expenses.map(e => e.date)]
        const uniqueDates = Array.from(new Set(allDates))
        uniqueDates.sort((a,b) => new Date(a)- new Date(b))
        const labels = []

        for(const date of uniqueDates){
            const incomeEntry = incomes.reduce((acc, curr) => curr.date === date ? acc + curr.date : acc, 0);
            const expensesEntry = expenses.reduce((acc, curr) => curr.date === date , 0)
            if(expensesEntry > 0 && incomeEntry > 0){
                labels.push(`${date} (Income: ${incomeEntry}), Expense: ${expensesEntry}`)
            }
            if(incomeEntry > 0){
                labels.push(`${date} Income: ${incomeEntry}`)
            }
            if(expensesEntry > 0){
                labels.push(`${date} Expense: ${expensesEntry}`)
            }
        }
        return labels
    },[incomes, expenses])

    const data = useMemo(() => ({
        labels: labels,
        datasets: [
            {
                label: 'Income',
                data: labels.map(e => {
                    const match = e.match(/Income: (\d+)/);
                    return match ? match[1] : null
                    }),
                backgroundColor: 'red',
                tension: 0.2
            },
            {
                label: 'Expenses',
                data: labels.map(e => {
                    const match = e.match(/Expense: (\d+) /);
                    return match ? match[1] : null
                }),
                backgroundColor: 'green',
                tension: 0.2

            }
        ]
    }), [labels])


    return {
    labels, 
    data
  }

export default useChartData;