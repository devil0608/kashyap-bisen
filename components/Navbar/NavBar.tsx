import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="z-40 backdrop-blur-sm mix-blend-exclusion fixed text-white w-full px-14 pt-14 pb-5 flex h justify-between text-2xl font-extralight tracking-tighter">
        <Link className="hover:text-accent" href="/">
          Kashyap
        </Link>
        <div className="flex items-center gap-9">
          <span className="hover:text-accent">Contact me</span>
          <svg
            width="48"
            height="18"
            viewBox="0 0 48 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3H44.2632M3 19H44.2632"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
