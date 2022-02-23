import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './channelRow/ChannelRow';
import VideoRow from'./VideoRow/VideoRow'

const channelRowDetails = 
    {
    description:'You can find awesome programming videos on this channel',
    verified:true,
    subs:'2.3M',
    noOfVideos:1000,
    channel:'Full Stack Developer',
    image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg'
}

    

const videoRowDetails = [
    {
            uniqueId:1,
            description:'You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel',
            title:'Become a web developer in 90 Days',
            views:'2.3M Views',
            timestamp:'3 days ago',
            subs:'48M',
            channel:'Mahesh',
            image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg'
    },
    {
        uniqueId:2,
        description:'You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel',
        title:'Become a web developer in 90 Days',
        views:'2.3M Views',
        timestamp:'3 days ago',
        subs:'48M',
        channel:'Mahesh',
        image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg'
},
{
    uniqueId:3,
    description:'You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel',
    title:'Become a web developer in 90 Days',
    views:'2.3M Views',
    timestamp:'3 days ago',
    subs:'48M',
    channel:'Mahesh',
    image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg'
},
{
    uniqueId:4,
    description:'You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel',
    title:'Become a web developer in 90 Days',
    views:'2.3M Views',
    timestamp:'3 days ago',
    subs:'48M',
    channel:'Mahesh',
    image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg'
},
{
    uniqueId:5,
    description:'You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel',
    title:'Become a web developer in 90 Days',
    views:'2.3M Views',
    timestamp:'3 days ago',
    subs:'48M',
    channel:'Mahesh',
    image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg'
},
{
    uniqueId:6,
    description:'You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel',
    title:'Become a web developer in 90 Days',
    views:'2.3M Views',
    timestamp:'3 days ago',
    subs:'48M',
    channel:'Mahesh',
    image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg'
},
{
    uniqueId:7,
    description:'You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel,You can find awesome programming videos on this channel',
    title:'Become a web developer in 90 Days',
    views:'2.3M Views',
    timestamp:'3 days ago',
    subs:'48M',
    channel:'Nandavaram',
    image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg'
}
] 
const SearchPage=()=> {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <TuneIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <div className='searchPage_videos'>
                <ChannelRow channelDetails ={channelRowDetails}/>
            </div>
            <hr/>
            <>
                {videoRowDetails.map(eachVideo=><VideoRow videoDetails={eachVideo} key={eachVideo.uniqueId}/>)}
            </>
        </div>
    )
}

export default SearchPage
