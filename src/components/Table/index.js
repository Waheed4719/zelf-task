import React from 'react'
import './index.css'
import PlaceholderAvatar from '../../assets/images/user-icon.png';
import SorterIcon from '../../assets/images/sort-icon.png'
import PlayIcon from '../../assets/images/play-btn.png'
import { Link } from 'react-router-dom'
import { getIcon } from '../../utils'
import { formatNumber } from '../../utils';

const headers = [
  {
    label: 'Date',
    key: 'date',
    maxWidth: '100px'
  },
  {
    label: 'Video',
    key: 'video',
    maxWidth: '300px'
  },
  {
    label: 'Creator',
    key: 'creator',
    maxWidth: '200px'
  },
  {
    label: 'Handle',
    key: 'handle',
    maxWidth: '150px'
  },
  {
    label: 'Platform',
    key: 'platform',
    maxWidth: '150px',
    align: 'center'
  },
  {
    label: 'Total Views',
    key: 'totalViews',
    maxWidth: '150px',
    sorter: true,
    justifyContent: 'center'
  },
  {
    label: 'Total Engagement',
    key: 'totalEngagement',
    maxWidth: '150px',
    sorter: true,
    justifyContent: 'center'
  },
  {
    label: 'Engagement Rate',
    key: 'engagementRate',
    maxWidth: '120px',
    sorter: true,
    justifyContent: 'center'
  },
  {
    label: 'Action',
    key: 'action',
    maxWidth: '100px',
    justifyContent: 'flex-end'
  }
]




const Table = ({ data }) => {

  const getEngagementRate = (item) => {
    return `${Math.round((item.content.total_engagement / item.content.creator_follower_count) * 100)}%`
  }

  const getFormattedDate = (date) => {
    // const d = new Date(date);
    // return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`

    const dateObject = new Date(date);
    const monthAbbreviation = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObject);

    const result = `${monthAbbreviation} ${dateObject.getDate()}`;
    return result
  }
  return (
    <div className='table-container'>
      <table className="table">
        <tr>
          {headers.map((header, index) => {
            return (
              <th key={index} style={{ width: header.width, maxWidth: header.maxWidth, paddingRight: index === headers.length - 1 && 40 }}><div style={{ justifyContent: header.justifyContent }}>
                <div>{header.label}</div>
                {header.sorter && <div><img src={SorterIcon} /></div>}
              </div>
              </th>
            )
          })}
        </tr>

        {
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{getFormattedDate(item.content.timestamp)}</td>
                <td>
                  <div className='video'>
                    <img className='play-icon' src={PlayIcon} />
                    <a
                      href={item.content.external_url}
                      target="_blank"
                      rel="noreferrer"
                    >{item.content.title}</a>
                  </div>
                </td>
                <td>
                  <div className='creator'>
                    <div className='avatar'>
                      <img src={item.creator.profile_picture_url} alt={"@" + item.creator.username} onError={(e)=>e.target.src=PlaceholderAvatar}/>
                    </div>
                    <div>@{item.creator.username}</div>
                  </div>

                </td>
                <td>
                  <div>{item.creator.username}</div>
                </td>
                <td>
                  <div>{<img src={getIcon(item.content_platform)} />}</div>
                </td>
                <td>
                  <div>{formatNumber(item.content.views)}</div>
                </td>
                <td>
                  <div>{formatNumber(item.content.total_engagement)}</div>
                </td>
                <td>
                  <div>{getEngagementRate(item)}</div>
                </td>
                <td>
                  <div className='action'>
                    <Link to={'/view-post'}>View Post</Link>
                  </div>
                </td>
              </tr>
            )
          })
        }
      </table></div >
  )
}

export default Table