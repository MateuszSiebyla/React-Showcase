import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/layout'
import { Home, News, SingleNews, Contact, ContactSummary } from './components/pages'

const AppWrapper = styled.div`
  font-family: sans-serif;
`

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/news" element={<News />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/contact/summary" element={<ContactSummary />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
