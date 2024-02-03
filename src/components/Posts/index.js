import React, { useState } from 'react'
import Post from '../Post'
import './index.css'
import Modal from '../Modal'

const Posts = ({ data }) => {
    const [postId, setPostId] = useState(null)
    console.log('postId', postId)
    return (
        <div className='posts-container'>
            <h3>All Posts <span>( {data.total_contents} posts )</span></h3>
            <div className='posts' >
                {data?.data?.map((item) => <Post key={item.content.id} post={item} onClick={() => setPostId(item.content.id)} />)}
            </div>

            {postId && <Modal open={postId} data={data?.data?.filter((item) => item.content.id === postId)} onClose={() => setPostId(null)} />}Í
        </div>
    )
}

export default Posts