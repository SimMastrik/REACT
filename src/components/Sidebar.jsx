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
          const isActive = SideLocation.pathname === item.slug;

          return (
            <li key={item.id}>
              {/* applicazione della classe active-link se isActive è true */}
              <NavLink
                to={item.slug}
                className={isActive ? "active-link" : "inactive-link"}
              >
                {item.page}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
