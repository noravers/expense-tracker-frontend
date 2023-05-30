import styled from "styled-components"
import { InnerLayout } from "../../styles/layouts"
import Form from "../Form/form";
import IncomeItem from "../IncomeItem/IncomeItem";
import { useEffect } from "react";
import { useGlobalContext } from "../../hooks/globalContext";
import { useState } from "react";

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpense } = useGlobalContext()
  const [expenseState, setexpenseState] = useState([])
  
  useEffect(() => {    
    getExpenses();    
    setTimeout(() => {
        console.log(expenses, 'expenses')
    }, 3000);  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setexpenseState(expenses)   
  }, [expenses])

  const handleDelete = (id) => {
    deleteExpense(id)
    setexpenseState(expenseState.filter(e => e._id !== id))
  }
  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">Total Expense: 
            <span>${totalExpense()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form section="expenses"/>
          </div>
          <div className="incomes">
            {expenseState.map(e => {
              const { _id, title, amount, description, category, date, type} = e;
                return (
                  <IncomeItem 
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    category={category}
                    amount={amount}
                    date={date}
                    type={type}
                    indicatorColor="var(--color-green)"
                    deleteItem={handleDelete}
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
  .income-content {
    display: flex
  }
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;
    padding: 1rem;
    font-size: 2rem;
    margin: 1rem 0;
    border-radius: 20px;
    border: 2px solid #FFFFFF;
    background: #FCF6F9;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    gap: .5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`
export default Expenses