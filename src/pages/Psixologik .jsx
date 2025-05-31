import React from 'react'
import { useSelector } from 'react-redux';
import HeaderTop from '../components/HeaderTop';
import BestStaticCard from '../components/BestStaticCard';
import Footer from '../components/Footer';

const Trillerler = () => {
  const books = useSelector((state) => state.dataSlice.books);
  const selectedBook = books.filter(book => book.category === "Psixologik");



  return (
    <div>
      <div className='lg:py-10 py-8 lg:px-15 px-5'>
        <div>
          <HeaderTop
            h1={'PangoBooksdagi Psixologik Kitoblar Katalogi'}
            h2={'Inson ruhiy olamining chuqur sirlarini o‘rganishga yordam beradigan psixologik kitoblarni kashf eting.'}
            span={'Psixologik adabiyot – bu inson qalbining eng nozik, eng murakkab jihatlarini o‘rganishga qaratilgan janrdir. Bu turdagi kitoblarda o‘quvchi ruhiy ziddiyatlar, ichki kurashlar, ong osti jarayonlari va shaxsiy o‘zgarishlarga guvoh bo‘ladi. Qahramonlarning kechinmalari, shubhalari, travmalari va qaror qabul qilish jarayoni markazda turadi. Har bir sahifa o‘quvchini ichki olamga chuqur sho‘ng‘ishga, o‘zini anglashga va o‘z psixologik holatini tahlil qilishga undaydi.'}
            span2={'Psixologik romanlar ko‘pincha keskin dramatik vaziyatlar, og‘ir tanlovlar yoki kutilmagan psixologik burilishlar bilan boyitilgan bo‘ladi. Ular o‘quvchini doimiy ravishda o‘ylantiradi, savollar beradi va javob topishga majbur qiladi. Fyodor Dostoyevskiy, Franz Kafka, Haruki Murakami, Gillian Flynn kabi mualliflar psixologik chuqurlikda yozilgan asarlari orqali dunyo adabiyotida chuqur iz qoldirgan. Bu asarlar sizni faqat hikoya bilan emas, balki o‘zingiz haqingizda ham o‘ylashga undaydi.'}
            span3={'Agar siz murakkab xarakterlar, ichki kechinmalar va ong bilan bog‘liq sirlarga qiziqsangiz – PangoBooksdagi psixologik kitoblar sahifasi siz uchun ideal tanlov bo‘ladi. Bu yerda siz psixologik trillerlar, shaxsiy rivojlanishga oid asarlar, real voqealarga asoslangan hikoyalar va ong ostini tahlil qiluvchi chuqur romanlarni topishingiz mumkin. Ruhiy sayohatingizni bugun boshlang – har bir kitob o‘zingizni yanada chuqurroq anglash sari bir qadamdadir.'}
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
export default Trillerler