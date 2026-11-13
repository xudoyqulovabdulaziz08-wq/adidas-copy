
import React, { useState, useEffect, useRef } from "react";

function Xayrulla() {
  const [mahsulotlar, setMahsulotlar] = useState([]);
  const sliderRef = useRef(null);

  const teams = [
    { title: "HOOSIERS", image: "https://a.espncdn.com/i/teamlogos/ncaa/500/84.png" },
    { title: "VOLUNTEERS", image: "https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png" },
    { title: "RED RAIDERS", image: "https://a.espncdn.com/i/teamlogos/ncaa/500/2641.png" },
    { title: "NITTANY LIONS", image: "https://a.espncdn.com/i/teamlogos/ncaa/500/213.png" },
    { title: "AGGIES", image: "https://a.espncdn.com/i/teamlogos/ncaa/500/245.png" },
    { title: "BULLDOGS", image: "https://a.espncdn.com/i/teamlogos/ncaa/500/344.png" },
    { title: "CARDINALS", image: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png" },
  ];

  function scroll(direction) {
    sliderRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    setMahsulotlar([
      {
        title: "FOR THE FANS",
        description: "Rep your school pride with iconic 3-Stripes style.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuRMJBwSEXrmkdVzBjm4swhSyr0O2bOlJXROCXC0fUE77rrioG",
      },
      {
        title: "SAMBA",
        description: "Rooted in heritage, embraced by culture.",
        image: "https://images.uzum.uz/d7r0ukrsv8vo2t0bcd0g/t_product_540_low.jpg",
      },
      {
        title: "FOR THE FANS",
        description: "Rep your school pride.",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900",
      },
      {
        title: "FOR THE FANS",
        description: "Rep your school pride.",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900",
      },

       {
        title: "FOR THE FANS",
        description: "Rep your school pride with iconic 3-Stripes style.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuRMJBwSEXrmkdVzBjm4swhSyr0O2bOlJXROCXC0fUE77rrioG",
      },

       {
        title: "FOR THE FANS",
        description: "Rep your school pride with iconic 3-Stripes style.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuRMJBwSEXrmkdVzBjm4swhSyr0O2bOlJXROCXC0fUE77rrioG",
      },

       {
        title: "FOR THE FANS",
        description: "Rep your school pride with iconic 3-Stripes style.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuRMJBwSEXrmkdVzBjm4swhSyr0O2bOlJXROCXC0fUE77rrioG",
      },

       {
        title: "FOR THE FANS",
        description: "Rep your school pride with iconic 3-Stripes style.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuRMJBwSEXrmkdVzBjm4swhSyr0O2bOlJXROCXC0fUE77rrioG",
      },
    ]);
  }, []);

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold mb-5">
        SHOP THE LATEST DROPS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {mahsulotlar.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover"
            />

            <h2 className="font-bold mt-2">
              {item.title}
            </h2>

            <p className="text-gray-600">
              {item.description}
            </p>

            <button
             onClick={() => window.location.href = "https://www.adidas.com"}
            className="bg-black text-white px-4 py-2 mt-3"
            >
             SHOP NOW
            </button>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-5">
        SHOP BY TEAM
      </h1>

      <div className="relative">

        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 bg-white border p-3 z-10"
        >
          ←
        </button>

        <div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto"
        >
          {teams.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[230px] bg-gray-100 flex flex-col items-center justify-center gap-5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-contain"
              />

              <h2 className="font-bold">
                {item.title}
              </h2>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 bg-white border p-3 z-10"
        >
          →
        </button>

      </div>

    </div>
  );
}

export default Xayrulla;


