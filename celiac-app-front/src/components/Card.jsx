import { Link } from "react-router-dom";

function Home(props) {
  let localInfo = props.local
    return (
      <>
      <Link to={`local/${props.id}`}>
        <div className="bg-sand p-4 mb-4 rounded-md">
            <div className="flex w-full justify-between items-center">
              <h1 className="font-bold">{localInfo.nombre}</h1>
              <span>{`⭐${localInfo.likes}`}</span>
            </div>
            <hr className="my-2"></hr>
            <div className="flex items-center gap-2">
                <img className="w-1/2 rounded-xl" src={localInfo.imagen}></img>
                <div className="text-sm">
                    <p className="line-clamp-4">{localInfo.descripcion}</p>
                    <p className="text-blue-700 m-auto">ver mas...</p>
                    <img className="w-3/4 rounded-xl my-1 mx-auto" src="/map_feature.png"></img>
                </div>
            </div>
        </div>
     </Link>
      </>
    )
  }
  
  export default Home
  