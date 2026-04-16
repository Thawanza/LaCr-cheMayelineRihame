import React from "react";
import "./Galerie.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

// images
import clown from "../../assets/clown.jpg";
import activité2 from "../../assets/activité (3).jpg";
import cours from "../../assets/cours.jpg";
import creche2 from "../../assets/creche2.jpg";
import nvmbr from "../../assets/nvmbr.jpg";
import img from "../../assets/img.jpg";
import salle from "../../assets/salle.jpg";
import yennayer from "../../assets/yennayer.jpg";
import stade from "../../assets/stade.jpg";
import excu from "../../assets/excu.jpg";
import casc from "../../assets/casc.jpg";
import cour from "../../assets/cour.jpg";
import anniv from "../../assets/anniv.jpg";
import anniv1 from "../../assets/anniv1.jpg";
import céléb from "../../assets/céléb.jpg";
export default function Galerie() {
  return (
    <div className="galerie" id="galerie">
      <h2>Notre Galerie</h2>

      <Swiper
        slidesPerView={1}   // ✅ chaque slide contient 1 bloc
        spaceBetween={20}
        navigation={true}   // ✅ flèches
        modules={[Navigation]}
      >
        {/* Slide 1 */}
        <SwiperSlide>
            <h3 >Bonheur en Images</h3>
          <div className="slide-images">
            <img src={cours} alt="" />
            <img src={cour} alt="" />
            <img src={clown} alt="" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
             <h3 >Activités et cours</h3>
          <div className="slide-images">
            <img src={salle} alt="" />
            <img src={activité2} alt="" />
            <img src={creche2} alt="" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
            <h3 >Anniversaires</h3>
          <div className="slide-images">
            <img src={anniv} alt="" />
            <img src={img} alt="" />
            <img src={anniv1} alt="" />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
            <h3 >Célébrations</h3>
          <div className="slide-images">
            <img src={yennayer} alt="" />
             <img src={nvmbr} alt="" />
              <img src={céléb} alt="" />
          </div>
          
        </SwiperSlide>
         <SwiperSlide>
             <h3 >Excursion</h3>
   <div className="slide-images">
    
     <img src={excu} alt="" />
     <img src={casc} alt="" />
     <img src={stade} alt="" />
   </div>
    </SwiperSlide>
      </Swiper>
    </div>
  );
}