import Link from "next/link";

const MainNavigation = () => {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-600 h-16 flex items-center text-white">
      <div className="flex justify-between items-center container mx-auto">
        <span className="font-bold text-3xl">Digital Oasis</span>
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
