import React,{useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {Link} from 'react-router-dom'
function Header() {
    const [searchInput , setSearchInput] =useState('') 
    return (
        <div className='header'>
            <div className='header_left'>
                <MenuIcon/>
                <Link to="/">
                    <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='youtube-image'/>
                </Link>
            </div>
            <div className='input_container'>
                <input value={searchInput} onChange={e=>setSearchInput(e.target.value)} placeholder='Search' type='text' />
                <Link to={`/search/${searchInput}`}><SearchIcon className='header_searchIcon'/></Link>
                
            </div>
            <div className='header_icons'>
                <VideoCallIcon className='header_icon'/>
                <AppsIcon className='header_icon'/>
                <NotificationsIcon className='header_icon'/>
                <AccountCircleOutlinedIcon />
            </div>
        </div>
    )
}

export default Header
