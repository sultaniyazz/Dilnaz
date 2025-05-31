import React, { useState, useEffect } from "react";
import {
  Heart,
  Star,
  ShoppingCart,
  User,
  MessageCircle,
  Clock,
  Tag,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer"

const CardDetail = () => {
  const { slug } = useParams();
  const books = useSelector((state) => state?.dataSlice.books);
  const selectedBook = books?.find((book) => book.slug === slug);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (selectedBook) {
      setLikes(selectedBook.likes);
    }

    const likedBooks = JSON.parse(localStorage.getItem("likedBooks")) || [];
    const isLiked = likedBooks.some((book) => book.slug === slug);
    setLiked(isLiked);
  }, [selectedBook, slug]);

  const toggleLike = () => {
    let likedBooks = JSON.parse(localStorage.getItem("likedBooks")) || [];

    if (liked) {
      // Unlike
      likedBooks = likedBooks.filter((book) => book.slug !== selectedBook.slug);
      localStorage.setItem("likedBooks", JSON.stringify(likedBooks));
      setLiked(false);
      setLikes((prev) => prev - 1);
    } else {
      // Like
      likedBooks.push(selectedBook);
      localStorage.setItem("likedBooks", JSON.stringify(likedBooks));
      setLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  if (!selectedBook) {
    return <div className="text-center text-red-500">Book not found</div>;
  }

  return (
    <div>
      {/* Left section */}
      <div className="px-4 md:px-5 py-10 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/3 md:p-8 flex flex-col relative">
          <div className="relative mb-8">
            <img
              src={selectedBook.image}
              alt={selectedBook.title}
              className="lg:rounded-2xl lg:shadow-md object-contain w-full h-[400px] md:h-[400px] lg:h-[480px]"
            />
            <button
              onClick={toggleLike}
              className={`absolute top-4 right-4 rounded-full shadow-md px-3 py-2 flex items-center gap-1 text-gray-700 transition ${liked ? "bg-red-100" : "bg-white hover:bg-red-50"
                }`}
            >
              <Heart
                size={18}
                className={liked ? "text-red-600 fill-red-600" : "text-red-500"}
              />
              <span className="font-semibold">{likes}</span>
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-5 text-gray-900">
            {selectedBook.title}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
            {selectedBook.description}
          </p>

          <div className="flex flex-wrap gap-6 text-gray-600 text-sm font-medium mb-6">
            <div className="flex items-center gap-2">
              <Clock className="text-blue-500" size={18} />
              <span>Posted: {selectedBook.postedAt}</span>
            </div>

            <div className="flex items-center gap-2 text-yellow-500 font-semibold">
              <Star size={20} fill="currentColor" />
              <span>{selectedBook.rating}</span>
            </div>

            <div className="flex items-center gap-2">
              <MessageCircle className="text-green-500" size={18} />
              <span>{selectedBook.comments.length} Comments</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag className="text-pink-500" size={18} />
              <span>Category: {selectedBook.category}</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              Comments
            </h2>
            <ul className="space-y-3 max-w-xl">
              {selectedBook.comments.map(({ index, user, comment }) => (
                <li key={index + 1} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-semibold">
                    {user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{user}</p>
                    <p className="text-sm text-gray-600">{comment}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/3 sticky top-0 self-start bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Fraza
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg line-clamp-6">
            {selectedBook.phrase}
          </p>

          <div className="flex flex-col gap-6 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <User className="text-indigo-600" size={24} />
              <span>
                Seller:{" "}
                <span className="font-semibold text-gray-900">
                  {selectedBook.author}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ShoppingCart className="text-green-600" size={24} />
              <span className="font-semibold text-gray-900">
                ${selectedBook.id * 1.2}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Star className="text-yellow-400" size={24} fill="currentColor" />
              <span className="font-semibold">{selectedBook.rating}</span>
            </div>
          </div>

          <button
            onClick={() => alert("So'rovingiz yuborildi")}
            className="mt-auto bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-xl font-bold text-xl"
          >
            Buy Now
          </button>

        </div>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default CardDetail;
