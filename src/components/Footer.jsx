import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo va qisqacha tavsif */}
          <div>
            <h2 className="text-xl font-bold">MyApp</h2>
            <p className="text-sm mt-2">
              Hayotingizni yengillashtiradigan zamonaviy ilova.
            </p>
          </div>

          {/* Navigatsiya */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Havolalar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Bosh sahifa</a></li>
              <li><a href="#" className="hover:underline">Biz haqimizda</a></li>
              <li><a href="#" className="hover:underline">Aloqa</a></li>
              <li><a href="#" className="hover:underline">Xizmatlar</a></li>
            </ul>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Bizni kuzating</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-500">Facebook</a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500">Instagram</a>
              <a href="#" aria-label="Telegram" className="hover:text-blue-400">Telegram</a>
            </div>
          </div>
        </div>

        {/* Pastki chiziq */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
          &copy; {new Date().getFullYear()} MyApp. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
