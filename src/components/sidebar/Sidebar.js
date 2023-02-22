import React from 'react'
import '../sidebar/sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to='/' className='link'>
                    <li className='sidebarListItem active'>
                     <LineStyleIcon className='sidebarIcon'/>
                     Home
                    </li>
                    </Link>
                    <li className='sidebarListItem'>
                     <TimelineIcon className='sidebarIcon'/>
                     Analytics
                    </li>
                    <li className='sidebarListItem'>
                     <TrendingUpIcon className='sidebarIcon'/>
                    Sales
                    </li>
                </ul>


            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to='/users' className='link'>
                    <li className='sidebarListItem'>
                     <PeopleOutlineIcon className='sidebarIcon'/>
                     Users
                    </li>
                    </Link>
                    <Link to='/products'className='link'>
                    <li className='sidebarListItem'>
                     <Inventory2Icon className='sidebarIcon'/>
                     Products
                    </li>
                    </Link>
                    <li className='sidebarListItem'>
                     <PaidIcon className='sidebarIcon'/>
                    Transactions
                    </li>
                    <li className='sidebarListItem'>
                     <AssessmentIcon className='sidebarIcon'/>
                    Reports
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                     <MailOutlineIcon  className='sidebarIcon'/>
                     Mail
                    </li>
                    <li className='sidebarListItem'>
                     <DynamicFeedIcon className='sidebarIcon'/>
                     Feedback
                    </li>
                    <li className='sidebarListItem'>
                     <ChatBubbleOutlineIcon className='sidebarIcon'/>
                    Messages
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                     <PortraitRoundedIcon className='sidebarIcon'/>
                    Manage
                    </li>
                    <li className='sidebarListItem'>
                     <TimelineIcon className='sidebarIcon'/>
                     Analytics
                    </li>
                    <li className='sidebarListItem'>
                     <ReportRoundedIcon className='sidebarIcon'/>
                   Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar