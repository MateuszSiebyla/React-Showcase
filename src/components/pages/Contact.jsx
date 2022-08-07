import { useState, useEffect } from 'react' 
import { Page } from '../layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setName, setEmail, setPhone, setMessage, setRodo, resetForm } from '../../store/contactFormSlice'
import styled from 'styled-components';

const ContactName = styled.p`
    display: inline-block;
    text-decoration: none;
    color: #000000;
    line-height: 1;
    font-weight: 600; 
    display: flex;
`

const ContactInputField = styled.input`
    padding: 5px;
    width: 35%;
    background-color: #f0f0f0;
    color: #000000;
    padding: 14px 20px;
    margin: 8px 0;
    border-radius: 4px;
    cursor: pointer;
`

const SubmitButtonStyle = styled.input.attrs({ 
    type: 'submit',
  })`
    background-color: #4f4e4d
    border-radius: 4px;
    color: #000000;
    padding: 15px 30px;
    text-decoration: none;
    cursor: pointer;
`
const ContactInputFieldRODO = styled.input`
    cursor: pointer;
`

export const Contact = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const name = useSelector(state => state.contactForm.name)
    const email = useSelector(state => state.contactForm.email)
    const phone = useSelector(state => state.contactForm.phone)
    const message = useSelector(state => state.contactForm.message)
    const rodo = useSelector(state => state.contactForm.rodo)

    useEffect(() => {
        dispatch(resetForm())
    }, [dispatch])

    const formSubmitHandler = (e) => {
        e.preventDefault()
        setError('')

        if (!name || !email || !phone || !message) {
            setError('You need to fill in all fields')
        } else if (!rodo) {
            setError('You need to accept the RODO')
        } else {
            const formData = {
                name,
                email,
                phone,
                message,
                rodo
            }
    
            console.log('Here should be post request with formData: ', formData)
            navigate('/contact/summary')
        }    
    }

    return (
        <Page>
            <h1>Contact form</h1>

            <form onSubmit={formSubmitHandler}>
                <div>
                <ContactInputField type="text" name="name" value={name} placeholder="First and last name *" onChange={(e) => dispatch(setName(e.target.value))} />
                </div>
                <div>
                <ContactInputField type="text" name="email" value={email} placeholder="Email *" onChange={(e) => dispatch(setEmail(e.target.value))} />
                </div>
                <div>
                <ContactInputField type="text" name="phone" value={phone} placeholder="Phone number *" onChange={(e) => dispatch(setPhone(e.target.value))} />
                </div>
                <div>
                <ContactInputField type="textarea" name="message" value={message} placeholder="Text your message *" onChange={(e) => dispatch(setMessage(e.target.value))} />
                </div>
                <br />
                <div>           
                <ContactInputFieldRODO type="checkbox" name="rodo" checked={rodo} onChange={() => dispatch(setRodo(!rodo))} />
                <label> I agree with the terms of RODO. *</label> 
                </div>
                <br />
                <div>                    
                <SubmitButtonStyle type="submit" value="Send Message" />
                </div>
                { error && (<div>{error}</div>) }
            </form>
        </Page>
    )
}