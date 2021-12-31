import galleryStyles from '@styles/components/gallery.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"
import SwiperCore, {
    Navigation
} from 'swiper';
import Image from "next/image";

SwiperCore.use([Navigation]);

export default function Gallery() {
    return (
        <div className={galleryStyles.galleryDiv}>
            <h1 className={`title ${galleryStyles.titleshadow}`}>Gallery</h1>
            <div className={galleryStyles.mainBody}>
                <h2>Test</h2>
                <Swiper navigation={true} loop={true}>
                    <SwiperSlide>
                        <h2>Slide 1</h2>
                         <Image src="/images/logos/logo.png" width={500} height={500}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2>Slide 2</h2>
                         <Image src="/images/logos/logo.png" width={500} height={500}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2>Slide 3</h2>
                         <Image src="/images/logos/logo.png" width={500} height={500}/>
                    </SwiperSlide>

                </Swiper>
            </div>


        </div>
    );
}