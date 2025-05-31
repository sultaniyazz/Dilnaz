import React from 'react'
import HeaderTop from '../components/HeaderTop'
import { useSelector } from 'react-redux';
import BestStaticCard from '../components/BestStaticCard';
import Qiyal from './Qiyal';
import Footer from '../components/Footer';

const Realistik = () => {
  const books = useSelector((state) => state.dataSlice.books);
  const selectedBook = books.filter(book => book.category === "Realistik");




  return (
    <div>
      <div className='lg:py-10 py-8 lg:px-15 px-5'>
        <div>
          <HeaderTop
            h1={'PangoBooksdagi Realistik Adabiyot Katalogi'}
            h2={'Haqiqiy hayot voqealari, hissiyotlarga boy syujetlar va hayotiy xarakterlarga asoslangan realistik kitoblarni kashf eting.'}
            span2={'Realistik romanlar o‘quvchiga o‘zini hikoyaning bir qismi deb his qilish imkonini beradi. Ular ko‘pincha o‘ziga xos ijtimoiy mavzular, ruhiy kechinmalar, ichki kurashlar va o‘zgarishlarga asoslanadi. Bu janrdagi kitoblar orasida yoshlar uchun mo‘ljallangan coming-of-age hikoyalaridan tortib, katta yoshdagilar uchun yozilgan murakkab hayotiy dramalargacha bo‘lgan keng turdagi asarlar bor. Mualliflar – John Green, Alice Munro, Jhumpa Lahiri, Khaled Hosseini kabi yozuvchilar realistik yozuv uslubi orqali o‘quvchining yuragiga ta’sir qiladi.'}
            span3={'Agar siz hayotning o‘zi kabi chinakam, chuqur va his-tuyg‘ularga boy hikoyalarni o‘qishni yoqtirsangiz – PangoBooksdagi realistik adabiyot katalogi aynan siz uchun. Bu yerda siz odamlarning o‘ziga xos hayotiy kurashlari, orzulari va o‘sish jarayonlarini o‘rganasiz. Har bir sahifa sizni haqiqatga yaqinlashtiradi. Kitobni oching – va hayotning o‘zi haqida hikoya boshlansin.'}
          />
        </div>

        <BestStaticCard catalogName={'Jaslar'} genreName={'Tez'} data={selectedBook} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Realistik