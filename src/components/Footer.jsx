import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Safety Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Cookies Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-center">
            &copy; 2024 Indeed Hire. All rights reserved.
          </p>
          <p className="text-sm text-center mt-2">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="hover:underline text-gray-300">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="hover:underline text-gray-300">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
