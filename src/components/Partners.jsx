import SHOPIFY from "../assets/images/Shopify.png";
import COINBASE from "../assets/images/Coinbase.png";
import DROPBOX from "../assets/images/Dropbox.png";
import INTERCOM from "../assets/images/Intercom.png";
import MARVEL from "../assets/images/Marvel.png";
import AUTOMATIC from "../assets/images/Automattic.png";

const Partners = () => {
  return (
    <div className="maxW padX text-center py-16">
      <p className="text-gray600 font-inter500 text-lg">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 pt-6 max-sm:pt-8">
        <img src={SHOPIFY} alt="shopify" className="w-[160px]" />
        <img src={COINBASE} alt="coinbase" className="w-[160px]" />
        <img src={DROPBOX} alt="dropbox" className="w-[160px]" />
        <img src={INTERCOM} alt="intercom" className="w-[160px]" />
        <img src={MARVEL} alt="marvel" className="w-[120px]" />
        <img src={AUTOMATIC} alt="automatic" className="w-[160px]" />
      </div>
    </div>
  );
};
export default Partners;
