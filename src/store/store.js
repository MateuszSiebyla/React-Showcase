import { configureStore } from '@reduxjs/toolkit'
import contactFormSlice from './contactFormSlice'

export const store = configureStore({
  reducer: {
    contactForm: contactFormSlice
  },
})
