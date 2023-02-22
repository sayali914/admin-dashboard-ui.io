import React from 'react'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../featuredinfo/FeaturedInfo'
import './home.css'
import { userData } from '../../../dummyData'
import WidgetSm from '../../widgetsm/WidgetSm'
import WidgetLg from '../../widgetlg/WidgetLg'

function Home() {
  return (
    <div className='home'>
     <FeaturedInfo/>
     <Chart data={userData} 
            title='User Analytics' 
            grid 
            dataKey='Active User'/>
    
        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home