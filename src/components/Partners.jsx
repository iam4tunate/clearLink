import SHOPIFY from '../assets/images/Shopify.png';
import COINBASE from '../assets/images/Coinbase.png';
import DROPBOX from '../assets/images/Dropbox.png';
import INTERCOM from '../assets/images/Intercom.png';
import MARVEL from '../assets/images/Marvel.png';
import AUTOMATIC from '../assets/images/Automattic.png';
import Marquee from 'react-fast-marquee';

const Partners = () => {
  return (
    <div className='max-w-screen-2xl mx-auto text-center py-16 max-sm:py-12'>
      <p className='padX text-gray600 font-inter500 text-lg'>
        Join 1,500+ companies already video conferencing the ClearMeet way
      </p>
      <Marquee className='pt-6 max-sm:pt-8'>
        <div className='flex items-center gap-x-16'>
          <img src={SHOPIFY} alt='shopify' className='w-[160px] max-sm:w-[140px]' />
          <img src={COINBASE} alt='coinbase' className='w-[160px] max-sm:w-[140px]' />
          <img src={DROPBOX} alt='dropbox' className='w-[160px] max-sm:w-[140px]' />
          <img src={INTERCOM} alt='intercom' className='w-[160px] max-sm:w-[140px]' />
          <img src={MARVEL} alt='marvel' className='w-[120px] max-sm:w-[100px]' />
          <img src={AUTOMATIC} alt='automatic' className='w-[160px] max-sm:w-[140px]' />
        </div>
      </Marquee>
      {/* <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 pt-6 max-sm:pt-8">
        <img src={SHOPIFY} alt="shopify" className="w-[160px]" />
        <img src={COINBASE} alt="coinbase" className="w-[160px]" />
        <img src={DROPBOX} alt="dropbox" className="w-[160px]" />
        <img src={INTERCOM} alt="intercom" className="w-[160px]" />
        <img src={MARVEL} alt="marvel" className="w-[120px]" />
        <img src={AUTOMATIC} alt="automatic" className="w-[160px]" />
      </div> */}
    </div>
  );
};
export default Partners;
