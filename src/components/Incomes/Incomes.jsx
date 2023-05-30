import styled from "styled-components"
import { InnerLayout } from "../../styles/layouts"
import { useGlobalContext } from "../../hooks/globalContext"
import Form from "../Form/form"
import { useEffect } from "react"
import IncomeItem from "../IncomeItem/IncomeItem"
import { calender } from "../../utils/icons"
import { useState } from "react"

function Incomes() {

  const { getIncomes, deleteIncome, incomes } = useGlobalContext()
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
        <h1>Total Income: </h1>
        <div className="income-content">
          <div className="form-container">
            <Form/>
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