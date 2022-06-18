import styled from 'styled-components'

export const StyledBanner = styled.section`
  background: linear-gradient(90deg, rgba(2,0,36,1) 25%, rgba(11,5,48,1) 38%, rgba(48,24,99,1) 80%);
  color: ${({theme}) => theme.colors.primary};
`;

export const BannerContent = styled.section`
  width: 80%;
  margin: auto;
  height: 300px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  #title {
    font-size: 3rem;
  }

  article {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }

  @media only screen and (max-width: 768px) {

    #title {
      font-size: 2rem;
    }

    article {
      font-size: 1rem;
    }
  };
`;