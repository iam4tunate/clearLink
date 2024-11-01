import { IoIosStar } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import CONTENTS from '../assets/images/contents.svg';
import AVATAR from '../assets/images/avatar.svg';
import SHOPIFY from '../assets/images/Shopify.png';

const Testimonial = () => {
  return (
    <div className='bg-gray50 py-16 max-sm:py-12'>
      <div className='padX maxW w-full flex items-center justify-between'>
        <div className='w-[43%] max-lg:w-[80%] max-md:w-full max-lg:mx-auto'>
          <img src={SHOPIFY} alt='shopify' className='w-[6rem]' />
          <div className='flex items-center gap-x-0.5 text-warning400 py-6 max-sm:py-4'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <div className='text-gray900 text-3xl max-md:text-3xl max-sm:text-2xl leading-snug sm:leading-tight font-inter500'>
            ClearMeet has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </div>
          <div className='flex max-sm:flex-col max-sm:items-start gap-y-6 items-center justify-between pt-10 max-sm:pt-6 max-md:pt-8'>
            <div className='flex items-center gap-x-3'>
              <img src={AVATAR} alt='avatar' />
              <div className='flex flex-col gap-y-1.5'>
                <span className='text-gray900 text-lg max-md:text-base leading-none'>
                  Sarah Thompson
                </span>
                <span className='text-gray600 font-inter400 max-md:text-sm leading-none'>
                  Project Manager, Shopify
                </span>
              </div>
            </div>
            <div className='flex items-center gap-x-8 max-sm:gap-x-4'>
              <span className='bg-white rounded-full p-2 border border-gray200'>
                <IoArrowBack className='text-blue max-sm:text-xl' />
              </span>
              <span className='bg-white rounded-full p-2 border border-gray200'>
                <IoArrowForward className='text-blue max-sm:text-xl' />
              </span>
            </div>
          </div>
        </div>
        <div className='w-[45%] max-lg:hidden'>
          <img src={CONTENTS} alt='remote grid' />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
