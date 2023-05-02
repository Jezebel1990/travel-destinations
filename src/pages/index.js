import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  <Hero />
  <Trips heading="Destinos favoritos" />
  <Testimonials />
  </Layout>
)

export default IndexPage
