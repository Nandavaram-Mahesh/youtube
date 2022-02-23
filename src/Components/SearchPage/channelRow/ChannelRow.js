import React from 'react'
import './ChannelRow.css'
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';
const ChannelRow= (props)=> {
    const {channelDetails} = props
    const{description,image,channel,verified,subs,noOfVideos}=channelDetails
    return (
        <div className='channelRow'>
            <Avatar className='channelRow_avatar' alt={channel} src={image}/>
            <div className='channelRow_text'>
                <h4>{channel} {verified && <VerifiedIcon/>}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ChannelRow
