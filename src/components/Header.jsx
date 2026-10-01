import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="site-header">
      <nav className="header-nav">
        <div className="logo">Universo Videogiochi</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
        </div>
      </nav>
    </header>
  );
};
