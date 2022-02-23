import React from 'react'
import './SideBar.css'
import SideBarRow from './SideBarRow/SideBarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function SideBar() {
    return (
        <div className='sidebar-container'>
            <SideBarRow selected Icon={HomeIcon} title='Home'/>
            <SideBarRow Icon={WhatshotIcon} title='Trending'/>
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription'/>
            <hr/>
            <SideBarRow Icon={VideoLibraryIcon} title='Library'/>
            <SideBarRow Icon={HistoryIcon} title='History'/>
            <SideBarRow Icon={OndemandVideoIcon} title='Your Videos'/>
            <SideBarRow  Icon={WatchLaterIcon} title='Watch Later'/>
            <SideBarRow Icon={ThumbUpOutlinedIcon} title='Liked Videos'/>
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title='Show more'/>
        </div>
    )
}

export default SideBar
