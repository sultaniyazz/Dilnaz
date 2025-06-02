import React from 'react'
import { useSelector } from 'react-redux';
import HeaderTop from '../components/HeaderTop';
import BestStaticCard from '../components/BestStaticCard';
import Footer from '../components/Footer';
const TarixiyShigarma = () => {
  const books = useSelector((state) => state.dataSlice.books);
  const selectedBook = books.filter(book => book.category === "Tarixiy");



  return (
    <div>
      <div className='lg:py-10 py-8 lg:px-15 px-5'>
        <div>
          <HeaderTop
            h1={'Tarixiy Kitoblar Katalogi'}
            h2={'O‘tmish sahifalariga sayohat qiling — tarixiy romanlar, unutilmas davrlar va buyuk shaxslar haqida hikoyalarni kashf eting.'}
            span={'Tarixiy adabiyot – bu o‘tmishni jonlantiruvchi, qadimiy davrlar, madaniyatlar va tarixiy shaxslar hayotini hikoya qiluvchi janrdir. Bu kitoblar orqali siz urushlar, inqiloblar, qirollik saroylari, mustamlaka davrlari yoki oddiy odamlarning tarixiy muhitdagi hayoti bilan tanishasiz. Ular faqat sanalar va faktlar emas, balki o‘sha davrning hissiyotlari, qadriyatlari va odamlarining hayotiy qarorlarini ham ochib beradi.'}
            span2={'Tarixiy romanlar nafaqat bilim beradi, balki o‘quvchini o‘tmishdagi voqealar ichiga olib kiradi. Ular ko‘pincha haqiqat bilan xayolot orasidagi mukammal muvozanatni saqlagan holda, tarixiy voqealarni shaxsiy kechinmalar orqali yoritadi. Hilary Mantel, Ken Follett, Philippa Gregory, va Umberto Eco kabi mualliflar tarixiy syujetlarga asoslangan romanlari bilan butun dunyoda mashhurlikka erishgan. Ularning asarlari o‘quvchiga o‘tmishni nafaqat bilish, balki his qilish imkonini beradi.'}
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

export default TarixiyShigarma
