import { FaSearch } from "react-icons/fa";

function UserSearch() {
    const placeH = 'Search Github username...'

  return (
      <div className="mt-4 mb-4 pt-1 pb-1 flex font-spaceMono bg-white rounded-xl items-center justify-between max-w-xll relative">
        <FaSearch className="h-14 w-14 pl-4 pr-2 text-lightBlue" />
      <input
        type="search"
        id="search"
        placeholder=" "
        className=" input bg-white py-8 outline-white focus:outline-white w-full"
      />
      <label
        htmlFor="search"
        id="searchLabel"
        className="absolute left-[60px] md:left-[64px] lg:left-[63px]"
      >
        Search Github username...
      </label>
      <button type="submit" className="btn capitalize p-10 pt-4 border-none hover:bg-lightBg mr-2 outline-white bg-lightBlue text-white text-base">
        Search
      </button>
    </div>
  );
}

export default UserSearch;
