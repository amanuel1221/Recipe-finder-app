
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 justify-space-between items-start  ">
        <div>
          <h3 className="text-xl font-bold mb-2">Recipe Finder</h3>
          <p className="text-gray-400">
            Find delicious recipes from around the world and save your favorites.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/manuell2111"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 fill-current hover:text-white" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11 9.95V14h-3v-2h3v-1.5C11 7.7 12.7 6 15 6h2v2h-2c-.6 0-1 .4-1 1v1h3l-.5 2h-2.5v7.95A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            <a
              href="https://x.com/AmanuelAma66386"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <svg className="w-6 h-6 fill-current hover:text-white" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.52 8.52 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.22 3.87A12.05 12.05 0 0 1 3 4.8a4.22 4.22 0 0 0 1.31 5.65 4.2 4.2 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.4 4.16 4.25 4.25 0 0 1-1.91.07 4.25 4.25 0 0 0 3.97 2.95A8.52 8.52 0 0 1 2 19.54a12.02 12.02 0 0 0 6.5 1.9c7.8 0 12.07-6.46 12.07-12.07 0-.18-.01-.36-.02-.54A8.66 8.66 0 0 0 22.46 6z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com/manuell211"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 fill-current hover:text-white" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.4a4.92 4.92 0 0 1 1.79 1.05 4.92 4.92 0 0 1 1.05 1.79c.16.46.345 1.26.4 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.4 2.43a4.92 4.92 0 0 1-1.05 1.79 4.92 4.92 0 0 1-1.79 1.05c-.46.16-1.26.345-2.43.4-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.4a4.92 4.92 0 0 1-1.79-1.05 4.92 4.92 0 0 1-1.05-1.79c-.16-.46-.345-1.26-.4-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.4-2.43a4.92 4.92 0 0 1 1.05-1.79 4.92 4.92 0 0 1 1.79-1.05c.46-.16 1.26-.345 2.43-.4C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.014 7.052.072 5.775.13 4.772.308 4.042.532a6.92 6.92 0 0 0-2.48 1.03A6.92 6.92 0 0 0 .532 4.042c-.224.73-.402 1.733-.46 3.01C.014 8.332 0 8.735 0 12c0 3.265.014 3.668.072 4.948.058 1.277.236 2.28.46 3.01a6.92 6.92 0 0 0 1.03 2.48 6.92 6.92 0 0 0 2.48 1.03c.73.224 1.733.402 3.01.46C8.332 23.986 8.735 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.28-.236 3.01-.46a6.92 6.92 0 0 0 2.48-1.03 6.92 6.92 0 0 0 1.03-2.48c.224-.73.402-1.733.46-3.01C23.986 15.668 24 15.265 24 12s-.014-3.668-.072-4.948c-.058-1.277-.236-2.28-.46-3.01a6.92 6.92 0 0 0-1.03-2.48 6.92 6.92 0 0 0-2.48-1.03c-.73-.224-1.733-.402-3.01-.46C15.668.014 15.265 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
          </div>
        </div>
        </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
