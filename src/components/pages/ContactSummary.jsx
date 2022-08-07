import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Page } from '../layout'

export const ContactSummary = () => {
  const navigate = useNavigate()

  const name = useSelector(state => state.contactForm.name)
  const email = useSelector(state => state.contactForm.email)
  const phone = useSelector(state => state.contactForm.phone)
  const message = useSelector(state => state.contactForm.message)
  const rodo = useSelector(state => state.contactForm.rodo)

  useEffect(() => {
    if (!rodo) {
      navigate('/contact')
    }
  }, [navigate, rodo])

  return (
    <Page>
      <h1>Contact Summary</h1>
      <div>Thank you for your message!</div>
      <div>
        <b>Name: </b> {name}
      </div>
      <div>
        <b>Email: </b> {email}
      </div>
      <div>
        <b>Phone: </b> {phone}
      </div>
      <div>
        <b>Message: </b>
        <br />
        {message}
      </div>
    </Page>
  )
}
