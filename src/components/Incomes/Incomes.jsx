import styled from "styled-components"
import { InnerLayout } from "../../styles/layouts"
import { useGlobalContext } from "../../hooks/globalContext"
import Form from "../Form/Form"
import { useEffect } from "react"
import IncomeItem from "../IncomeItem/IncomeItem"
import { useState } from "react"

function Incomes() {

  const { getIncomes, deleteIncome, totalIncome, incomes } = useGlobalContext()
  const [incomesState, setincomesState] = useState([])
  
  useEffect(() => {    
    getIncomes();      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setincomesState(incomes)   
  }, [incomes])

  const handleDelete = (id) => {
    deleteIncome(id)
    setincomesState(incomesState.filter(e => e._id !== id))
  }

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">Total Income: 
            <span>${totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form section="incomes"/>
          </div>
          <div className="incomes">
            {incomesState.map(e => {
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
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    border: 2px solid #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background: #FCF6F9;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    gap: .5rem;
    margin: 1rem 0;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green)
    }
    
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
      // border: 2px solid violet
    }
  }
`

export default Incomes