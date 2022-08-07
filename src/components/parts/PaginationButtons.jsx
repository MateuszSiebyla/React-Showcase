import styled from 'styled-components'

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`

const PaginationButton = styled.div`
  align-items: center;
  background: ${props => (props.isActive ? '#000000' : 'intial')};
  border: 1px solid black;
  color: ${props => (props.isActive ? '#ffffff' : 'intial')};
  cursor: pointer;
  display: flex;
  height: 25px;
  justify-content: center;
  margin: 0 5px;
  width: 25px;

  :first-of-type {
    margin-left: 0;
  }

  :last-of-type {
    margin-right: 0;
  }

  :hover {
    background: #cccccc;
  }
`

export const PaginationButtons = ({
  elementsCount,
  pageSize,
  page,
  setPage,
}) => {
  const pagesNumber = Math.floor(elementsCount / pageSize)
  const pagesButtons = []

  for (let i = 1; i <= pagesNumber; i++) {
    pagesButtons.push(
      <PaginationButton
        key={i}
        onClick={() => setPage(i)}
        isActive={i === page}
      >
        {i}
      </PaginationButton>,
    )
  }

  return <ButtonsWrapper>{pagesButtons}</ButtonsWrapper>
}
