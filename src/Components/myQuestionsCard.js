import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {questionReaction} from "../store/actions/reactions";
import deleteQuestion from "../store/actions/deleteQuestion";
import editQuestion from "../store/actions/editQuestion";

const MyQuestionCard = (data) => {
    const User = useSelector((state)=>state.authReducer.USER)
    const dispatch=useDispatch();
    const [edit,setEdit]=useState(false)
    const [question,setQuestion]=useState(data.data.question)


        return(
            <div>
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">You asked:</strong>
                        <h3 className={`mb-0 ${(edit)?'d-none':'d-block'}`}>{data.data.question}</h3>
                        <div className={` row  ${(edit)?'d-flex':'d-none'}`}>
                            <div className="col-11 p-0 d-flex justify-content-center align-items-center">
                                <input className='answer-input-active' value={question} onChange={(event)=>{setQuestion(event.target.value)}}/>
                            </div>
                            <div onClick={()=>{dispatch(editQuestion(User.access_token,data.data.id,question,User.id));setEdit(false);}} className="col-1 btn btn-success d-flex justify-content-center align-items-center" >
                                <p style={{padding:0,margin:0}}>Save</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-2 ">
                                <div className="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green"
                                         className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                    </svg>
                                    {` ${data.data.likes}`}
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div  className="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                         className="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"/>
                                    </svg>
                                    {` ${data.data.dislikes}`}
                                </div>
                            </div>
                            <div className="col-md-5">
                                <Link to={`/question/${data.data.id}/${data.data.question}`}>
                                    <div className="btn btn-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                            <path
                                                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                            <path
                                                d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                        {' Answer'}
                                    </div>
                                </Link>
                            </div>
                            <div className={`col-md-2 ${(User.id===data.data.author_id)?'answer-active':'answer'}`}>
                                <div  onClick={()=>{setEdit(!edit)}} className={`btn btn-outline-dark btn-secondary text-white`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                         className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path
                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    {` Edit`}
                                </div>
                            </div>
                            <div className={`col-md-1 ${(User.id===data.data.author_id)?'answer-active':'answer'}`}>
                                <div onClick={()=>{dispatch(deleteQuestion(User.access_token,data.data.id,User.id));;}} className={`btn btn-outline-danger text-white`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"
                                         className="bi bi-trash" viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd"
                                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}
export default MyQuestionCard;
