import React from "react";
import { CalendarDays, Star } from "lucide-react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const BestStaticCard = ({ catalogName, genreName, data }) => {
  const loading = useSelector(state => state.dataSlice.loading)
  const pp = [1, 2, 3, 4, 5]



  return (
    <section className="w-full py-10 text-copyDark">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Eng yaxshi kitoblar
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:gap-6 gap-3">
          {loading ?
            pp.map((state, index) => (
              <div key={index + 1} className="w-full flex flex-col justify-between shadow h-100 rounded-2xl ">
                <span className="rounded-t-2xl md:h-70 h-50 bg-gray-100"></span>
                <span className="bg-white px-2 flex flex-col  w-full rounded-b-2xl h-30">
                  <span className="px-1 w-30 h-4 my-1 animate-pulse bg-gray-100 rounded-full "></span>
                  <span className="px-1 w-20 h-4 my-1 animate-pulse bg-gray-100 rounded-full "></span>

                </span>
              </div>
            ))
            :
            data?.map((book) => (

              <Link key={book.id} to={`/detail/${book.slug}`} className="h-full">
                <div
                  className="bg-white w-full h-full
                rounded-2xl shadow-md overflow-hidden relative
                hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  style={{ cursor: "pointer" }}
                >
                  <button className="absolute flex items-center gap-1 text-xs px-2 top-2 right-2 bg-white p-1 rounded-full shadow-sm hover:text-blue-500 z-10">
                    <CalendarDays size={12} />{book.publishedYear}
                  </button>

                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="p-3 flex flex-col justify-between flex-1">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-1">
                      <span className="truncate">{book.seller}</span>
                      <span className="flex items-center gap-1 text-yellow-500 font-medium">
                        {book.rating} <Star size={14} fill="currentColor" />
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                      {book.title}
                    </h3>

                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        ${book.price}
                      </span>
                      <button className="text-xs">
                        {book.author}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default BestStaticCard;
