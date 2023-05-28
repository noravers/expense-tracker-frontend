import styled from "styled-components"
import { InnerLayout } from "../../styles/layouts"

function Expenses() {
  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            {/* <Form/> */}
          </div>
          <div className="incomes">
            {incomes.map(e => {
              const { _id, title, amount, description, category, date, type} = e;
                return (
                  <ExpenseItem 
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
    </ExpensesStyled>
  )
}
const ExpensesStyled = styled.div`

`
export default Expenses