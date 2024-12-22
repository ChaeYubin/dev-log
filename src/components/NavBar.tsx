import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

const NavBar = () => {
  return (
    <div className="py-12 flex items-center">
      <h1 className="text-lg font-bold">
        <Link href="/" className="no-hover">
          Chaerrot🥕
        </Link>
      </h1>
      <div className="ml-auto ">
        <ul className="flex font-semibold items-center">
          <li className="mr-8 text-lg">
            <Link href="/posts" className="no-hover">
              Posts
            </Link>
          </li>
          <li className="mr-8 text-lg">
            <Link href="/tags" className="no-hover">
              Tags
            </Link>
          </li>
          <li className="mr-8 text-lg">
            <Link href="/about" className="no-hover">
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <ThemeChanger />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
