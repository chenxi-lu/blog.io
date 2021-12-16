import * as React from "react"
import { Link } from "gatsby"

import "./index.less"
const Header = () => {
  const tabs = [
    ["Video", "视频", '/blog.io/vlog'],
    ["Music", "音乐", '/blog.io/music'],
    ["Photos", "相册", '/blog.io/photos'],
    ["Technics", "技术", '/blog.io/technics']
  ]
  return (
    <header className="header-wrap">
      <div className="content">
          <span className="title">PP7' Blog</span>
          <div className="tabs">
            {tabs.map((item, index) => {
              return (
                <Link className="tab" to={item[2]} key={index}>
                  <div className="item">{item[0]}</div>
                  <div className="note">{item[1]}</div>
                </Link>
              )
            })}
          </div>
      </div>
    </header>
  )
}

export default Header
