import React from 'react'
import ThumbsUpIcon from '../../assets/images/thumbs_up.svg'
import CommentsIcon from '../../assets/images/comments.svg'
import EyeIcon from '../../assets/images/eye-icon.svg'
import './index.css'
import { formatNumber } from '../../utils'

const Post = ({ post, onClick }) => {

  return (
    <div onClick={onClick}>
      <div className='img-container'>
        <img src={post.content.thumbnail_url} />
      </div>
      <div className='post-statistics'>
        <div className='statistic'><img src={EyeIcon} className='icon' /> {formatNumber(post.content.views)}</div>
        <div className='statistic'><img src={ThumbsUpIcon} className='icon' /> {formatNumber(post.content.likes || 0)}</div>
        <div className='statistic'><img src={CommentsIcon} className='icon' />  {formatNumber(post.content.comments)}</div>
      </div>

    </div>
  )
}

export default Post