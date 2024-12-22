import Link from "next/link";

const NavBar = () => {
  return (
    <div className="py-12 flex items-center">
      <h1 className="text-lg font-bold">
        <Link href="/" className="no-hover">
          Chaerrot🥕
        </Link>
      </h1>
      <div className="ml-auto">
        <ul className="flex font-semibold ">
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
          <li className="text-lg">Dark</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
