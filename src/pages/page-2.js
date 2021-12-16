import * as React from "react"
import { Link } from "gatsby"

import Body from "../components/body"
import Seo from "../components/seo"

const SecondPage = () => (
  <Body>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Body>
)

export default SecondPage
