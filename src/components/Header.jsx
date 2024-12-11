import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto p-4 flex justify-around items-center">
        <button
          onClick={() => handleNavigation("/users")}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Users
        </button>
        <button
          onClick={() => handleNavigation("/books")}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Books
        </button>
        <button
          onClick={() => handleNavigation("/weather")}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Weather
        </button>
        <button
          onClick={() => handleNavigation("/jobs")}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Jobs
        </button>
        <button
          onClick={() => handleNavigation("/movies")}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Movies
        </button>
      </div>
    </header>
  );
}

export default Header;
