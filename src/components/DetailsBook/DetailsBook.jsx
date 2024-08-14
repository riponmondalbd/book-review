import { useLoaderData, useParams } from "react-router-dom";

const DetailsBook = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="mx-2 mt-[52px] mb-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-[#1313130D] flex justify-center items-center rounded-lg">
          <img className="h-[90%] md:h-[420px]" src={image} alt="" />
        </div>
        <div>
          <h1 className="font-playFair text-[40px] font-bold mb-4">
            {bookName}
          </h1>
          <p className="text-xl font-medium mb-6">By : {author}</p>
          <hr />
          <p className="my-4 text-xl font-medium">{category}</p>
          <hr />
          <p className="my-6">
            <span className="text-base font-bold">Review : </span>
            {review}
          </p>
          <div className="flex gap-4 mb-6">
            <p className="text-base font-bold py-[7px]">Tag</p>
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-[7px] rounded-[30px] mr-3"
              >
                #{tag}
              </button>
            ))}
          </div>
          <hr />
          <div className="flex gap-[60px] mt-6 mb-8">
            <div>
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div>
              <p className="text-base font-semibold">{totalPages}</p>
              <p className="text-base font-semibold">{publisher}</p>
              <p className="text-base font-semibold">{yearOfPublishing}</p>
              <p className="text-base font-semibold">{rating}</p>
            </div>
          </div>
          <div>
            <button className="py-[18px] px-7 rounded-lg text-lg font-semibold border mr-4">
              Read
            </button>
            <button className="py-[18px] px-7 rounded-lg text-lg font-semibold text-white bg-[#50B1C9]">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBook;
