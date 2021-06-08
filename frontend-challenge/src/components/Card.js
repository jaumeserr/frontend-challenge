import styled from 'styled-components';

const StyledCard = styled.div`
  width: 150px;
  text-align: center;
  margin: 0 20px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  p {
    font-size: 14px;
    margin-top: 10px;
  }
`

const Card = ({ image, name }) => {
  return(
    <StyledCard>
      <img src={image} alt={name} />
      <p>{name}</p>
    </StyledCard>
  )
}

export default Card;