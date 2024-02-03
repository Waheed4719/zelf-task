import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../components/Table';
import Posts from '../components/Posts';
import useContentApi from '../hooks/useContentApi';
import { useAuth0 } from '@auth0/auth0-react';
import { PrimaryButton, SecondaryButton } from '../components/Button';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0()
  const [page, setPage] = useState(1);
  const { data, loading } = useContentApi(page)

  const totalPages = data?.total_contents ? Math.ceil(data?.total_contents / data.page_size) : 1;

  const videos = data?.data && data?.data.length > 0 ? data.data.filter(item => item.content.content_form === 'VIDEO') : []

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  if (!isAuthenticated) {
    navigate('/registration')
  }
  return (
    <div className='home' style={{ width: '100%' }}>

      <Table data={videos ?? []} />
      <Posts data={data} loading={loading} />
      <div className='pagination'>
        <SecondaryButton disabled={page === 1} onClick={handlePreviousPage}>Previous</SecondaryButton>
        
        {Array(Math.max(totalPages, 1)).fill(0).map((_, index) => {
          if (index + 1 == page) {
            return <PrimaryButton key={index} onClick={() => setPage(index + 1)}>{index + 1}</PrimaryButton>
          }
          return <SecondaryButton key={index} onClick={() => setPage(index + 1)}>{index + 1}</SecondaryButton>

        })}

        <SecondaryButton disabled={page === totalPages} onClick={handleNextPage}>Next</SecondaryButton>
      </div>
    </div>
  )
}

export default Home