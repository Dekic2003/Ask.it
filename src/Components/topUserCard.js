import React from "react";
import '../styles/topUserCard.scss'

const TopUserCard = (data) => {
    console.log(data)
    return(
        <div className="top-user-card mt-2">
            <div>
                <h6>{data.data.email}</h6>
            </div>
            <div className="row">
                <div className="col-6">
                    <p className="text-success fw-bold">Answers: {data.data.answers}</p>
                </div>
                <div className="col-6">
                    <p>Questions: {data.data.questions}</p>
                </div>
            </div>

        </div>
    )
}
export default TopUserCard;
