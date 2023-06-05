import styled from 'styled-components';
import { useGlobalContext } from '../../hooks/globalContext'

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();
  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {
        history.map(e => {
          const {_id, title, amount, type } = e
          return (
            <div key={_id} className="history-item">
              <p style={{color: type === 'expense' ? 'red' : 'var(--color-green'}}>{title}</p>
              <p style={{color: type === 'expense' ? 'red' : 'var(--color-green'}}>{type === 'expense' ? `-${amount}` : `+${amount}`}</p>
            </div>
            
          )
        })
      }
    </HistoryStyled>
  )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
      display: flex;
      background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 10px rgba(0,0,0,.3);
        padding: 1rem;
        border-radius: 20px;
        justify-content: space-between;
        p{
          font-size: 1.2rem;
          font-weight: 800px
        }
    }
`;

export default History;