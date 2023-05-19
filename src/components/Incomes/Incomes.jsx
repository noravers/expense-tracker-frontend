import styled from "styled-components"
import { InnerLayout } from "../../styles/layouts"
import { useGlobalContext } from "../../hooks/globalContext"
import Form from "../Form/form"
import { useEffect } from "react"
import IncomeItem from "../IncomeItem/IncomeItem"

function Incomes() {

  const { addIncome, getIncomes, incomes } = useGlobalContext()
  
  useEffect(() => {
    getIncomes()
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
              const { _id, title, amount, description, category, date} = e;
                return (
                  <IncomeItem 
                    key={_id}
                    title={title}
                    description={description}
                    category={category}
                    amount={amount}
                    date={date}
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

`

export default Incomes