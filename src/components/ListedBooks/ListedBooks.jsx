import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getToLocalStorage } from "../../utility/localstorage";
import StoredBook from "../StoredBook/StoredBook";

const ListedBooks = () => {
  const books = useLoaderData();
  const [bookList, setBookList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sortBook, setSortBook] = useState([]);
  const [sortWishlist, setSortWishList] = useState([]);

  // console.log(bookList);

  const handleFilter = (filter) => {
    if (filter === "rating") {
      setSortBook([...bookList].sort((a, b) => b.rating - a.rating));
      setSortWishList([...wishList].sort((a, b) => b.rating - a.rating));
      // console.log(ratings);
    } else if (filter === "page") {
      setSortBook([...bookList].sort((a, b) => b.totalPages - a.totalPages));
      setSortWishList(
        [...wishList].sort((a, b) => b.totalPages - a.totalPages)
      );
    } else if (filter === "year") {
      setSortBook(
        [...bookList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      );
      setSortWishList(
        [...wishList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      );
    }
  };

  useEffect(() => {
    const storedBooks = getToLocalStorage("books");
    const storedWishList = getToLocalStorage("wishlist");
    if (books.length > 0) {
      const bookStored = books.filter((book) => storedBooks.includes(book.id));
      const wishListStored = books.filter((book) =>
        storedWishList.includes(book.id)
      );
      setBookList(bookStored);
      setWishList(wishListStored);
      setSortBook(bookStored);
      setSortWishList(bookStored);
    }
  }, [books]);
  return (
    <div className="px-[7px] mt-[36px]">
      <div className="text-center py-[34px] bg-[#1313130D] rounded-lg mb-8">
        <h1 className="text-[28px] font-bold">Books</h1>
      </div>
      {/* sorting start */}
      <div className="text-center mb-14 ">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="py-[14px] px-[50px] m-1 bg-[#23BE0A] text-white rounded-lg flex items-center"
          >
            <span className="text-lg font-semibold mr-4">Sort By</span>
            <IoIosArrowDown className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow "
          >
            <li
              onClick={() => handleFilter("rating")}
              className="hover:bg-[#23BE0A] hover:text-white hover:rounded-lg "
            >
              <a>Rating</a>
            </li>
            <li
              onClick={() => handleFilter("page")}
              className="hover:bg-[#23BE0A] hover:text-white hover:rounded-lg"
            >
              <a>Number of pages</a>
            </li>
            <li
              onClick={() => handleFilter("year")}
              className="hover:bg-[#23BE0A] hover:text-white hover:rounded-lg"
            >
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* sorting end */}

      {/* tab section start */}
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg font-normal"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-l-0 border-r-0 border-b-0 border-base-300"
        >
          <div className="mt-8 mb-[120px]">
            {sortBook.map((book) => (
              <StoredBook key={book.id} book={book}></StoredBook>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg font-normal"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-l-0 border-r-0 border-b-0 border-base-300"
        >
          <div className="mt-8">
            {sortWishlist.map((book) => (
              <StoredBook key={book.id} book={book}></StoredBook>
            ))}
          </div>
        </div>
      </div>
      {/* tab section end */}
    </div>
  );
};

export default ListedBooks;
