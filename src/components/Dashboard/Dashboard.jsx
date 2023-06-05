import styled from "styled-components"
import { InnerLayout } from "../../styles/layouts"
import Chart from '../Chart/Chart'
import { dollar } from "../../utils/icons"
import { useGlobalContext } from "../../hooks/globalContext"
import { useEffect } from "react"

function Dashboard() {

  const { totalExpense, totalIncome, getExpenses, getIncomes } = useGlobalContext()
  useEffect(() => {    
    getExpenses();  
    getIncomes();   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-on">
            <Chart/>
            <div className="amount-con">
              <div className="income">
                <h2>Total income:</h2>
                <p>{dollar} {totalIncome()}</p>
              </div>
              <div className="expense">
                <h2>Total expense:</h2>
                <p>{dollar} {totalExpense()}</p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalIncome() - totalExpense()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-container">
            
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div` 

`

export default Dashboard