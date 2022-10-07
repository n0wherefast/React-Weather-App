export const Search = () =>{
    return(
<nav className="navbar bg-light">
  <div className="container-fluid">
    <form className="input-group" role="search">
      <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}