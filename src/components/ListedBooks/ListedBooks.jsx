import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
  return (
    <div className="px-[7px] mt-[36px]">
      <div className="text-center py-[34px] bg-[#1313130D] rounded-lg mb-8">
        <h1 className="text-[28px] font-bold">Books</h1>
      </div>
      {/* sorting start */}
      <div className="text-center mb-14">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="py-[14px] px-[20px] m-1 bg-[#23BE0A] text-white rounded-lg flex items-center"
          >
            <span className="text-lg font-semibold mr-4">Sort By</span>
            <IoIosArrowDown className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li className="hover:bg-[#23BE0A] hover:text-white hover:rounded-lg">
              <a>Item 1</a>
            </li>
            <li className="hover:bg-[#23BE0A] hover:text-white hover:rounded-lg">
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {/* sorting end */}
    </div>
  );
};

export default ListedBooks;
