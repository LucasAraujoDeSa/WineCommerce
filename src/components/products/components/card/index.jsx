import { 
  StyledCard, 
  InfoContainer, 
  Button, 
  CardContentContainer, 
  ImageContainer,
  HeaderContainer
} from './style'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

export const Card = ({title, price, image, rate}) => {
  return (
    <StyledCard>
      <CardContentContainer>
        <HeaderContainer>
          {
            [...Array(rate)].map(() => {
              return <FaStar className='star-active'/>
            })
          }
          {
            [...Array(5 - rate)].map(() => {
              return <FaStar className='star'/>
            })
          }
        </HeaderContainer>
        <ImageContainer>
          {
            image ?
            <Image
              src={image}
              alt='wine'
              width='70px'
              height='80px'
            /> : 
            <p>:(</p>
          }
        </ImageContainer>

        <InfoContainer>
          <h1>{title}</h1>
          <p>R$ {price}</p>
        </InfoContainer>
        <Button>Buy</Button>
      </CardContentContainer>
    </StyledCard>
  )
}
