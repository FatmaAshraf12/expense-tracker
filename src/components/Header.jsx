import logo192 from "../assets/logo192.png";
const Header = () => {
  return (
    <nav className="navbar bg-light mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo192} alt="Bootstrap" width="30" height="24" />
          <span>Expense Tracker</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
