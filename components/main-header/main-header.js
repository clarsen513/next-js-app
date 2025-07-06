import Link from "next/link";
import Image from "next/image";
import imageLogo from "@/assets/logo.png";
import cssClasses from "./main-header.module.css";
import NavLink from "../nav-link/nav-link";

export default function MainHeader() {
  return (
    <header className={cssClasses.header}>
      <Link className={cssClasses.logo} href="/">
        <Image src={imageLogo} alt="Abstract hand sharing food" priority />
        Upscale Food
      </Link>
      <nav className={cssClasses.nav}>
        <ul className="nav-list">
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
