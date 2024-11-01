import Accordion from './Accordion';

const Faqs = () => {
  return (
    <div className='maxW padX py-16 flex max-lg:flex-col gap-y-8 justify-between'>
      <div className='w-[35%] max-lg:w-[80%] max-md:w-full max-lg:mx-auto'>
        <p className='text-blue'>Support</p>
        <div className='text-gray800 text-4xl py-4'>FAQs</div>
        <p className='text-gray500 text-lg font-inter400 max-lg:w-[80%] max-sm:w-full leading-[1.4]'>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>
      <div className='w-[55%] max-lg:w-[80%] max-md:w-full max-lg:mx-auto'>
        <Accordion />
      </div>
    </div>
  );
};
export default Faqs;
