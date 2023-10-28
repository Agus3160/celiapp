
function NavBar() {

  return (
    <nav className="flex shadow-xl p-3 h-16 items-center justify-between bg-peach">
        <img className="w-14 h-14 rounded-full" src="/celiapp_logo.png"></img>
        <ul className="flex text-midnight gap-2">
            <li><a href="#">Login</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
  )
}

export default NavBar
