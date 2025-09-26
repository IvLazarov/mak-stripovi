import comics from "../Comics Info/comics-data";
import LinkComponent from "../LinkComponent/LinkComponent";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Reader.css';
import '../Home/Home.css';

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
        {comics[1].entries[0].pages?.map((page,index) => {
            return <SwiperSlide key={index}>
                <img src={page} alt="comic-img" />
            </SwiperSlide>
        })}
    </Swiper>
    <div className="navlinks">
    <LinkComponent />
    <Link className="hover-underline" to={'/СтрипТрип'}>Назад во СтрипТрип</Link>
    </div>
    </div>
    
}

export default Reader;

