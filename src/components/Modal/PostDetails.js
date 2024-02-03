import React from 'react'

const PostDetails = ({post}) => {
    return (
        <div className='modal-data'>
            <div className='post-image-viewer'>

            </div>
<div className='post-details'>
            <div className='user-details'>
                <div className='avatar'>
                    <img src={post.creator.profile_picture_url} alt={"@" + post.creator.username} />
                </div>
                <h2 className='name'>{post.creator.name}</h2>
            </div>
            
            <form className='form-container'>

             
            </form>

            <div><span className='text-muted'>Already a member?</span><Link className='link' to="/">Sign In</Link></div>
        </div>


        </div>
        
    )
}

export default PostDetails