import styled from 'styled-components'

export const StyledCard = styled.section`
  width: 200px;
  background: ${({theme}) => theme.colors.primary};
  text-align: center;
  margin: 8px;
  padding: 10px;
  border-radius: 18px;
`;

export const CardContentContainer = styled.section`
  width: 80%;
  margin: auto;
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.secondary};
    text-align: left;
  }

  p {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  padding: 5px;
  margin: 3px 0 8px 0;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
  background: linear-gradient(90deg, rgba(2,0,36,1) 25%, rgba(11,5,48,1) 38%, rgba(48,24,99,1) 80%);

  :hover {
    border: 2px solid rgba(2,0,36,1);
    color: rgba(2,0,36,1);
    background: ${({theme}) => theme.colors.primary};
    font-weight: bold;
  }
`;

export const ImageContainer = styled.section`
  margin: 10px;
`;