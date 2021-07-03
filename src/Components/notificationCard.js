import React from 'react'
import '../styles/notificationCard.scss'

const NotificationCard = ({data}) => {
    return(
        <div className="container notf-text">
            <p style={{fontSize:'0.9rem'}}>{data.author_answer_name} answered your question</p>
        </div>
    )
}
export default NotificationCard;
