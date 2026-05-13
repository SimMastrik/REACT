import { NavLink } from "react-router-dom";

function Sidebar({ items }) {
  return (
    <aside className="sidebar">
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
    </aside>
  );
}

export default Sidebar;
