import { Link } from "react-router-dom";
import bannerImg from "../../../src/assets/images/banner-img.png";

const Banner = () => {
  return (
    <div className="px-2 flex flex-col-reverse md:flex-row bg-[#1313130D] rounded-lg justify-around py-20">
      <div className="my-auto">
        <h1 className="font-playFair text-[40px] lg:text-[56px] font-bold">
          Books to freshen up <br /> your bookshelf
        </h1>
        <Link to={"/listed-books"}>
          <button className="bg-[#23BE0A] text-xl font-bold py-[21px] px-[28px] rounded-lg text-white mt-12">
            View The List
          </button>
        </Link>
      </div>
      <div>
        <img className="h-auto md:h-[394px]" src={bannerImg} alt="book" />
      </div>
    </div>
  );
};

export default Banner;
