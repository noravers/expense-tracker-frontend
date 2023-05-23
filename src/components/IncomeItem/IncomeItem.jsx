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
        <div className="inner-content">
          
        </div>
        
      </div>
    </IncomeItemStyled>
  )
}

const IncomeItemStyled = styled.div`

`

export default IncomeItem