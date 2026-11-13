
import React from "react";

const Banner = () => {
  const categories = ["MEN", "WOMEN", "KIDS"];

  return (
    <section className="relative w-full h-[min(800px,41.67vw)] min-h-[600px] overflow-hidden bg-[#a51b10] text-white">

      
      <div className="absolute inset-0">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/promo_fw26_blackfriday_bnr_ea_firstday_en_d_bd6b4b3330.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

   
      <div className="relative z-10 flex h-full flex-col items-center">

        
       

        
        

        
        <div className="absolute bottom-[40px] left-[8.2%] flex flex-col items-start">
            <div className="max-w-[360px] bg-white px-[4px] py-[3px] text-black">
                <div className="inline-block bg-white px-[3px] py-[1px] font-['Oswald'] text-[15px] font-bold tracking-[4px] leading-tight">
                    ADICLUB MEMBERS FIRST ACCESS
                </div>
            </div>
          <div className="max-w-[360px] bg-white mt-2 px-[4px] py-[3px] text-black">

            

            <p className="mt-[4px] text-[14px] leading-[1.5]">
              Logged in members get access to up to 60% off.
              <span className="bg-[#2563eb] text-white px-[2px]">
                Sale
              </span>
              <br />
              ends 11/18.
            </p>
          </div>

          <div className="mt-[17px] flex gap-[8px]">
            {categories.map((category) => (
              <button
                key={category}
                className="flex h-[36px] items-center gap-[12px] border border-black bg-white px-[10px] text-[14px] font-bold text-black transition-colors duration-200 hover:bg-black hover:text-white"
              >
                {category}
                    
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
