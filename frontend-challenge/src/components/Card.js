import styled from 'styled-components';

const StyledCard = styled.div`
  text-align: center;
  margin: 0 30px;
  height: 220px;
  @media (max-width: 411px) {
    margin-bottom: 20px;
  }
  img {
    width: 170px;
    border-radius: 10px;
  }
  p {
    font-size: 16px;
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