import Link from "next/link";
import Image from "next/image";
import imageLogo from "@/assets/logo.png";
import cssClasses from "./main-header.module.css";

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
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
