import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          FinQuest
        </Link>

        <div className="flex space-x-6">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-blue-500 text-lg font-medium transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/personalize" 
            className="text-gray-600 hover:text-blue-500 text-lg font-medium transition duration-300"
          >
            Personalize Your Learning
          </Link>
          <Link 
            to="/about" 
            className="text-gray-600 hover:text-blue-500 text-lg font-medium transition duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


