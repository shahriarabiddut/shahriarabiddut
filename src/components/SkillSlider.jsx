import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import js from "../assets/skills/js.png";
import php from "../assets/skills/php.webp";
import laravel from "../assets/skills/laravel.png";
import react from "../assets/skills/react.webp";
import nodejs from "../assets/skills/nodejs.webp";
import mongodb from "../assets/skills/mongodb.webp";
import mysql from "../assets/skills/mysql.svg";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.webp";
import next from "../assets/skills/next.png";

const SkillsSlider = () => {
  const skills = [
    html,
    css,
    js,
    react,
    nodejs,
    next,
    mongodb,
    mysql,
    php,
    laravel,
  ];

  return (
    <div className="w-full p-6">
      <p className="text-xl text-gray-500 text-center my-4">
        Technologies I Know!
      </p>
      <h6 className="text-4xl font-bold mb-6 font-paaji text-primary1  text-center">
        Skills
      </h6>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 rounded-lgtext-center flex justify-center items-center hover:bg-slate-100">
              <img src={skill} className="w-24 h-24" alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsSlider;
