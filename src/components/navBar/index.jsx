import { 
  StyledNavBar, 
  NavBarContent,
  LogoContainer,
  MenuContainer
} from './style'
import { AiOutlineShoppingCart } from "react-icons/ai";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <NavBarContent>
        <LogoContainer>
          <h1>Wines</h1>
        </LogoContainer>
        <MenuContainer>
          <AiOutlineShoppingCart/>
          <span>Cart</span>
          <span id="navCount">0</span>
        </MenuContainer>
      </NavBarContent>
    </StyledNavBar>
  )
}