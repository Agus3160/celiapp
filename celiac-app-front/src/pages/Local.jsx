import React from 'react'
import {useParams} from 'react-router-dom';

export default function Local() {

    const params = useParams();
    const locals = JSON.parse(localStorage.getItem('locales'))
    const localData = locals[parseInt(params.localId)]

  return (
    <>
        <div>
            <h2>{localData.nombre}</h2>
            <p>{localData.descripcion}</p>
            <img src={localData.imagen}></img>
            <p>{localData.likes}</p>
            <p>{localData.opiniones}</p>
        </div>

    </>
  )
}
