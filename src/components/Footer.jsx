import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import LOGO from "../assets/images/logo.svg";
import APPSTORE from "../assets/images/appstore.svg";
import GOOGLEPLAY from "../assets/images/googleplay.svg";

const Footer = () => {
  return (
    <footer>
      <div className="maxW padX pt-20 pb-10 flex flex-wrap gap-x-16 gap-y-14">
        <div className="w-[35%] max-lg:w-[45%] max-sm:w-full">
          <img src={LOGO} alt="logo" className="mb-6" />
          <span className="font-inter400 text-gray600">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </span>
        </div>
        <ul className="text-gray600 space-y-4">
          <div className="text-gray500 text-sm">Product</div>
          <li className="">Overview</li>
          <li className="">Features</li>
          <li className="">Solutions</li>
          <li className="">Tutorials</li>
          <li className="">Pricing</li>
        </ul>
        <ul className="text-gray600 space-y-4">
          <div className="text-gray500 text-sm">Company</div>
          <li className="">About us</li>
          <li className="">Careers</li>
          <li className="">Press</li>
          <li className="">News</li>
          <li className="">Contact</li>
        </ul>
        <ul className="text-gray600 space-y-4">
          <div className="text-gray500 text-sm">Resources</div>
          <li className="">Blog</li>
          <li className="">Events</li>
          <li className="">Help centre</li>
          <li className="">Tutorials</li>
          <li className="">Support</li>
        </ul>
        <ul className="text-gray600 space-y-4">
          <div className="text-gray500 text-sm">Legal</div>
          <li className="">Terms</li>
          <li className="">Privacy</li>
          <li className="">Cookies</li>
          <li className="">Licences</li>
          <li className="">Contact</li>
        </ul>
        <div className="">
          <span className="text-blue text-sm">Get the app</span>
          <div className="">
            <img src={APPSTORE} alt="app store" className="mt-2 pb-4" />
            <img src={GOOGLEPLAY} alt="google play" />
          </div>
        </div>
      </div>
      <div className="bg-gray50 py-8 max-sm:py-4">
        <div className="maxW padX flex max-sm:flex-col gap-4 items-center justify-between">
          <p className="text-gray500 font-inter400">
            © 2023 ClearLink. All rights reserved.
          </p>
          <div className="flex items-center text-gray400 text-xl gap-x-4">
            <FaLinkedin />
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaGithub />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
