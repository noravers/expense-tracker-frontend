import styled from "styled-components"
import bg from './img/bg-baige.png'
import { MainLayout } from './styles/layouts'
import Orb from './components/Orb/Orb'
import Navigation from "./components/Navigation/Navigation"
import { useState, useMemo } from "react"
import Dashboard from './components/Dashboard/Dashboard'
import Expenses from './components/Expenses/Expenses'
import Income from './components/Incomes/Incomes'
// import { useGlobalContext } from "./context/globalContext"
function App() {
  const [active, setActive] = useState(1);

  // const global = useGlobalContext()
  // console.log(global)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Income/>
      case 4:
        return <Expenses/>
      default: 
        return <Dashboard/>
    }
  }

  const orbMemo = useMemo(() => {
    return  <Orb/>
  },[])
  
  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    main {
      flex: 1;
      background: rgba(252, 246, 249, 0.78);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2),
              2px 0 10px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4.5px);
      border-radius: 20px;
      overflow: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 
      }

    }
  `




export default App
