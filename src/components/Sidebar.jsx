import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Sidebar({ menuItems }) {
  const SideLocation = useLocation();
  return (
    <nav className="navbar">
      <h3>Menu</h3>
      <ul>
        {menuItems.map((item) => {
          //slug corrisponde path
          const isActive = location.pathname === item.slug;

          return (
            <li key={item.id}>
              {/* applicazione della classe active-link se isActive è true */}
              <Link to={item.slug} className={isActive ? "active-link" : ""}>
                {item.page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
