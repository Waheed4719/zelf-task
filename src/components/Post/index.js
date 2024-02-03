import React from 'react'
import ThumbsUpIcon from '../../assets/images/thumbs_up.svg'
import CommentsIcon from '../../assets/images/comments.svg'
import EyeIcon from '../../assets/images/eye-icon.svg'
import './index.css'
import { formatNumber } from '../../utils'
import InstagramMiniIcon from '../../assets/images/instagram-colored-mini.svg'
import TiktokMiniIcon from '../../assets/images/tiktok-colored-mini.svg'
import UserIcon from '../../assets/images/user-icon.png'


const Post = ({ post, onClick }) => {

  const getPlatformIcon = (platform = 'instagram') => {
    switch (platform) {
      case 'instagram':
        return InstagramMiniIcon
      case 'tiktok':
        return TiktokMiniIcon
      default:
        return InstagramMiniIcon
    }
  }

  return (
    <div onClick={onClick}>
      <div className='img-container'>
        <img src={post.content.thumbnail_url} />
        <div className='img-container-footer'>
          <div className='user-details'>
          <div className='avatar'>
            <img src={post.creator.profile_picture_url} alt={"@" + post.creator.username} onError={(e)=>e.target.src=UserIcon}/>
          </div>
          <div className='name'>{post.creator.name.split(' | ')[0]}</div>
          </div>
          <div className='platform'>  
            <img src={getPlatformIcon(post.content.platform)} alt={post.content.platform} />
          </div>
        </div>
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