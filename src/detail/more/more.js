// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import logo2 from '../img/2.png'
import logo3 from '../img/3.png'
import logo4 from '../img/4.png'
import logo5 from '../img/5.png'
import './more.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const likes=[{
    logo:logo2,
    title: 'Binance',
    desc: 'Binance.US is an interactive way to buy, sell, and trade crypto in the US.',
},
{
    logo:logo3,
    title: 'FTX',
    desc: 'FTX is an easy to use crypto exchange where you can buy, sell, and store cryptocurrencies and digital assets such as NFTs.',
},
{
    logo:logo4,
    title: 'OKX',
    desc: 'We reimagining crypto with our commitment to the advancement of DeFi and Web 3.0',
},
{
    logo:logo5,
    title: 'Binance',
    desc: 'Swap, earn, and build on the leading decentralized crypto trading protocol.',
}]

export default function more() {
  return (
    <div className='more-caro'>
        <h2 className='more-h2'>More like this</h2>
        <Swiper
        spaceBetween={38}
        slidesPerView={3.5}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        {getMore()}
        </Swiper>
    </div>
  );
};

function getMore(){
    return (likes.map((like) => 
    <SwiperSlide>
        <div className='more-caroItem hover:drop-shadow-2xl'>
            <div className='title'>
                <img src={like.logo} alt=''></img>
                <h2>{like.title}</h2>
            </div>
            <div className='intro'>{like.desc}</div>
        </div>
    </SwiperSlide>));
}