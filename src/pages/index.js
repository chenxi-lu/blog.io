import * as React from "react"
import Body from "../components/body"
import Counter from '../components/Counter';
import { useSelector } from 'react-redux';

const Root =  () => {
  let counterTab = useSelector(state => state.HeaderReducer.currentTab);
  return (
    <Body>
     {/* <div className="video">
      <iframe
        src="https://www.bilibili.com/video/BV1bs411s7zi/"
        title="U Before Me"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div> */}
    <div>
      {/* <video width="70%" controls>
        <source src={dog} type="video/mp4" />
      </video> */}
      <video width="90%" controls>
        <source src="https://api.learn-anything.cn/uploads/dog_14be0bfb5a.mp4" type="video/mp4" />
      </video>
    </div>
    </Body>
  )
}

export default Root;