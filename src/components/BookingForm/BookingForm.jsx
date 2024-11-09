import React, { useState } from "react"
import css from "./BookingForm.module.css"

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic
  }

  return (
    <>
      <p className={css.bookingTitle}>Book your campervan now</p>
      <p className={css.bookingSubTitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit} className={css.bookingForm}>
        <input
          className={css.formInput}
          type='text'
          name='name'
          placeholder='Name*'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className={css.formInput}
          type='email'
          name='email'
          placeholder='Email*'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className={css.formInput}
          type='text'
          name='date'
          placeholder='Booking date*'
          value={formData.date}
          onChange={handleChange}
        />
        <textarea
          name='comment'
          placeholder='Comment'
          value={formData.comment}
          onChange={handleChange}
        />

        <button className={css.formBtn} type='submit'>
          Send
        </button>
      </form>
    </>
  )
}

export default BookingForm
