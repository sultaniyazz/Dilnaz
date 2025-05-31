import React from 'react'
import { useSelector } from 'react-redux';
import HeaderTop from '../components/HeaderTop';
import BestStaticCard from '../components/BestStaticCard';
import Footer from '../components/Footer';
const Fantastika = () => {
  const books = useSelector((state) => state.dataSlice.books);
  const selectedBook = books.filter(book => book.category === "Fantastik");



  return (
    <div>
      <div className='lg:py-10 py-8 lg:px-15 px-5'>
        <div>
          <HeaderTop
            h1={'PangoBooksdagi Fantastik Kitoblar Katalogi'}
            h2={'Sehrli olamlar, epik sarguzashtlar va g‘ayritabiiy kuchlar bilan to‘la fantastik adabiyotlar to‘plamini kashf eting.'}
            span={'Fantastik janr – bu o‘quvchini kundalik hayot chegarasidan chiqarib, tasavvur olamiga yetaklaydigan adabiy yo‘nalishdir. Bu kitoblar sehrgarlar, ajdaholar, boshqa olamdagi mavjudotlar, sehr-jodu va moʻjizaviy voqealarga boy bo‘ladi. Hikoyalar ko‘pincha yosh qahramonlar atrofida aylanadi, ular o‘z dunyosini qutqarish yoki o‘z ichki kuchini kashf qilish uchun katta sarguzashtga otlanadilar. Har bir sahifada yangi sirlar, hayajonli burilishlar va hissiyotlarga boy voqealar sizni kutadi.'}
            span2={'Fantastik adabiyot o‘quvchiga tasavvurini kengaytirish, yangi g‘oyalar haqida o‘ylash, haqiqat bilan xayolot orasidagi nozik chiziqni anglash imkonini beradi. Bu janr nafaqat yosh kitobxonlarga, balki har qanday yoshdagi o‘quvchilarga mo‘ljallangan. Ko‘plab mashhur fantastik romanlar – masalan, J.K. Rowlingning "Garri Potter", J.R.R. Tolkienning "Uzuklar hukmdori", yoki Suzanne Collinsning "Och o‘yinlar" trilogiyasi – butun dunyo bo‘ylab millionlab o‘quvchilarning qalbini zabt etgan.'}
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
export default Fantastika