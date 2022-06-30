import * as React from "react"
import Body from "../components/body"
import Counter from '../components/Counter';
import { useSelector } from 'react-redux';

const Root =  () => {
  let counterTab = useSelector(state => state.HeaderReducer.currentTab);
  return (
    <Body>
      <h1>{counterTab}</h1>
      <Counter/>
    </Body>
  )
}

export default Root;