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
            <a
              href="https://yuuub.notion.site/10e963c8b3a7807085eddafd86001967"
              className="no-hover"
              target="_blank"
            >
              About
            </a>
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
