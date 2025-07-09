const Header = () => (
    <header className="header">
      <div className="header-search">
        <i className="material-icons">search</i>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-icons">
        <i className="material-icons">notifications</i>
        <i className="material-icons">settings</i>
        <div className="avatar"></div>
      </div>
    </header>
  );
  
  export default Header;
  