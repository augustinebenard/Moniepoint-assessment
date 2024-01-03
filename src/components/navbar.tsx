
import hamburger from "../assets/icons/hamburger.svg";
import logo from "../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between">
        <ul className="flex space-x-3">
          <li>
            <button className="py-1 px-3 rounded-full border border-black ">
              Menu
            </button>
          </li>
          <li>
            <img src={hamburger} alt="Menu Logo" />
          </li>
        </ul>

        <div className="align-items-center">
          <img src={logo} alt="Dentytech Logo" />
        </div>
        <ul className="flex space-x-3">
          <li>
            <a
              href=""
              className="inline-block text-sm px-4 py-2 leading-none border rounded-full bg-white text-black border-gray-500 hover:border-[#FF5928] hover:text-[#FF5928] hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href=""
              className="inline-block text-sm px-4 py-2 leading-none border rounded-full bg-[#FF5928] text-white border-[#FF5928] hover:bg-white hover:text-[#FF5928] mt-4 lg:mt-0"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
