import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  <Hero />
  <Trips heading="Destinos favoritos" />
  <Testimonials />
  <Stats />
  </Layout>
)

export default IndexPage
