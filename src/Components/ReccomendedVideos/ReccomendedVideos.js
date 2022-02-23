import React from 'react'
import './ReccomendedVideos.css'
import VideoCard from './VideoCard/VideoCard'
const videoCardDetails=[
    {
        uniqueId:1,
        title:'Become a Full Stack developer in 90 Days',
        views:'2.3M Views',
        timestamp:'3 days ago',
        channelImage:'https://res.cloudinary.com/maheshsf9/image/upload/v1610032261/startup_pt4lbs.png',
        channel:'Mahesh',
        image:'https://res.cloudinary.com/maheshsf9/image/upload/v1612282192/bg_wr6q4t.jpg',
    },
    {
        uniqueId:2,
        title:'Become a web developer in 90 Days',
        views:'2.3M Views',
        timestamp:'3 days ago',
        channelImage:'https://res.cloudinary.com/maheshsf9/image/upload/v1610032261/startup_pt4lbs.png',
        channel:'Mahesh',
        image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg',
    },
    {
        uniqueId:3,
        title:'Become a web developer in 90 Days',
        views:'2.3M Views',
        timestamp:'3 days ago',
        channelImage:'https://res.cloudinary.com/maheshsf9/image/upload/v1610032261/startup_pt4lbs.png',
        channel:'Mahesh',
        image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg',
    },
    {
        uniqueId:4,
        title:'Become a web developer in 90 Days',
        views:'2.3M Views',
        timestamp:'3 days ago',
        channelImage:'https://res.cloudinary.com/maheshsf9/image/upload/v1610032261/startup_pt4lbs.png',
        channel:'Mahesh',
        image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg',
    },
    {
        uniqueId:5,
        title:'Become a web developer in 90 Days',
        views:'2.3M Views',
        timestamp:'3 days ago',
        channelImage:'https://res.cloudinary.com/maheshsf9/image/upload/v1610032261/startup_pt4lbs.png',
        channel:'Mahesh',
        image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg',
    },
    {
        uniqueId:6,
        title:'Become a web developer in 90 Days',
        views:'2.3M Views',
        timestamp:'3 days ago',
        channelImage:'https://res.cloudinary.com/maheshsf9/image/upload/v1610032261/startup_pt4lbs.png',
        channel:'Mahesh',
        image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg',
    },
    {
        uniqueId:7,
        title:'Become a web developer in 90 Days',
        views:'2.3M Views',
        timestamp:'3 days ago',
        channelImage:'https://res.cloudinary.com/maheshsf9/image/upload/v1610032261/startup_pt4lbs.png',
        channel:'Mahesh',
        image:'https://res.cloudinary.com/maheshsf9/image/upload/v1611889198/hiking-1246836_1920_jxdgdu.jpg',
    },
]
const ReccomendedVideos=()=>{
    return (
        <div className='reccomended-videos'>
            <h2>Recommended</h2>
            <div className='reccomended-videos_videos'>
                {videoCardDetails.map(eachVideo=><VideoCard videoCardDetails={eachVideo} key={eachVideo.uniqueId}/>)}
            </div>             
        </div>
    )
}

export default ReccomendedVideos
