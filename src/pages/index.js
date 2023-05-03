import * as React from "react"
import { Scrollbars } from 'react-custom-scrollbars';
import Layout from "../components/layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Home" />
  <Hero />
  <Trips heading="Destinos favoritos" />
  <Testimonials />
  <Stats />
  <Email />
  </Layout>
)

export default IndexPage
