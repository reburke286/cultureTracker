import { useState, useEffect } from "react";
import { DataTable, Piechart, Header } from "../../components";
import { bookData } from "./2022_book_data";
import { Rate } from "antd";
import "./books-page.css";
//`https://www.googleapis.com/books/v1/volumes?q=pride-and-protest&key=${process.env.GOOGLE_BOOKS_API}`

/* TABLE DATA */
const columns = [
  {
    dataIndex: "title",
    title: "Title",
    key: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
  },
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
    sorter: (a, b) => a.review - b.review,
    render: (value, record) => (
      <Rate name="half-rating-read" precision={0.5} value={value} readOnly />
    ),
  },
];

export const BooksPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      const books = bookData.map((book) => {
        return {
          ...book,
          key: book.title,
        };
      });
      setData(books);
    } else return;
  }, [data]);

  const handleBookModal = () => {
    console.log("book modal");
  };

  return (
    <div className="booksWrapper">
      {data.length === 0 ? null : (
        <>
          <Header pageTitle="Books" onClick={handleBookModal} />
          <DataTable columns={columns} data={data} />
        </>
      )}
      <Piechart />
    </div>
  );
};
