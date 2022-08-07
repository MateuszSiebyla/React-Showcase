import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Page } from '../layout'

const PostTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`

const PostUser = styled.h4`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
`

const PostId = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #222222;
`

const PostBody = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
`

export const SingleNews = () => {
  const { id } = useParams()

  const [post, setPost] = useState({})
  const [author, setAuthor] = useState({})

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        )
        const postData = postResponse.data

        const authorRespose = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`,
        )
        const authorData = authorRespose.data

        setPost(postData)
        setAuthor(authorData)
      } catch {
        console.log('Could not fetch post or author data.')
      }
    }
    loadPost()
  }, [id])

  return (
    <Page>
      <PostTitle>
        {post?.title}
        <PostId> (Post ID: {post?.id}) </PostId>
      </PostTitle>
      <PostUser>Author: {author?.name}</PostUser>
      <PostBody>{post?.body}</PostBody>
    </Page>
  )
}
