import { PieChart, Pie, Cell } from "recharts";
import { DataTable } from "../../components";
import { bookData } from "./2022_book_data";
import { Rating } from "@mui/material";
//https://www.googleapis.com/books/v1/volumes?q=pride-and-protest&key=AIzaSyCF5drnVVf7cJYaPDT3XAkaV--ZKKg8XDc

/* TABLE DATA */
const columns = [
  { dataIndex: "title", title: "Title" },
  {
    dataIndex: "author",
    title: "Author(s)",
    sorter: (a, b) => a.author.localeCompare(b.author),
  },
  {
    dataIndex: "genre",
    title: "Genre",
    sorter: (a, b) => a.genre.localeCompare(b.genre),
  },
  {
    dataIndex: "review",
    title: "Rating",
    sorter: (a, b) => a.review.localeCompare(b.review),
    render: (value, record) => (
      <Rating name="half-rating-read" precision={0.5} value={value} readOnly />
    ),
  },
];

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#009688", "#0086BA", "#7163B4", "#9D4993"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const BooksPage = () => {
  return (
    <div>
      <div>
        <DataTable columns={columns} data={bookData} />
      </div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
