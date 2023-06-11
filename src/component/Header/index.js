import "./header.css";
const Header = ({searchValue, onSearchChange}) => {
  return (
    <header className="p-3 mb-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-between">
          <div className="px-2">
            <h4><span className="head-text">M</span>oBoo<span className="head-text">M</span></h4>
          </div>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search-form">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              onChange={(e)=>onSearchChange(e.target.value)}
              value={searchValue}
            />
          </form>
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/store" className="nav-link px-2 link-dark">
                Store
              </a>
            </li>
            <li>
              <a href="/account" className="nav-link px-2 link-dark">
                Account
              </a>
            </li>
            <li>
              <a href="/whitelist" className="nav-link px-2 link-dark">
                White List
              </a>
            </li>
            <li>
              <a href="/basket" className="nav-link px-2 link-dark">
                Basket
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
