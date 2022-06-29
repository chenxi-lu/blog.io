import * as React from "react"
import { Link } from "gatsby"

import "./index.less"
const Header = () => {
  const tabs = [
    ["Video", "别样人生", '/vlog'],
    ["Music", "跳动音符", '/music'],
    ["Photos", "时光印记", '/photos'],
    ["Technics", "八股文", '/technics'],
    ["Funny", "生活趣味", '/funny']
  ]
  return (
    <header className="header-wrap">
      <div className="content">
          <span className="title">PP7' Microcosm</span>
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
