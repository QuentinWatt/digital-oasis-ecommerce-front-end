import Link from "next/link";

const MainNavigation = () => {
  return (
    <nav className="w-full bg-slate-800 border-b border-slate-600 h-16 flex items-center">
      <div className="flex justify-between container mx-auto">
        App Name
        <ul className="flex gap-2">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
