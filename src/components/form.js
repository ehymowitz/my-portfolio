import React from "react"

export default function ContactForm() {
  return (
    <form class="contact-form" name="contact" method="POST" data-netlify="true">
      <h1>Ask me any question!</h1>
      <p>
        <label>Name</label>
        <input type="text" name="name" />
      </p>
      <p>
        <label>Email</label>
        <input type="email" name="email" />
      </p>
      <p>
        <label>Message</label>
        <textarea name="message"></textarea>
      </p>
      <button type="submit">Send</button>
    </form>
  )
}
