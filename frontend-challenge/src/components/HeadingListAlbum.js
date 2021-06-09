import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  .controls {
    @media (max-width: 411px) {
      display: none;
    }
  }
`

const StyledTitle = styled.p`
  color: #cecedc;
  text-transform: uppercase;
  font-weight: bold;
  padding-right: 15px;
`

const StyledLine = styled.div`
  background-color: #cecedc;
  display: flex;
  flex-grow: 1;
  height: 2px;
  @media (max-width: 411px) {
    display: none;
  }
`

const HeadingListAlbum = ({ title }) => {
  return(
    <StyledHeading>
      <StyledTitle>{title}</StyledTitle>
      <StyledLine></StyledLine>
      <div className="controls">
        <IoIosArrowBack style={{ marginLeft: '10px', color: '#5955d5', cursor: 'pointer' }} />
        <IoIosArrowForward style={{ color: '#5955d5', cursor: 'pointer' }} />
      </div>
    </StyledHeading>
  )
}

export default HeadingListAlbum;