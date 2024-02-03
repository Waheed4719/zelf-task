import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Post from '../Post'
import './index.css'
import Modal from '../Modal'

const Posts = ({ data , loading}) => {
    const [postId, setPostId] = useState(null)
    console.log('postId', postId, data)

    const modalRoot = document.getElementById('modal-root')

   

    return (
        <div className='posts-container'>
            <h3>All Posts <span>( {data.total_contents} posts )</span></h3>
            <div className='posts' >
                {data?.data?.map((item) => <Post key={item.content.id} post={item} onClick={() => setPostId(item.content.id)} />)}
                {loading && <div className='loader'>Loading...</div>}
            </div>

            {postId && ReactDOM.createPortal(
                <Modal open={postId} data={data?.data?.filter((item) => item.content.id === postId)[0]} onClose={() => setPostId(null)} />,
                modalRoot
            )}


            


        </div>
    )
}

export default Posts