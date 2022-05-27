const NavBar = () => {
  return (
      <div className="navBar">
        <div className="navContainer">
          <span className="logo">It's not Booking</span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
  )
}

export default NavBar;
