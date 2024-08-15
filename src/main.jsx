import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import DetailsBook from "./components/DetailsBook/DetailsBook.jsx";
import PageToRead from "./components/PageToRead/PageToRead.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/book/:id",
        element: <DetailsBook />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/pages-to-read",
        element: <PageToRead />,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
