import React, { useCallback } from 'react'
import OpinionModel from '../../models/opiniones'
export default function CommentForm(props) {

    const[inputData, setInputData] = React.useState({
        username:'',
        text:'',
        stars:0,
    })

    function onChangeHandler(e){
        setInputData({
            ...inputData,
            [e.target.name]:e.target.value
        })
    }

    function sendComment(){
        if(inputData.username.length > 0 && inputData.text.length > 0 && inputData.stars > 0 && inputData.stars <= 5){
            props.setOpiniones([...props.opiniones, new OpinionModel(props.localId, inputData.username, inputData.text, inputData.stars)])
            setInputData({
                username:'',
                text:'',
                stars:0
            })
            alert('Comment Sent')
        }else{
            alert('Comment Invalid')
        }
        
    }    

  return (
    <div className='flex flex-col h-64 bg-sand p-4 mb-4 rounded-md'>
        <h2 className="font-bold mb-2">Let us Know your opinion:</h2>
        <div className="flex flex-col flex-1 gap-2">
            <input value={inputData.username} className="w-full p-2 border-black rounded-md border-2" name="username" placeholder='Enter your username' onChange={(e)=> onChangeHandler(e)}></input>
            <textarea value={inputData.text} className="flex-1 w-full p-2 border-black rounded-md border-2" name="text" maxLength={128} placeholder='Enter your comment' onChange={(e)=> onChangeHandler(e)}>
            </textarea>
            <div className="flex justify-between items-center" >
                <div >
                    <label className= "mr-2" htmlFor="stars">Stars:</label>
                    <input className="p-1 border-black rounded-md border-2" name="stars" type='number' id="stars" max={5} min={0} onChange={(e)=> onChangeHandler(e)} value={inputData.stars}></input>
                </div>
                <button className="p-2 rounded-xl bg-midnight text-white" onClick={sendComment}>Comment</button>
            </div>
            
        </div>
    </div>
  )
}
