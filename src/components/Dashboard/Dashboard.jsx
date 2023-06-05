import styled from "styled-components"
import { InnerLayout } from "../../styles/layouts"
import Chart from '../Chart/Chart'
import { dollar } from "../../utils/icons"
import { useGlobalContext } from "../../hooks/globalContext"
import { useEffect } from "react"
import History from "../History/history"

function Dashboard() {

  const { totalExpense, totalIncome, getExpenses, getIncomes, incomes, expenses } = useGlobalContext()
  useEffect(() => {    
    getExpenses();  
    getIncomes();   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(expenses.length)

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
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
                <h2>Total Balance:</h2>
                <p>
                  {dollar} {totalIncome() - totalExpense()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
              <History/>
              <h2 className="salary-title">Min <span>Salary</span>Max</h2>
              <div className="salary-item">
                <p>
                  {
                    incomes.length ? Math.min(...incomes.map(e => e.amount)) : 0
                  }
                </p>
                <p>
                  {
                    incomes.length ? Math.max(...incomes.map(e => e.amount)) : 0
                  }
                </p>
              </div>
              <h2 className="salary-title">Min <span>Expense</span>Max</h2>
              <div className="salary-item">
                <p>
                  {
                    expenses.length ? Math.min(...expenses.map(e => e.amount)) : 0
                  }
                </p>
                <p>
                  {
                    expenses.length ? Math.max(...expenses.map(e => e.amount)) : 0
                  }
                </p>
              </div>
          </div>
            
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div` 
 
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .history-con {
      grid-column: 4/-1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between
      }
      .salary-title{
        font-size: 1rem;
        span{
          font-size: 1.2rem;
        }
      }
      .salary-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 10px rgba(0,0,0,.3);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          font-size: 1.6rem;
          font-weight: 600;
        }
      }
    }
    .chart-con {
      grid-column: 1 / 4;s
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income, .expense {
          grid-column: span 2;
        }
        .income, .expense, .balance {
          background: #FCF6F9;
          border: 2px solid #FFFFFF;
          box-shadow: 0px 1px 10px rgba(0,0,0,.3);
          border-radius: 20px;
          padding: 1rem;
          p{
            font-size: 3.5rem;
            font-weight: 700;
          }
        }

        .balance {
          grid-column: 2/4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
          p{
            color: var(--color-green);
            opacity: .6;
            font-size: 4.5rem;
          }
        }
      }
    }
  }
`

export default Dashboard