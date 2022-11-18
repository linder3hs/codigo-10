import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const { children } = props;

  const [cartBooks, setCartBooks] = useState(
    JSON.parse(localStorage.getItem("books")) ?? []
  );

  function addItem(book) {
    const newBooks = [...cartBooks, ...book];
    setCartBooks(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
  }

  return (
    <BookContext.Provider
      value={{
        cartBooks,
        addItem,
      }}
    >
      {{ children }}
    </BookContext.Provider>
  );
};
