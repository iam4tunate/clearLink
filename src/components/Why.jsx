import { IoVideocamOutline } from 'react-icons/io5';
import { BsSoundwave } from 'react-icons/bs';
import { FiCalendar } from 'react-icons/fi';
import { LiaUnlockAltSolid } from 'react-icons/lia';
import ARROW from '../assets/images/arrow.svg';
import PHOTOGRID from '../assets/images/photoGrid.svg';

const Why = () => {
  return (
    <div className='maxW padX py-16 max-sm:py-12'>
      <div className='flex max-lg:flex-col items-center justify-between'>
        <div className='w-[50%] max-lg:w-[80%] max-md:w-full max-lg:mx-auto'>
          <p className='text-blue'>The ClearMeet Advantage</p>
          <div className='text-gray800 text-4xl max-md:text-3xl py-4'>
            Why choose ClearMeet?
          </div>
          <p className='text-gray500 text-lg max-sm:text-base font-inter400 leading-[1.3]'>
            In a world where connection is everything, ClearMeet takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
          <div className='pt-20 max-lg:pt-16 max-md:pt-12 max-sm:pt-8 grid grid-cols-2 max-sm:grid-cols-1 gap-y-12 gap-x-10'>
            <div className=''>
              <IoVideocamOutline className='text-blue text-4xl max-sm:text-3xl' />
              <div className='text-gray900 pt-4 pb-2'>
                Crystal-clear HD video
              </div>
              <p className='text-gray600 font-inter400'>
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </p>
            </div>
            <div className=''>
              <BsSoundwave className='text-blue text-4xl max-sm:text-3xl' />
              <div className='text-gray900 pt-4 pb-2'>
                Crystal-clear HD video
              </div>
              <p className='text-gray600 font-inter400'>
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </p>
            </div>
            <div className=''>
              <FiCalendar className='text-blue text-4xl max-sm:text-3xl' />
              <div className='text-gray900 pt-4 pb-2'>Scheduling made easy</div>
              <p className='text-gray600 font-inter400'>
                Streamline your agenda with ClearMeet&apos;s intuitive
                scheduling. Set up meetings, send invitations, and receive
                reminders in one place.
              </p>
            </div>
            <div className=''>
              <LiaUnlockAltSolid className='text-blue text-4xl max-sm:text-3xl' />
              <div className='text-gray900 pt-4 pb-2'>Bank-grade security</div>
              <p className='text-gray600 font-inter400'>
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </p>
            </div>
          </div>
        </div>
        <div className='w-[40%] max-lg:hidden'>
          <img
            src={ARROW}
            alt='arrow'
            className='translate-y-4 translate-x-20 w-[40%]'
          />
          <img src={PHOTOGRID} alt='photo grid' className='w-[90%]' />
        </div>
      </div>
    </div>
  );
};
export default Why;
