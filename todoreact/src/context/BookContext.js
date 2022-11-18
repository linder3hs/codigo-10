import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const { children } = props;

  const [cartBooks, setCartBooks] = useState(
    JSON.parse(localStorage.getItem("books")) ?? []
  );

  function addItem(book) {
    const newBooks = [...cartBooks, book];
    setCartBooks(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
  }

  function deleteItem(book) {
    const newBooks = cartBooks.filter((item) => item.id !== book.id);
    setCartBooks([...newBooks]);
    localStorage.setItem("books", JSON.stringify(newBooks));
  }

  function searchBookInArray(book) {
    return cartBooks.find((item) => item.id === book.id);
  }

  return (
    <BookContext.Provider
      value={{
        cartBooks,
        addItem,
        deleteItem,
        searchBookInArray,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
