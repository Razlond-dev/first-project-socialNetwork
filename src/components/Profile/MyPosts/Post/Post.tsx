import React, { useState } from 'react';
import s from './Post.module.css'
import postPhoto from '../../../../assets/images/userPhoto.png'
import { Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
type PropsType = {
  message: string
  likeCount: number
}

const Post: React.FC<PropsType> = (props) => {
  let [likeCount, setLikeCount] = useState(props.likeCount)

  const like = () => {
    setLikeCount(props.likeCount + 1)
  }

  return (
    <div className={`${s.item} ${s.active}`}>
      <img style={{ padding: 10 }} src={postPhoto} alt="post" />
      {props.message}
      <div>
        <Button onClick={like}><LikeOutlined />Like</Button> {likeCount}
      </div>
    </div >
  )
}

export default Post
