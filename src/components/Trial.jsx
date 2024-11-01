import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import SCREEN_MOCKUP from '../assets/images/screen_mockup.svg';

const Trial = () => {
  return (
    <div className='max-w-screen-xl ml-auto xl:mx-auto lg:pl-12 pt-12 max-lg:pt-16 flex max-lg:flex-col gap-y-10 justify-between'>
      <div className='w-[40%] max-lg:w-[70%] max-sm:w-full pt-16 max-lg:pt-0 max-lg:padX'>
        <div className='text-gray800 text-4xl max-md:text-3xl max-sm:text-2xl'>
          Ready to clear the path to perfect communication?
        </div>
        <div className='space-y-2 py-6'>
          <div className='flex items-center gap-x-2'>
            <IoCheckmarkCircleOutline className='text-blue text-xl' />
            <span className='font-inter400 text-gray600'>
              30 days free trial
            </span>
          </div>
          <div className='flex items-center gap-x-2'>
            <IoCheckmarkCircleOutline className='text-blue text-xl' />
            <span className='font-inter400 text-gray600'>
              Cancel at any time
            </span>
          </div>
          <div className='flex items-center gap-x-2'>
            <IoCheckmarkCircleOutline className='text-blue text-xl' />
            <span className='font-inter400 text-gray600'>
              Access to all features
            </span>
          </div>
          <div className='flex items-center gap-x-2'>
            <IoCheckmarkCircleOutline className='text-blue text-xl' />
            <span className='font-inter400 text-gray600'>
              Personalized onboarding
            </span>
          </div>
        </div>
        <div className='flex max-sm:flex-col gap-y-3 items-center max-sm:items-start text-sm gap-x-4'>
          <button className='outline-none border border-gray400 px-6 py-2 text-gray900 bg-white rounded-full max-sm:w-full'>
            Talk to sales
          </button>
          <button className='outline-none border border-gray400 px-6 py-2 text-white bg-blue rounded-full max-sm:w-full'>
            Start your free trial
          </button>
        </div>
      </div>
      <div className='w-[55%] max-lg:w-full max-md:pl-4 max-lg:pl-8'>
        <img src={SCREEN_MOCKUP} alt='mockup' className='w-full' />
      </div>
    </div>
  );
};
export default Trial;
