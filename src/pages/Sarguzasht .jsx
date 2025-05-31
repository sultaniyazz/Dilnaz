import React from 'react'
import HeaderTop from '../components/HeaderTop'
import { useSelector } from 'react-redux';
import BestStaticCard from '../components/BestStaticCard';
import Qiyal from './Qiyal';
import Footer from '../components/Footer';

const Sarguzasht = () => {
  const books = useSelector((state) => state.dataSlice.books);
  const selectedBook = books.filter(book => book.category === "Sarguzasht");
  console.log(selectedBook);





  return (
    <div>
      <div className='lg:py-10 py-8 lg:px-15 px-5'>
        <div>
          <HeaderTop
            h1={'PangoBooksdagi Sarguzasht Kitoblar Katalogi'}
            h2={'Hayajon, jasorat va kutilmagan burilishlarga to‘la sarguzasht romanlarini kashf eting.'}
            span={'Sarguzasht janri – bu yuragingizni tez urdirmaydigan, sizni yangi dunyolar, nomaʼlum hududlar va xavf-xatar bilan to‘la yo‘llarga yetaklamaydigan kitoblar toifasi emas. Bu janr sizni qahramonlar bilan birga cho‘llar, o‘rmonlar, qadimiy xarobalar, yoki hatto boshqa qitʼalarga olib chiqadi. Ular doimo biror narsa izlaydi – baʼzan yo‘qolgan xazina, baʼzan o‘zini anglash, baʼzan esa dunyoni qutqarish. Har bir sahifa yangi sarguzasht, yangi qaror va yangi xavfni olib keladi.'}
            span2={'Sarguzasht romanlari o‘quvchini o‘qiganida hodisalar ichiga tortib oladi – siz nafaqat hikoyani o‘qiysiz, balki uni his qilasiz. Siz bilan birga qahramonlar dushmanlarga qarshi kurashadi, do‘stlikni qadrlaydi, xatolardan saboq oladi va katta jasorat bilan oldinga boradi. Bu janr yosh bolalar uchun yozilgan engil hikoyalardan tortib, kattalarga mo‘ljallangan murakkab va falsafiy sarguzashtlargacha bo‘lgan keng ko‘lamni o‘z ichiga oladi. Indiana Jones, Tintin, Hatiko yoki Percy Jackson kabi mashhur sarguzashtlar bu janrning mashhurligini isbotlab turibdi.'}
            span3={'Agar siz hayotingizga ozgina hayajon, ozgina sir va ko‘p miqdorda sarguzasht qo‘shmoqchi bo‘lsangiz – PangoBooksdagi sarguzasht kitoblar to‘plami aynan siz izlagan narsa. Bestseller romanlar, sarguzasht trilogiyalar, qiziqarli sayohatlar va tarixiy ekspeditsiyalar haqidagi asarlar sizni kutmoqda. Bugunoq o‘zingiz uchun bir sarguzasht boshlang – sahifani oching va sarguzasht olamiga sho‘ng‘ing!'}
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

export default Sarguzasht