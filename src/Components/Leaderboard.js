import React from 'react'
import '../styles/Leaderboard.scss'
import TopUserCard from "./topUserCard";

const Leaderboard = (data) => {
    return(
    <div className="leaderboard-card">
        <div className="border-bottom border-dark rounded-bottom bg-light p-3">
            <h4>Top users</h4>
        </div>
        <div className="leaderboard-card-table d-flex align-items-center flex-column">
            {
                data.data.map((item,i)=>{
                    return <TopUserCard data={item}/>
                })
            }
        </div>
    </div>)
}
export default Leaderboard;
