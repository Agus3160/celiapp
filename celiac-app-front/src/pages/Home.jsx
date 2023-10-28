import LocalModel from '../../models/locales'
import OpinionModel from '../../models/opiniones'
import Card from '../components/Card'
  
let listasOpiniones = [
  new OpinionModel(0, 'Alberto', 'La verdad un muy buen local', 5),
  new OpinionModel(1, 'Roberto', 'El personal me trato un poco mal', 4),
  new OpinionModel(1, 'Pedro', 'Me hicieron un mal pedido', 3),
  new OpinionModel(1, 'Augusto', 'Estabamos muy apretados, es muy pequenho el local', 2),
  new OpinionModel(1, 'Lila', 'El mesero nunca aparecio', 2),
  new OpinionModel(0, 'Luis', 'El local es muy bueno', 4),
  new OpinionModel(0, 'Enrique', 'El local es muy bueno', 4),
]

let listaLocales = [
  new LocalModel('El pana', 'Un lugar muy especial para comer con los panas','/local.jpg', ''),
  new LocalModel('Cafus', 'Esto es una descripcion ya se me terminaron las ideas jaja salu2', '/local.jpg', ''),
  new LocalModel('Evita el trigo', 'Que tal unos buenos alimentos que no te hagan mal', '/local.jpg', ''),
]

localStorage.setItem('locales', JSON.stringify(listaLocales))
localStorage.setItem('opiniones', JSON.stringify(listasOpiniones))

function Home() {
    return (
      <>
      <div className='mx-2'>
        <div className="flex my-5">
            <input className="flex-1 p-2 w-full" placeholder="Ingrese informacion para buscar..."></input>
            <button className="bg-pinky p-2" >Search</button>
        </div>
        
        <div className='flex flex-col'>
            {listaLocales.map( l=>{
                    return (<Card key={l.id} id={l.id} local={l}/>)
                }
            )}
        </div>
      </div>
      </>
    )
  }
  
  export default Home
  