import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="z-40 backdrop-blur-sm mix-blend-exclusion fixed text-white w-full px-14 pt-14 pb-5 flex h justify-between text-2xl font-extralight tracking-tighter">
        <Link className="hover:text-accent" href="#me">
          Kashyap
        </Link>
        <div className="flex items-center gap-9">
          <Link href="#work">
            <span className="hover:text-accent">Works</span>
          </Link>
          <Link href="#skill">
            <span className="hover:text-accent">Skills</span>
          </Link>
          <Link href="#contact">
            <span className="hover:text-accent">Contact me</span>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
