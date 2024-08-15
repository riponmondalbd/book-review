import { CiLocationOn } from "react-icons/ci";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const StoredBook = ({ book }) => {
  const {
    id,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div className="flex flex-col md:flex-row gap-6 border p-6 rounded-2xl mb-6">
      <div className="bg-[#1313130D] py-[30px] md:px-[50px] flex items-center justify-center rounded-2xl">
        <img className="h-[172px]" src={image} alt="" />
      </div>
      <div className="divide-y w-full">
        <div>
          <h2 className="font-playFair text-2xl font-bold mb-4">{bookName}</h2>
          <p className="text-base font-medium mb-5">By : {author}</p>
          <div className="flex flex-col lg:flex-row mb-4">
            <div className="flex">
              <p className="text-base font-bold mr-4 py-[7px]">Tag</p>
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="bg-[#23BE0A0D] mr-3 py-[7px] px-4 rounded-[30px] text-base font-medium text-[#23BE0A]"
                >
                  #{tag}
                </button>
              ))}
            </div>
            <div>
              <p className="py-[7px] flex">
                <CiLocationOn className="text-2xl mr-2" /> Year of Publishing:{" "}
                {yearOfPublishing}
              </p>
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <p className="flex">
              <IoPeopleOutline className="text-2xl mr-2" />
              Publisher: {publisher}
            </p>
            <p className="flex">
              <HiOutlineDocumentChartBar className="text-2xl mr-2" />
              Pages: {totalPages}
            </p>
          </div>
        </div>
        <div>
          <button className="mt-4 rounded-[30px] text-[#328EFF] bg-[#328EFF26] py-[11px] px-[20px] mr-3">
            Category: {category}
          </button>
          <button className="mt-4 rounded-[30px] text-[#FFAC33] bg-[#FFAC3326] py-[11px] px-[20px] mr-3">
            Rating: {rating}
          </button>
          <Link to={`/book/${id}`}>
            <button className="mt-4 rounded-[30px] text-white bg-[#23BE0A] py-[11px] px-[20px] mr-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoredBook;
