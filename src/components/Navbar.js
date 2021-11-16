const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-primary">
        <h5 className="navbar-brand ml-5">{props.title}</h5>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar