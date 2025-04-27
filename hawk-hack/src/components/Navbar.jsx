import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10 w-10 object-contain" />
          <Link to="/" className="text-2xl font-bold text-gray-800">
            FinQuest
          </Link>
        </div>

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


