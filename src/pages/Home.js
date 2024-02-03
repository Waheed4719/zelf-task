import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../components/Table';
import Posts from '../components/Posts';
import useContentApi from '../hooks/useContentApi';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth0()
  const { data, loading } = useContentApi()
    if(!isAuthenticated) {
      navigate('/registration')
    }
  console.log(data, loading)

  const videos = data?.data && data?.data.length > 0 ? data.data.filter(item => item.content.content_form === 'VIDEO') : []
  return (
    <div className='home' style={{ width: '100%' }}>

      <Table data={videos ?? []} />
      <Posts data={data}/>
    </div>
  )
}

export default Home