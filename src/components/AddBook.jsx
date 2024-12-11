import { useState } from "react";

function AddBook() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    read: false,
  });

  function addBook() {
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", author: "", read: false });
    }
  }

  function toggleRead(index) {
    const updatedBooks = [...books];
    updatedBooks[index].read = !updatedBooks[index].read;
    setBooks(updatedBooks);
  }

  function deleteBook(index) {
    if (window.confirm("Kitobni aniq ochirasizmi!!!")) {
      setBooks(books.filter((_, i) => i !== index));
    }
  }

  return (
    <div className="max-w-md mx-auto mt-36 p-5 border shadow-md rounded-xl">
      <h1 className="text-center text-3xl font-extrabold mb-5">Book List</h1>
      <div className="text-center">
        <input
          type="text"
          placeholder="Kitob nomini kiriting"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="w-full py-2 px-3 border rounded-lg mb-4 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <input
          type="text"
          placeholder="Kitob muallifini kiriting"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="w-full py-2 px-3 border rounded-lg mb-4 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          onClick={addBook}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600"
        >
          Add Book
        </button>
      </div>
      <div className="mt-8">
        <ul className="space-y-4">
          {books.map((value, index) => (
            <li
              key={index}
              className={`p-4 border rounded-lg shadow flex justify-between items-center ${value.read ? "bg-green-100" : "bg-red-100"}`}
            >
              <div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-gray-700">{value.author}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => toggleRead(index)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
                >
                  Toggle Read
                </button>
                <button
                  onClick={() => deleteBook(index)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddBook;


