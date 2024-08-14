import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="text-center mt-[100px] mb-9">
        <h1 className="font-playFair text-[40px] font-bold">Books</h1>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-[120px]">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
