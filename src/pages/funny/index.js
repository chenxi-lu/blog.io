import * as React from "react"
import { Link } from "gatsby"
import { Tabs } from 'antd'
import Body  from "../../components/body"
import { funnySite } from '../../configs/data/extract'
import Item from "../../components/item"

import "./index.less"
const { TabPane } = Tabs
const Funny = () => {
  const sites = funnySite
  return (
    <Body>
      <div className="articles">
        <h5>枯燥生活的小趣味</h5>
        {sites.map((value, index) => {
          const {img, title, link} = value
          return <Item bgImg={img} title={title} link={link} key={index}/>
        })}
      </div>
    </Body>
  )
}

export default Funny


