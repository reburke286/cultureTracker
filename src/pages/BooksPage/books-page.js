import { DataTable, Piechart } from "../../components";
import { bookData } from "./2022_book_data";
import { Rating } from "@mui/material";
//`https://www.googleapis.com/books/v1/volumes?q=pride-and-protest&key=${process.env.GOOGLE_BOOKS_API}`

/* TABLE DATA */
const columns = [
  { dataIndex: "title", title: "Title", key: "title" },
  {
    dataIndex: "author",
    key: "author",
    title: "Author(s)",
    sorter: (a, b) => a.author.localeCompare(b.author),
  },
  {
    dataIndex: "genre",
    title: "Genre",
    key: "genre",
    sorter: (a, b) => a.genre.localeCompare(b.genre),
  },
  {
    dataIndex: "review",
    title: "Rating",
    key: "rating",
    sorter: (a, b) => a.review.localeCompare(b.review),
    render: (value, record) => (
      <Rating name="half-rating-read" precision={0.5} value={value} readOnly />
    ),
  },
];

export const BooksPage = () => {
  return (
    <div>
      <div>
        <DataTable columns={columns} data={bookData} />
        <Piechart />
      </div>
    </div>
  );
};
