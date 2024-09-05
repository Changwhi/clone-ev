import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex justify-between flex-wrap space-y-8 md:space-y-0">
        {/* Left section with logo and social icons */}
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold flex items-center space-x-2">
            <span className="text-green-400">⚡</span>
            <span>EV.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaTiktok size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-wrap space-x-12">
          <div>
            <h3 className="font-bold">Search</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">New</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Used</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Custom order</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Discover</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">Compare EVs</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">News & Reviews</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Partner with us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">Dealers</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">OEMs</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Contact sales</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Us */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold">Contact us</h3>
          <a href="mailto:hi@ev.com" className="hover:text-gray-300">Email hi@ev.com</a>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2">Send us feedback</Button>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex justify-between items-center text-sm">
        <p>&copy; 2024 EV.com Inc. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Terms & conditions</a>
          <a href="#" className="hover:text-gray-300">Manage cookies</a>
          <a href="#" className="hover:text-gray-300">Privacy policy</a>
          <a href="#" className="hover:text-gray-300">Site map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
