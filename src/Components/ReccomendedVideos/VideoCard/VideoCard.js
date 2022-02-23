import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css'
const VideoCard = (props) =>{
    const{videoCardDetails}=props
    const {image,title,channel,views,timestamp,channelImage} = videoCardDetails
    return (
        <div className='videoCard'>
            <img className='videoCard_thumbnail'src={image} alt=''/>
            <div className='videoCard_info'>
            <Avatar src={channelImage} alt={channel} className='video_avatar'/>
            <div className='videoCard-text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} . {timestamp}</p>

            </div>
            </div>
        </div>
    )
}

export default VideoCard
