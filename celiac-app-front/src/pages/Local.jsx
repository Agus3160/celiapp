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
                  <a target="_blank" href='https://www.google.com/maps/place/Escuela+de+Postgrado+-+UNI/@-27.306176,-55.8868837,18.44z/data=!4m6!3m5!1s0x945795deb97da0eb:0xcdf5aeb0f98f6a1f!8m2!3d-27.3064202!4d-55.8870482!16s%2Fg%2F11t1cc7whb?entry=ttu' className='font-sm text-blue-700'>📍Map</a>
                </div>
              </div>
              <hr className="my-2"></hr>
              <p className=''>{localData.descripcion}</p>
              <div className='rounded-xl'>
                <Carousel className='my-2' autoPlay={true} infiniteLoop={true} renderIndicator={false} showThumbs={false} showStatus={false}>
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
