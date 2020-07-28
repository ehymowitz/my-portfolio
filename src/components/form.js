import React from "react"

export default function ContactForm() {
  return (
    <div className="contact">
      <form name="contact" className="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <h1>Ask me any question!</h1>
        <p>
          <label htmlFor="name">Name</label>
          <input aria-label="name" type="text" name="name" required/>
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input aria-label="email" type="email" name="email" required/>
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea aria-label="message" rows="4" name="message" required/>
        </p>
        <button type="submit">Send!</button>
      </form>
    </div>
  )
}
