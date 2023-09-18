import { navLinks } from "@/libs/constants";
import ListItem from "./ListItem";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">EasyBuy</h1>
      </div>
      <div>
        <ul className="nav-links">
          {navLinks.map((item) => (
            <ListItem url={item.url} key={item.id} title={item.title} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
