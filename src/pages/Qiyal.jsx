import React from 'react'
import { useSelector } from 'react-redux';
import HeaderTop from '../components/HeaderTop';
import BestStaticCard from '../components/BestStaticCard';
import Footer from '../components/Footer';
const Qiyal = () => {
  const books = useSelector((state) => state.dataSlice.books);
  const selectedBook = books.filter(book => book.category === "Qiyal");



  return (
    <div>
      <div className='lg:py-10 py-8 lg:px-15 px-5'>
        <div><HeaderTop h1={'Young Adult Fiction on PangoBooks'} h2={'Explore a huge range of young adult books at unbeatable prices. '} span={'Young adult fiction—also known as "YA"—has become one of the most popular book genres in the world in recent years. This diverse category refers to any book or series intended for a teenage audience. Typically, these books feature coming-of-age stories in which characters must face challenges related to identity, purpose, and belonging. These themes are common regardless of whether the story includes fantasy elements or is realistic fiction.'} span2={'Make no mistake. YA is widely read and enjoyed by readers of all ages. In fact, according to some sources, more than half of YA readers are not young adults at all. Readers embrace YA for its captivating and emotionally-driven storytelling, relatable characters, and approachable language. '} span3={'Whether you’re 15 or 50, there’s a wide range of young adult literature for you to uncover on PangoBooks. Peruse this page for bestsellers, amazing deals, and other Pango picks.'} /></div>
        <BestStaticCard catalogName={'Jaslar'} genreName={'Tez'} data={selectedBook} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Qiyal