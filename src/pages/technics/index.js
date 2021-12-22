import * as React from "react"
import { Link } from "gatsby"
import { Tabs } from 'antd'
import Body  from "../../components/body"
import Item from "../../components/item"
import { article } from '../../configs/data/article'
import { knowledgeTitles } from '../../configs/data/knowledge'

import "./index.less"
const { TabPane } = Tabs
const Technics = () => {
  const articles = article
  const knowledgeList = knowledgeTitles
  return (
    <Body>
      <div className="articles">
        <h5>文章摘录</h5>
        {articles.map((value, index) => {
          const {img, title, link} = value
          return <Item bgImg={img} title={title} link={link}/>
        })}
      </div>
      <div className="knowledge">
        <h5>关于JS</h5>
        <Tabs tabPosition="left">
          {knowledgeList.map((value, index) => {
            return <TabPane tab={value} key={index}>{value}</TabPane>
          })}
        </Tabs>
        
      </div>
      
    </Body>
  )
}

export default Technics
