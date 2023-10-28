import LocalModel from '../../models/locales'
import Card from '../components/Card'

let listaLocales = [
  new LocalModel('El pana', 'Un lugar muy especial para comer con los panas', ' ', 3, ''),
  new LocalModel('Cafus', 'Esto es una descripcion ya se me terminaron las ideas jaja salu2', ' ', 1, ''),
  new LocalModel('Evita el trigo', 'Que tal unos buenos alimentos que no te hagan mal', ' ', 2, ''),
]

localStorage.setItem('locales', JSON.stringify(listaLocales))

function Home() {
    const list = [1,2,3,4,5]
    return (
      <>
      <div className='mx-2'>
        <div className="flex my-5">
            <input className="flex-1 p-2 w-full" placeholder="Ingrese informacion para buscar..."></input>
            <button className="bg-pinky p-2" >Search</button>
        </div>
        
        <div className='flex flex-col'>
            {listaLocales.map( l=>{
                    return (<Card key={l.id} id={l.id}/>)
                }
            )}
        </div>
      </div>
      </>
    )
  }
  
  export default Home
  