import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './index.css'
const Header = ({ siteTitle, tabs }) => (
  <header className="header-wrap">
    <div className="content">
        <span className="title">PP7' Blog</span>
        <div className='tabs'>
          {tabs.map((item, index) => {
            return (
              <Link className="tab">{item}</Link>
            )
          })}
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  tabs: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
  tabs: ['technics', 'video', 'music', 'photos']
}

export default Header
