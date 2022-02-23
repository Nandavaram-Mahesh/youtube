import React from 'react'
import './VideoRow.css'
const VideoRow = (props)=> {
    const {videoDetails} = props
    const {description,image,title,channel,views,timestamp,subs}=videoDetails
    return (
        <div className='videoRow'>
            <img className='videoRow_thumbnail'src={image} alt=''/>    
            <div className='videoRow-text'>
                <h4>{title}</h4>
                <p>{channel}.{subs} subscribers. {views} views.{timestamp}</p>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default VideoRow
