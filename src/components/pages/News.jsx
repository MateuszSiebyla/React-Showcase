import { useState, useEffect } from 'react'
import axios from 'axios'
import { Page } from '../layout'
import { NewsList } from '../parts/NewsList'
import { PaginationButtons } from '../parts/PaginationButtons'

export const News = () => {
  const NEWS_PER_PAGE = 10
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        )
        const data = response.data

        setNews(data)
      } catch {
        console.log('Could not fetch news.')
      }
    }
    loadNews()
  }, [])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [page])

  return (
    <Page>
      <h1>News - {page}</h1>
      <PaginationButtons
        elementsCount={news.length}
        pageSize={NEWS_PER_PAGE}
        page={page}
        setPage={setPage}
      />

      <NewsList news={news} page={page} pageSize={NEWS_PER_PAGE} />

      <PaginationButtons
        elementsCount={news.length}
        pageSize={NEWS_PER_PAGE}
        page={page}
        setPage={setPage}
      />
    </Page>
  )
}
