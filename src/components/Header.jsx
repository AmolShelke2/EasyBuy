import { navLinks } from "@/libs/constants";
import ListItem from "./ListItem";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

export const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <MdOutlineShoppingBag size={20} />
        <Link className="logo" href={"/"}>
          EasyBuy
        </Link>
      </div>
      <div>
        <ul className={`nav-links ${navActive ? "active" : ""}`}>
          {navLinks.map((item) => (
            <ListItem url={item.url} key={item.id} title={item.title} />
          ))}
        </ul>
        <div className="cart">
          <MdOutlineShoppingBag size={25} className="icon" />
        </div>
        <div className="wishlist">
          <AiOutlineHeart size={25} className="icon" />
        </div>
        <div className="menu" onClick={() => setNavActive(!navActive)}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </nav>
  );
};
