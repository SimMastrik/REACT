import { Link, useLocation } from "react-router-dom";

function Navbar({ menuItems }) {
  const NavLocation = useLocation(); // Posizione attuale

  return (
    <nav className="navbar">
      <h3>Menu</h3>
      <ul>
        {menuItems.map((item) => {
          //slug corrisponde path
          const isActive = NavLocation.pathname === item.slug;

          return (
            <li key={item.id}>
              {/* applicazione della classe active-link se isActive è true */}
              <Link
                to={item.slug}
                className={isActive ? "active-link" : "inactive-link"}
              >
                {item.page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
