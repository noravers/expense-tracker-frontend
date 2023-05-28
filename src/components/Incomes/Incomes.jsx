import styled from "styled-components"
import { InnerLayout } from "../../styles/layouts"
import { useGlobalContext } from "../../hooks/globalContext"
import Form from "../Form/form"
import { useEffect } from "react"
import IncomeItem from "../IncomeItem/IncomeItem"
import { calender } from "../../utils/icons"

function Incomes() {

  const { addIncome, getIncomes, incomes } = useGlobalContext()
  
  useEffect(() => {
    getIncomes()
    console.log(incomes)
  }, [])

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form/>
          </div>
          <div className="incomes">
            {incomes.map(e => {
              const { _id, title, amount, description, category, date, type} = e;
                return (
                  <IncomeItem 
                    key={_id}
                    title={title}
                    description={description}
                    category={category}
                    amount={amount}
                    date={date}
                    type={type}
                    indicatorColor="var(--color-green)"
                  />
                )
            })}
          </div>
        </div>
        

      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
      border: 2px solid violet
    }
  }
`

export default Incomes