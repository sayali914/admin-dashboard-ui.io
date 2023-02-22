import React from 'react'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './FeaturedInfo.css'
function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revanue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>-11.4
            <ArrowDownwardRoundedIcon className='featuredIcon-negative'/></span>
        </div>
        <span className='featureSub'>Compare to last month</span>
      </div>

      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$4,415</span>
          <span className='featuredMoneyRate'>-1.4
            <ArrowDownwardRoundedIcon className='featuredIcon-negative'/></span>
        </div>
        <span className='featureSub'>Compare to last month</span>
      </div>

      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,225</span>
          <span className='featuredMoneyRate'>+2.4
            <ArrowUpwardRoundedIcon className='featuredIcon'/></span>
        </div>
        <span className='featureSub'>Compare to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo