import React from 'react';
import Renewals from './components/UpcomingRenewals';
import Recommended from './components/Recommended';
import Selling from './components/Selling';
import What_can from './components/What_can';

const index = () => {
  return (
    <div className='home_container'>
        <Renewals />
        {/* <Recommended /> */}
        <Selling />
        {/* <What_can /> */}
    </div>
  )
}

export default index
