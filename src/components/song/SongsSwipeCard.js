import SongsCard from './SongsCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import '../swipeStye.css';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

let w = window.innerWidth;
const cardNumber = Math.floor(w / 180);

function SongsSwipeCard({ fetchedData }) {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#ffff',
          '--swiper-navigation-size': '20px',
        }}
        slidesPerView={cardNumber}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {fetchedData.map((songData, index) => (
          <SwiperSlide key={songData.id}>
            <SongsCard songData={songData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SongsSwipeCard;
