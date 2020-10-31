import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={`${s.item} ${s.active}`}>
      <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="" />
      {props.message}
      <div>
        <button>Like</button> {props.likeCount}
      </div>
    </div>
  )
}

export default Post
