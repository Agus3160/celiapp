import Card from '../components/Card'

function Home() {
    const list = [1,2,3,4,5]
    return (
      <>
      <div className='mx-2'>
        <div className="flex my-5">
            <input className="flex-1 p-2 w-full" placeholder="Ingrese informacion para buscar..."></input>
            <button className="bg-celiac-light p-2" >Search</button>
        </div>
        
        <div className='flex flex-col'>
            {list.map( i=>{
                    return (<Card key={i} />)
                }
            )}
        </div>
      </div>
      </>
    )
  }
  
  export default Home
  