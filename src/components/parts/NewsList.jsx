import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleNews = styled.div`
  border: 1px solid #cccccc;
  padding: 20px;
  border-radius: 24px;
  margin: 12px 0;
`

const SingleNewsTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`

const ReadMoreButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #000000;
  border-radius: 100px;
  text-decoration: none;
  color: #000000;
  line-height: 1;
  font-weight: 600;

  :hover {
    color: #ffffff;
    background: #000000;
  }
`

export const NewsList = ({ news, page, pageSize }) => {
  const listedNews = news
    .filter(el => el.id > (page - 1) * pageSize && el.id < page * pageSize + 1)
    .map(post => (
      <SingleNews key={post.id}>
        <SingleNewsTitle>{post.title}</SingleNewsTitle>
        <ReadMoreButton to={`/news/${post.id}`}>Read more</ReadMoreButton>
      </SingleNews>
    ))

  return <>{listedNews}</>
}
