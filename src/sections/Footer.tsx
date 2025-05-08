// // components/Footer.tsx
// const Footer = () => {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="w-full py-6 px-4 sm:px-8 mt-12">
//       <p className="text-center font-bold">Punjab Trump. {year}&copy; </p>
//     </footer>
//   );
// };

// export default Footer;

import { FaXTwitter } from "react-icons/fa6";
import dexscreener from "../assets/dex-screener.png";
import { PiTelegramLogoLight } from "react-icons/pi";

// import { Reveal } from "../components/Reveal";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full px-6 pt-10 pb-4 mt-auto " id="contact">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-6">
        <p className="font-semibold">Copyright © {year} Punjab Trump</p>

        <div className="flex justify-center gap-4 pt-2">
          <a
            href="#"
            className="bg-sky-400 text-white p-4 rounded-full hover:bg-sky-500 transition cursor-pointer"
          >
            <FaXTwitter className="text-2xl" />
          </a>
          <a
            href="#"
            className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition cursor-pointer"
          >
            <PiTelegramLogoLight className="text-2xl" />
          </a>
          <a
            href="#"
            className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition cursor-pointer"
          >
            <img src={dexscreener} alt="dexscreener" className="w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
