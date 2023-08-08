/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useEffect} from "react"
function useChartData(incomes = [], expenses = []) {

    const labels = useMemo(() => {
        
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
        return labels
    },[incomes, expenses]) 

    const data = useMemo(() => ({
        labels: labels.map(e => e.slice(0,10)),
        datasets: [
            {
                label: 'Income',
                data: labels.map(e => {
                    const match = e.match(/Income: (\d+)/);
                    return match ? parseInt(match[1]) : null
                    }),
                backgroundColor: 'green',
                tension: 0.2
            },
            {
                label: 'Expenses',
                data: labels.map(e => {
                    const match = e.match(/Expense: (\d+)/);
                    return match ? parseInt(match[1]) : null
                }),
                backgroundColor: 'red',
                tension: 0.2

            }
        ]
    }), [labels])

    return {
    labels, 
    data
  }
}

export default useChartData;