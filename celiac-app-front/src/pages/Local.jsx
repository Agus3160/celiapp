import React, { useEffect } from 'react'
import {Link, useParams} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';

export default function Local() {

    const params = useParams();
    const locals = JSON.parse(localStorage.getItem('locales'))
    const localData = locals[parseInt(params.localId)]

    const[opiniones, setOpiniones] = React.useState([])

    useEffect(() => {
      setOpiniones(JSON.parse(localStorage.getItem('opiniones')).filter(o => o.idLocal == params.localId))
    }, [localStorage])

  return (
    <>  
    <div className='m-2'>
      <Link className='text-blue-700' to={'/'}>{'<<Return'}</Link>  
    </div>
      
        <div className='mx-2'>
          <div>
            <div className='bg-sand p-4 mb-4 rounded-md'>
              <div className='flex w-full justify-between items-center'>
                <h2 className='font-bold'>{localData.nombre}</h2>
                <div>
                  <p>{`⭐${localData.likes}`}</p>
                  <a href='#' className='font-sm text-blue-700'>📍Map</a>
                </div>
              </div>
              <hr className="my-2"></hr>
              <p className=''>{localData.descripcion}</p>
              <Carousel className='my-2 rounded-md' autoPlay={true} infiniteLoop={true} renderIndicator={false} showThumbs={false} showStatus={false}>
                <div>
                  <img src={localData.imagen} />
                </div>
                <div>
                  <img src={localData.imagen} />
                </div>
                <div>
                  <img src={localData.imagen} />
                </div>
              </Carousel>
            </div>
          </div>

          <div >
            <CommentForm localId={parseInt(params.localId)} opiniones={opiniones} setOpiniones={setOpiniones}/>
          </div>

          <div>
            <h2 className='text-sand font-bold'>Comments Sections:</h2>
            <div>
              {opiniones.map(o => {
                return (
                  <Comments key={o.id} opinion = {o} />
                )
              })}
            </div>
          </div>

        </div>
    </>
  )
}
