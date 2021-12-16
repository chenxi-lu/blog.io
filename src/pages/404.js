import * as React from "react"

import Body from "../components/body"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Body>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Body>
)

export default NotFoundPage
