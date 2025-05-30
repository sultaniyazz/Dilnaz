import React, { useEffect, useState } from "react";
import { ChevronRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Likes = () => {
  const [likedHomes, setLikedHomes] = useState([]);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likedBooks")) || [];
    setLikedHomes(storedLikes);
  }, []);

  const handleRemoveLike = (slug) => {
    const updatedLikes = likedHomes.filter((home) => home.slug !== slug);
    localStorage.setItem("likedBooks", JSON.stringify(updatedLikes));
    setLikedHomes(updatedLikes);
  };

  return (
    <div className="lg:py-10 py-8 lg:px-16 px-5">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Yoqtirgan uyingiz
      </h2>

      {likedHomes.length === 0 ? (
        <p className="text-gray-600">
          Siz hali hech qanday uyga like bosmagansiz.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {likedHomes.map((home) => (
            <div
              key={home.slug}
              className="relative bg-white rounded-2xl shadow hover:shadow-lg transition p-3 border border-gray-100 h-full"
            >
              {/* Remove like tugmasi */}
              <button
                onClick={() => handleRemoveLike(home.slug)}
                className="absolute top-3 right-3 p-1 bg-white rounded-full shadow hover:bg-gray-100 transition"
                title="Like olib tashlash"
              >
                <Heart className="w-5 h-5 text-red-500" fill="red" />
              </button>

              {/* Karta kontenti */}
              <Link
                to={`/detail/${home.slug}`}
                className="flex flex-col h-full"
              >
                <div className="w-full md:h-80 rounded-xl overflow-hidden mb-3">
                  <img
                    src={home.image}
                    alt={home.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Kontent (pastga surish uchun grow ishlatiladi) */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {home.title}
                  </h3>
                  <p className="text-copy text-sm mb-2">{home.author}</p>

                  {/* Pastdagi qism har doim tagda turadi */}
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-blue-600 font-medium">
                      ${home.price}
                    </span>
                    <ChevronRight />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Likes;
