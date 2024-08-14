import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, image, tags, bookName, author, category, rating } = book;
  return (
    <div>
      <Link to={`/book/${id}`}>
        <div className="card card-compact bg-base-100 border mx-2 lg:mx-0">
          <div className="flex justify-center m-6 py-14 bg-[#F3F3F3] rounded-lg">
            <img className="h-[166px]" src={image} alt={bookName} />
          </div>
          <div className="ml-6">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-[7px] rounded-[30px] mr-3"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="divide-y divide-dashed px-6">
            <div className="pt-4">
              <h2 className="mb-4 font-playFair text-2xl font-bold">
                {bookName}
              </h2>
              <p className="text-base font-medium mb-[10px]">By : {author}</p>
            </div>
            <div className="text-base font-medium flex justify-between items-center pt-[10px] mb-6">
              <p>{category}</p>
              <div className="flex items-center">
                <p className="mr-2">{rating}</p>
                <p>
                  <FaRegStar />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
