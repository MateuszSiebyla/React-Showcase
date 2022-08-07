import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  rodo: false,
}

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setMessage: (state, action) => {
      state.message = action.payload
    },
    setRodo: (state, action) => {
      state.rodo = action.payload
    },
    resetForm: state => {
      state.name = initialState.name
      state.email = initialState.email
      state.phone = initialState.phone
      state.message = initialState.message
      state.rodo = initialState.rodo
    },
  },
})

export const { setName, setEmail, setPhone, setMessage, setRodo, resetForm } =
  contactFormSlice.actions

export default contactFormSlice.reducer
