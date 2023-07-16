import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      h:"Internship",
      img: profilePic1,
      review:
        "Done my Internship Under SYED MOBIN ARCHITECTS, NAGPUR, Where i got to learn about conceptual detail drawings, working draw- ing,interior drawing,presentations and research work on various project",
    },
    {
      h:"Thesis" ,
      img: profilePic2,
      review:
        "My THESIS Project is based on 'TEXTILE AND ART MUSEUM of MADHYA PRADESH'. The main aim of this proj- ect is to highlight textile and other arts as a prestigious art- form and to cater the importance of the weavers and the artisans and to give a tribute to them.",
    },
    {
      h:"Extra Carriculum" ,
      img: profilePic3,
      review:
        "Participated in Eco Niwas Samhita (ENS) in association with MASA Competition. Participated in Earthen construction technique hands on workshop conducted by SANKALAN",
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Internships and </span>
        <span>Thesis </span>
        <span>...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        // install Swiper modules
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <h2>{client.h}</h2>
              
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
