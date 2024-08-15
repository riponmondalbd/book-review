import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getToLocalStorage } from "../../utility/localstorage";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PageToRead = () => {
  const books = useLoaderData();
  const [bookList, setBookList] = useState([]);

  const data = [bookList];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  useEffect(() => {
    const storedBooks = getToLocalStorage("books");
    if (books.length > 0) {
      const bookStored = books.filter((book) => storedBooks.includes(book.id));
      setBookList(bookStored);
    }
  }, [books]);

  return (
    <div className="px-[7px]">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={bookList}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"bookName"} />
          <YAxis />
          <Bar
            dataKey={"totalPages"}
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;
