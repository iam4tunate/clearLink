import LOGO from '../assets/images/logo.svg';
import { BiChevronDown } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className='max-lg:px-3'>
      <nav className='maxW padX bg-gray100 flex items-center justify-between mt-10 max-md:mt-8 max-sm:mt-6 py-4 rounded-full border border-gray300'>
        <img
          src={LOGO}
          alt=''
          className='w-[160px] h-[29px] max-md:w-[130px] max-md:h-[20px] object-cover'
        />
        <ul className='flex items-center gap-x-8 text-gray500 max-lg:hidden'>
          <li className='flex items-center gap-x-1'>
            <span>Product</span>
            <BiChevronDown />
          </li>
          <li className='flex items-center gap-x-1'>
            <span>Solution</span>
            <BiChevronDown />
          </li>
          <li className='flex items-center gap-x-1'>
            <span>Resurces</span>
            <BiChevronDown />
          </li>
          <li>Pricing</li>
        </ul>
        <div className='flex items-center gap-x-6'>
          <div className='flex items-center text-sm gap-x-4 max-sm:hidden'>
            <button className='outline-none border border-gray400 px-4 py-2 text-gray900 bg-white rounded-full'>
              Talk to sales
            </button>
            <button className='outline-none border border-gray400 px-4 py-2 text-white bg-blue rounded-full'>
              Sign for free
            </button>
          </div>
          <FiMenu className='text-2xl' />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
