import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <div className="navbar max-w-[730px] mx-auto shadow-2xl font-spaceMono text-white flex justify-between items-center mt-16  lg:mt-auto">
      <Link to='/' className="text-xl font-bold p-2 hover:outline-dashed">{title}</Link>
      <div className="flex">
        <button className="btn bg-transparent text-sm flex items-center p-2 text-white justify-between tracking-wider uppercase">
          <p className="mx-2 font-normal">light</p> <FaSun />
        </button>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: "devFinder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
