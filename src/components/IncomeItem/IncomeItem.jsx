import styled from 'styled-components'

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type
}) {
  return (
    <IncomeItemStyled>
      <div className="icon">

      </div>
      <div className="content">
        <h5>{title}</h5>
        <p>{amount}</p>
        <p>{category}</p>
        <span>{description}</span>
      </div>
    </IncomeItemStyled>
  )
}

const IncomeItemStyled = styled.div`

`

export default IncomeItem