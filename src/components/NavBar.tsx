import Link from "next/link";

const NavBar = () => {
  return (
    <div className="py-12 flex items-center">
      <h1>
        <Link href="/">Chae Yubin</Link>
      </h1>
      <div className="ml-auto">
        <ul className="flex font-bold">
          <li className="mr-8 text-lg">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="mr-8 text-lg">
            <Link href="/tags/all">Tags</Link>
          </li>
          <li className="mr-8 text-lg">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg">Dark</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
