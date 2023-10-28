function Home() {

    return (
      <>
      <a href="#">
        <div className="bg-sand p-4 mb-4 rounded-md">
            <h1 className="font-bold">Local 1</h1>
            <hr className="my-2"></hr>
            <div className="flex items-center gap-2">
                <img className="w-1/2 rounded-xl" src="/local.jpg"></img>
                <div className="text-sm">
                    <p className="line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis ea ipsam reiciendis velit, rem, quam ratione necessitatibus deserunt explicabo magni. Commodi iusto eaque fugit atque praesentium. Ipsum, cumque numquam.</p>
                    <p className="text-blue-700">Ver mas</p>
                </div>
            </div>
        </div>
    </a>
      </>
    )
  }
  
  export default Home
  