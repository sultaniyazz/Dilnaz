import React from 'react'
import HeaderTop from '../components/HeaderTop'
import { useSelector } from 'react-redux';
import BestStaticCard from '../components/BestStaticCard';
import Qiyal from './Qiyal';
import Footer from '../components/Footer';

const Detective = () => {
  const books = useSelector((state) => state.dataSlice.books);
  const selectedBook = books.filter(book => book.category === "Dramma");




  return (
    <div>
      <div className='lg:py-10 py-8 lg:px-15 px-5'>
        <div>
          <HeaderTop
            h1={'Drammatik Kitoblar Katalogi'}
            h2={'Hayotning o‘zi kabi murakkab, og‘riqli va ta’sirli hikoyalarni kashf eting — drammatik adabiyot bilan birga yashang va his eting.'}
            span2={'Drammatik romanlar ko‘pincha oila ichidagi murakkab munosabatlar, jamiyatdagi tengsizlik, insoniy xatolar va kechikkan qarorlar haqida hikoya qiladi. Ular bizni inson sifatida qanday o‘sayotganimiz, qanday tuyg‘ular bilan yashayotganimiz haqida o‘ylashga undaydi. Mualliflar – Toni Morrison, Elena Ferrante, Khaled Hosseini, Colleen Hoover kabi yozuvchilar o‘z asarlari orqali yuraklarni titratadigan, unutilmas drammatik hikoyalar yaratgan.'}
            span3={'Agar siz yurakka ta’sir qiladigan, chuqur maʼnoga ega va hissiy jihatdan boy asarlarni sevuvchi kitobxon bo‘lsangiz — PangoBooksdagi drammatik kitoblar sahifasi aynan siz uchun. Bu yerda siz insoniyatning eng nozik va zaif tomonlarini yorituvchi romanlar, yurakni ezadigan voqealar va umid bilan tugaydigan dramalarni topasiz. Kitobni oching – va boshqa birovning ichki dunyosi bilan yuzma-yuz bo‘ling.'}
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

export default Detective
