import Accordion from './Accordion';

const Faqs = () => {
  return (
    <div className='maxW padX py-16 max-sm:py-12 flex max-lg:flex-col gap-y-8 justify-between'>
      <div className='w-[35%] max-lg:w-[80%] max-md:w-full max-lg:mx-auto'>
        <p className='text-blue'>Support</p>
        <div className='text-gray800 text-4xl max-md:text-3xl py-4 max-sm:py-2.5'>
          FAQs
        </div>
        <p className='text-gray500 text-lg max-md:text-base font-inter400 max-lg:w-[80%] max-sm:w-full max-sm:leading-[1.3]'>
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
