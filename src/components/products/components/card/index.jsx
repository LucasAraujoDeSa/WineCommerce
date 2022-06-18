import { 
  StyledCard, 
  InfoContainer, 
  Button, 
  CardContentContainer, 
  ImageContainer 
} from './style'
import Image from 'next/image'

export const Card = ({title, price, image}) => {
  return (
    <StyledCard>
      <CardContentContainer>
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