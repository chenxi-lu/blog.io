import * as React from "react"
import { Link } from "gatsby"

import Body from "../components/body"
import Seo from "../components/seo"

const UsingDSG = () => (
  <Body>
    <Seo title="Using DSG" />
    <h1>Hello from a DSG Page</h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Body>
)

export default UsingDSG
