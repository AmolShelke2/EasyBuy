import { navLinks } from "@/libs/constants";
import ListItem from "./ListItem";
import Link from "next/link";
// import { BiArrowToBottom } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <MdOutlineShoppingBag size={20} />
        <Link className="logo" href={"/"}>
          EasyBuy
        </Link>
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
