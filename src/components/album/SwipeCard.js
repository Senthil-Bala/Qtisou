import AlbumCard from './AlbumCard';

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

function SwipeCard({ fetchedData }) {
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
        {fetchedData.map(albumData => (
          <SwiperSlide key={albumData.id}>
            <AlbumCard albumData={albumData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwipeCard;
