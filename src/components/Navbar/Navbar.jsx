import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-white text-[#23BE0A] border border-[#23BE0A] text-lg font-semibold py-[14px] px-[20px]"
              : "text-[#131313] text-lg font-normal py-[14px] px-[20px]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/listed-books"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-white text-[#23BE0A] border border-[#23BE0A] text-lg font-semibold py-[14px] px-[20px]"
              : "text-[#131313] text-lg font-normal py-[14px] px-[20px]"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pages-to-read"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-white text-[#23BE0A] border border-[#23BE0A] text-lg font-semibold py-[14px] px-[20px]"
              : "text-[#131313] text-lg font-normal py-[14px] px-[20px]"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-[28px] text-[#131313] font-bold pl-0">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Link to={"/"}>
          <button className=" text-lg rounded-lg font-semibold text-white py-1 md:py-[18px] px-3 md:px-[28px] bg-[#59C6D2]">
            Sign Up
          </button>
        </Link>

        <button className="text-lg rounded-lg font-semibold text-white py-1 md:py-[18px] px-3 md:px-[28px] bg-[#23BE0A]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
