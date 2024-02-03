import React from 'react'
import UserIcon from '../../assets/images/user-icon.png'
import ExternalLink from '../../assets/images/external-link.svg'
import { formatNumber, getIcon } from '../../utils'

const PostDetails = ({ post, onClose }) => {
    const getEngagementRate = (item) => {
        console.log(item.content.total_engagement, item.content.creator_follower_count)
        return `${Math.round((item.content.total_engagement / item.content.creator_follower_count) * 100)}%`
    }

    const postDate = new Date(post?.content?.timestamp);
    const currentDate = new Date();

    const daysAgo = Math.floor((currentDate - postDate) / (1000 * 60 * 60 * 24));

    return (
        <div className='modal-data'>
            <div className='post-image-viewer'>
                <img src={post?.content?.thumbnail_url} />
            </div>
            <div className='post-details'>
                
                <div className='user-details'>
                    <div className='avatar'>
                        <img src={post?.creator?.profile_picture_url} onError={(e) => e.target.src = UserIcon} alt={"@" + post?.creator?.username} />
                    </div>
                    <h2 className='name'>{post?.creator?.name.split(' | ')[0]}</h2>

                    <div className='daysAgo'>{daysAgo} days ago</div>
                </div>
                <div className='post-body'>
                    {post?.content?.text.length <= 100 ? (
                        <p>{post?.content?.text}</p>
                    ) : (
                        <>
                            <p>{post?.content?.text.slice(0, 100)}...<a href="#" className="read-more">Read More</a></p>

                        </>
                    )}
                </div>

                <a className='external-link' href={post?.content?.external_url}>
                    <img src={ExternalLink} /> See Original Post <img src={getIcon(post?.content?.platform)} />
                </a>
                <div className='statistics-boxes'>
                    <div className='box'>
                        <h3>{formatNumber(post?.content?.views)}</h3>
                        <div>
                            total
                            <br />
                            Views
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className='box'>
                        <h3>{formatNumber(post?.content?.likes)}</h3>
                        <div>
                            total
                            <br />
                            likes
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className='box'>
                        <h3>{formatNumber(post?.content?.comments)}</h3>
                        <div>
                            total
                            <br />
                            comments
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className='box'>
                        <h3>{getEngagementRate(post)}</h3>
                        <div>
                            Engagement
                            <br />
                            Rate
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default PostDetails