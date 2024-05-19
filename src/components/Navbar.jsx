import { Link, useNavigate } from 'react-router-dom';
import "../index.css"

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='w-full flex justify-around items-center bg-white py-6 border-b-2 fixed top-0 z-50'>
      <div className='flex justify-center items-center gap-2'>
        <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
        <h1 className='text-2xl font-semibold'>GeekFoods</h1>
      </div>
      <div className='hidden cursor-pointer justify-center items-center gap-6 text-[1.1rem] font-semibold lg:flex xl:flex  2xl:flex'>
        <Link to="/">
          <h1 className=' text-blue-600'>Home</h1>
        </Link>
        <Link to="/quote">
          <h1 className=' hover:text-blue-600'>Quote</h1>
        </Link>
        <Link to="/restaurant">
          <h1 className=' hover:text-blue-600'>Restaurants</h1>
        </Link>
        <Link to="/foods">
          <h1 className=' hover:text-blue-600'>Foods</h1>
        </Link>
        <Link to="/contact">
          <h1 className=' hover:text-blue-600'>Contact</h1>
        </Link>
      </div>
      <button
        type="button"
        className="rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        onClick={() => {
          navigate("/")
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Navbar;