import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Nicholas Ulricksen
        <br />
        n.ulricksen@gmail.com
        <br />
        <a
          href="https://github.com/ulricksennick"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/ulricksennick
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
