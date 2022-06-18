import styled from 'styled-components'

export const StyledNavBar = styled.nav`
  background-color: #3F2083;
  height: 70px;
  color: ${({theme}) => theme.colors.primary};
`;

export const NavBarContent = styled.section`
  width: 80%;
  height: 70px;

  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const LogoContainer = styled.section`
  font-size: 1.5rem;

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const MenuContainer = styled.section`
  display: flex;
  align-items: center;
  margin: 5px;

  span {
    margin: 0 5px;
  }

  #navCount {
    background-color: #000;
    padding: 0 7px;
    border-radius: 50%;
  }
  
  @media only screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 768px) {
    #navCount {
      display: none;
    }
  }
`;