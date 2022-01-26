import galleryStyles from "@styles/components/gallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import Image from "next/image";

SwiperCore.use([EffectFade, Navigation]);
//Testing Swiper Slides

export default function Gallery() {
  return (
    <div className={galleryStyles.galleryDiv}>
      <h1 className={`title ${galleryStyles.titleshadow}`}>Gallery</h1>
      <div className={galleryStyles.mainBody}>
        <div className={galleryStyles.galleryContainer}>
          <div className={galleryStyles.leftSliderContainer}>
          
              <div className={galleryStyles.date}>
                <h2>2022</h2>
              </div>
            
           
            <div className={galleryStyles.slider}>
              <Swiper loop={true} navigation={true}>
                <SwiperSlide>
                  <h2>Slide 1</h2>
                  <Image
                    src="/images/test1.jpeg"
                    width={700}
                    height={400}
                    alt="img 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <h2>Slide 2</h2>
                  <Image
                    src="/images/logos/logo.png"
                    width={500}
                    height={500}
                    alt="img 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <h2>Slide 3</h2>
                  <Image
                    src="/images/logos/logo.png"
                    width={500}
                    height={500}
                    alt="img 3"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className={galleryStyles.leftSliderContainer}>
        
       
        <div className={galleryStyles.slider}>
          <Swiper loop={true} navigation={true}>
            <SwiperSlide>
              <h2>Slide 1</h2>
              <Image
                src="/images/test1.jpeg"
                width={700}
                height={400}
                alt="img 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <h2>Slide 2</h2>
              <Image
                src="/images/logos/logo.png"
                width={500}
                height={500}
                alt="img 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <h2>Slide 3</h2>
              <Image
                src="/images/logos/logo.png"
                width={500}
                height={500}
                alt="img 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={galleryStyles.date}>
            <h2>2021</h2>
          </div>
      </div>
        </div>

      </div>
    </div>
  );
}
