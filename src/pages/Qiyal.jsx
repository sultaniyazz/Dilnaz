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
        <div>
          <HeaderTop
            h1={'Hayoliy Kitoblar Katalogi'}
            h2={'Sehrli olamlar, g‘ayritabiiy mavjudotlar va orzuga boy voqealar bilan to‘la hayoliy kitoblarni kashf eting.'}
            span={'Hayoliy adabiyot – bu tasavvur va ijodning cheksiz olamiga olib boradigan janrdir. Bu turdagi kitoblarda o‘quvchi sehrgarlar, elflar, ajdaholar, malikalar, qadimiy afsonalar va sirli kuchlarga to‘la olamlar bilan tanishadi. Hikoyalar real hayotdan yiroq, ammo yurakka yaqin bo‘lgan mavzularni o‘z ichiga oladi: jasorat, do‘stlik, fidoyilik va o‘zligini topish. Har bir sahifada yangi moʻjiza, har bir qadamda g‘ayrioddiy hodisa sizni kutadi.'}
            span3={'Agar siz real hayotdan charchagan bo‘lsangiz va bir muddat sehrli olamda sayr qilmoqchi bo‘lsangiz, PangoBooksdagi hayoliy kitoblar sahifasi aynan siz uchun. Bu yerda siz bestseller asarlar, yangi mualliflarning kashfiyotlari, qadimiy afsonalardan ilhomlangan hikoyalar va moʻjizalarga to‘la romanlarni topasiz. Sehr-joduga ishoning – va sahifani ochganingiz zahoti boshqa bir olamda uyg‘onasiz.'}
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

export default Qiyal
