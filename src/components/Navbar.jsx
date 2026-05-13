import { NavLink } from "react-router-dom";

function Navbar({ items }) {
  return (
    <nav className="navbar">
      <h3>Menu</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.slug}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {item.page}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
