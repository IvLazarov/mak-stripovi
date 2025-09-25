import comics from "../Comics Info/comics-data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Reader = () => {
   


    return <div className="reader-container">
<Swiper 
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper">
        {comics[0].pages.map((page,index) => {
            return <SwiperSlide key={index}>
                <img src={page} alt="comic-img" />
            </SwiperSlide>
        })}
    </Swiper>
    </div>
    
}

export default Reader;

