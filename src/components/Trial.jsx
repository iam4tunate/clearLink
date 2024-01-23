import { IoCheckmarkCircleOutline } from "react-icons/io5";
import SCREEN_MOCKUP from "../assets/images/screen_mockup.svg";

const Trial = () => {
  return (
    <div className="max-w-screen-xl ml-auto pt-12 flex justify-between">
      <div className="w-[40%] pt-16">
        <div className="text-gray800 text-4xl">
          Ready to clear the path to perfect communication?
        </div>
        <div className="space-y-2 py-6">
          <div className="flex items-center gap-x-2">
            <IoCheckmarkCircleOutline className="text-blue text-xl" />
            <span className="font-inter400 text-gray600">
              30 days free trial
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <IoCheckmarkCircleOutline className="text-blue text-xl" />
            <span className="font-inter400 text-gray600">
              Cancel at any time
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <IoCheckmarkCircleOutline className="text-blue text-xl" />
            <span className="font-inter400 text-gray600">
              Access to all features
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <IoCheckmarkCircleOutline className="text-blue text-xl" />
            <span className="font-inter400 text-gray600">
              Personalized onboarding
            </span>
          </div>
        </div>
        <div className="flex items-center text-sm gap-x-4">
          <button className="outline-none border border-gray400 px-4 py-2 text-gray900 bg-white rounded-full">
            Talk to sales
          </button>
          <button className="outline-none border border-gray400 px-4 py-2 text-white bg-blue rounded-full">
            Start your free trial
          </button>
        </div>
      </div>
      <div className="w-[55%]">
        <img src={SCREEN_MOCKUP} alt="mockup" />
      </div>
    </div>
  );
};
export default Trial;
