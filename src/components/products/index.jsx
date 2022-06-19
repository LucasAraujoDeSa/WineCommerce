import { StyledProducts, ProductsContainer } from './style'
import { Card } from './components'

export const Products = ({data}) => {
  return (
    <StyledProducts>
      <ProductsContainer>
        {
          data && data.map(({title, price, image, rate, id}) => {
              return (
                <Card 
                  title={title} 
                  price={price} 
                  image={image} 
		  rate={rate}
                  key={id}
                />
              )
            }
          )
        }
      </ProductsContainer>
    </StyledProducts>
  )
}
