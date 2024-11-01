import { IoIosStar } from 'react-icons/io';
import ILLUSTRATION from '../assets/images/illustration.svg';
import AVATARS from '../assets/images/avatars.svg';
import ROBOT from '../assets/images/robot.svg';

const Hero = () => {
  return (
    <div className='maxW lg:padX flex max-lg:flex-col max-lg:text-center items-center justify-between gap-x-6 gap-y-8 pt-16 pb-12'>
      <div className='max-lg:padX w-[45%] max-lg:w-[90%] max-lg:mx-auto max-md:w-full'>
        <div className='text-5xl max-md:text-4xl max-sm:text-3xl text-gray800 font-inter600 pb-4 leading-[1.1]'>
          Uniting the world,
          <br />
          one video call at a time
        </div>
        <p className='font-inter400 text-lg text-gray500 max-lg:w-[70%] max-md:w-[90%] max-sm:w-full max-sm:text-base max-lg:mx-auto leading-[1.3] max-sm:leading-[1.2]'>
          Experience the future of communication with ClearMeet – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className='flex items-center max-sm:flex-col max-lg:gap-x-4 gap-x-1 gap-y-3 max-lg:justify-center py-12 max-lg:p-4'>
          <button className='outline-none border border-gray400 px-6 py-2 text-white bg-blue rounded-full max-sm:w-full'>
            Start your free trial
          </button>
          <button className='outline-none border-none bg-transparent px-6 py-2 text-blue flex items-center justify-center gap-x-2 max-sm:w-full'>
            <img src={ROBOT} alt='' />
            <span>Discover AI assstant</span>
          </button>
        </div>
        <div className='flex flex-wrap items-center max-lg:justify-center gap-x-2.5 gap-y-3 max-lg:pb-4'>
          <img src={AVATARS} alt='' className='' />
          <div className=''>
            <div className='flex items-center gap-x-2'>
              <div className='flex items-center gap-x-0.5 text-warning400'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <span className='text-sm font-inter600 text-gray700'>5.0</span>
            </div>
            <span className='font-inter500 text-gray600 text-sm'>
              from 3,000+ reviews
            </span>
          </div>
        </div>
      </div>
      <div className='w-[50%] max-lg:w-full'>
        <img src={ILLUSTRATION} alt='' className='w-full h-full object-cover' />
      </div>
    </div>
  );
};
export default Hero;
