import * as React from "react"
import { Link } from "gatsby"
import reduxStore from '../../ReduxStore';
import { useSelector } from 'react-redux';
import {setTab} from '../../Actions/HeaderAction';

import "./index.less"
const Header = () => {
  let counterTab = useSelector(state => state.HeaderReducer.currentTab);
  const tabs = [
    ["Video", "别样人生", '/vlog'],
    ["Music", "跳动音符", '/music'],
    ["Photos", "时光印记", '/photos'],
    ["Technics", "八股文", '/technics'],
    ["Funny", "生活趣味", '/funny'],
  ]
  
  return (
    <header className="header-wrap">
      <div className="content">
          <Link to='/' onClick={() => reduxStore.dispatch(setTab('index'))}>
            <span className="title">PP7' Microcosm</span>
          </Link>
          <div className="tabs">
            {tabs.map((item, index) => {
              return (
                <Link className="tab" to={item[2]} key={index} onClick={() =>
                  reduxStore.dispatch(setTab(item[0]))}>
                  <div className={counterTab === item[0] ? 'active-item' : 'item'}>{item[0]}</div>
                  <div className={counterTab === item[0] ? 'active-note' : 'note'}>{item[1]}</div>
                </Link>
              )
            })}
          </div>
      </div>
    </header>
  )
}

export default Header
