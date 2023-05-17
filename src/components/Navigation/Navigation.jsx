import styled from 'styled-components'
import avatar from '../../img/4700396.jpg'
import { menuItems } from '../../utils/menuItems'


function Navigation() {
    console.log(menuItems)
  return (
    <NavStyled>
        <div className="user-con">
            <img src={avatar} alt="" style={{ width: '100px', height: '100px' }} />
            <div className="text">
                <h2>John Doe</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className="menu-items">
            {
                menuItems.map(e => {
                return <li
                    key={e.id}
                >
                    {e.icon}
                    <span>{e.title}</span>
                </li>
            })
            }
        </ul>
    </NavStyled>
  )
}

const NavStyled = styled.nav`

`

export default Navigation