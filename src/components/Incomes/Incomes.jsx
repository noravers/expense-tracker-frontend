import styled from "styled-components"
import { InnerLayout } from "../../styles/layouts"
import { useGlobalContext } from "../../hooks/globalContext"
import Form from "../Form/form"

function Incomes() {

  const { addIncome } = useGlobalContext()

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container"></div>
          <div className="incomes"></div>
        </div>
        

        <Form/>
      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`

`

export default Incomes