import React from 'react';
import { SiAdidas } from "react-icons/si";

const Sneakers = () => {
return (
 
 <section className="w-full min-h-[593px] bg-black px-[5%] pt-[75px] pb-16">
    <h1 className="text-white text-center uppercase text-3xl md:text-3xl font-extrabold tracking-[2px]">
        Sneakers, Activewear and Sporting Goods
    </h1>
    <div className="mt-7 text-white text-[15px] md:text-[16px] leading-[22px]">
        <p>
        Calling all athletes. Gear up for your favorite sport with adidas sneakers and activewear for men and women. From running to soccer and the gym to the trail, performance workout clothes and shoes keep you feeling your best. Find sport-specific sneakers to support your passion, and shop versatile activewear and accessories that support everyday comfort. adidas has you covered with world-class performance, quality and unmatched comfort to fit your style. Explore the full range of adidas gear today.
        </p>
        <p className="mt-5">
        Founded on performance, adidas sporting goods equipment supports athletes at all levels. Men, women and kids will find their best form in sneakers and activewear made to perform under pressure. adidas sportswear breathes, manages sweat and helps support working muscles. Explore sport-specific clothes and gear for basketball, soccer, or the yoga studio. Runners will find a range of sneakers for training, racing and trail runs. Gym users will find tops, tees and tanks that support focused efforts with adidas CLIMACOOL to feel cool and dry. Explore warm-ups featuring four-way stretch to support mobility. Find a new outdoor jacket that helps protect against wind and rain. Lace up new athletic shoes that energize every step with adidas Boost cushioning. With sizes and styles for all ages, we have sporting goods for the whole family. Dedicated training demands dedicated workout clothes. Experience the latest performance fabrics and sneaker technologies to get the most out of your next training session.
        </p>
    </div>
    <div className="flex justify-center mt-15">
        <SiAdidas className="text-white text-[50px]" />
    </div>
 </section>
 
);
};

export default Sneakers;