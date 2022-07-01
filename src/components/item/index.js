import * as React from "react"
import { Link } from "gatsby"

import "./index.less"
const Item = ({bgImg, title, link}) => {
  return (
    <a className="item-wrap" href={link} target="_blank">
      <img src={bgImg}></img>
      <span className="title">{title}</span>
    </a>
  )
}

export default Item
