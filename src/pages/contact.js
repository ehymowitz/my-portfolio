import React from "react"
import ContactForm from "../components/form"
import Layout from "../components/fixed/layout"

export default function ContactPage() {
  return (
    <Layout>
      <div style={{
        padding: "20px",
        maxWidth: "80vw",
        margin: "auto"
      }}>
        <ContactForm />
      </div>
    </Layout>
  )
}

