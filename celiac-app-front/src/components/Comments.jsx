import React from 'react'

export default function Comments(props) {

    let commentData = props.opinion

  return (
    <div className='flex flex-col bg-sand p-4 mb-4 rounded-md'>
        <div className='flex w-full justify-between items-center'>
            <h2 className='font-bold'>{commentData.nombre}</h2>
            <span>{`⭐${commentData.estrellas}`}</span>
        </div>
        <hr className='my-2'></hr>
        <p>{commentData.texto}</p>
    </div>
  )
}
