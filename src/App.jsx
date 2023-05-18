import styled from "styled-components"
import bg from './img/bg-baige.png'
import { MainLayout } from './styles/layouts'
import Orb from './components/Orb/Orb'
import Navigation from "./components/Navigation/Navigation"
import { useState, useMemo } from "react"

function App() {
  const [active, setActive] = useState(1);

  const orbMemo = useMemo(() => {
    return  <Orb/>
  },[])
  
  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>

      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
    // border: 2px solid violet;
    height: 100vh;
    background-image: url(${props => props.bg})
  `




export default App
