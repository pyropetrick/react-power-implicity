import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import "./navbar.scss";
export const NavBar = () => {
  const navLinks: { id: number; text: string; href: string }[] = [
    {
      id: 1,
      text: "Features",
      href: "#",
    },
    {
      id: 2,
      text: "Partners",
      href: "#",
    },
    {
      id: 3,
      text: "Stories",
      href: "#",
    },
  ];
  return (
    <nav className="nav-bar">
      <LogoIcon />
      <div className="nav-bar__links">
        {navLinks.map(({ id, text, href }) => (
          <a key={id} href={href} className="nav-bar__link">
            {text}
          </a>
        ))}
      </div>
      <BurgerMenu />
      <button className="nav-bar__button">Download for free</button>
    </nav>
  );
};
