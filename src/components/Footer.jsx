import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-start w-full md:items-center flex-col md:flex-row gap-20">
            <h2 className="text-4xl font-semibold ">Aking.</h2>
            <div className="bg-[#333333] h-[100px] hidden md:block w-[1px]"></div>
            <div className="w-[300px] flex flex-col gap-5">
              <h2 className="text-xl font-semibold">NFT Marketplace</h2>
              <div className="grid grid-cols-2 ">
                <div className="flex flex-col gap-5">
                  <p className="hover:text-green">Explorer</p>
                  <p className="hover:text-green">About Us</p>
                  <p className="hover:text-green">Contact Us</p>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="hover:text-green">FAQ</p>
                  <p className="hover:text-green">Privacy</p>
                  <p className="hover:text-green">Terms of Service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Join Newsletter</h2>
            <p>
              Subscribe to our newsletter to get the latest news and updates
            </p>
            <div className="flex items-center ">
              <input
                type="text"
                className="px-5 py-3 bg-primary focus:outline-none w-full"
                placeholder="Enter your email"
              />
              <button type="button" className="bg-green px-9 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8  border-t border-[#333] ">
        <div className="max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-xs">Copyright @ 2022. Paig All rights reserved</p>
          <div className="flex justify-center gap-3">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
