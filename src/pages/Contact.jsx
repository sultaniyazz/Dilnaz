import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">

          {/* Chap taraf - Rasm */}
          <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
            <img
              src="https://highmedgroup.com/wp-content/uploads/2021/12/contact-us3.png"
              alt="Contact"
              className="w-full max-w-2xl h-auto object-contain rounded-md"
            />
          </div>

          {/* O‘ng taraf - Forma */}
          <div className="md:w-1/2 w-full flex justify-center">
            <form className="w-full max-w-md space-y-6">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">Biz bilan bog‘laning</h2>
                <p className="text-gray-500 text-sm">
                  Istalgan savolingiz yoki mulohazangizni bizga yuboring.
                </p>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Ismingiz</label>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Xabaringiz</label>
                <textarea
                  rows="4"
                  placeholder="Xabaringizni shu yerga yozing..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default Contact;
