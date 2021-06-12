import styled from 'styled-components';

const StyledCard = styled.div`
  text-align: center;
  margin: 0 30px;
  height: 220px;
  @media (max-width: 414px) {
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

const Card = ({ album }) => {
  return(
    <StyledCard>
      <img src={album.image} alt={album.name} />
      <p>{album.name}</p>
    </StyledCard>
  )
}

export default Card;