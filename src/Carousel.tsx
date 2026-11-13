import { useEffect, useRef, useState } from "react";

const categories = ["Top Gifts", "For Him", "For Her", "For Kids"];

type Product = {
  name: string;
  price: number;
  category: string;
};

const products: Record<string, Product[]> = {
  "Top Gifts": [
    { name: "Handball Spezial Shoes", price: 110, category: "Originals" },
    { name: "KNIT ESSENTIALS BOUCLE PANTS", price: 85, category: "Originals" },
    { name: "KNIT ESSENTIALS BOUCLE CREW", price: 85, category: "Originals" },
    { name: "HANDBALL SPEZIAL SHOES", price: 120, category: "Originals" },
    { name: "Adidas Originals Shoes", price: 110, category: "Originals" },
    { name: "Classic Sneakers", price: 95, category: "Originals" },
    { name: "Sport Essentials Pants", price: 75, category: "Sportswear" },
    { name: "Originals Sweatshirt", price: 90, category: "Originals" },
  ],

  "For Him": [
    { name: "Men Originals Shoes", price: 120, category: "Originals" },
    { name: "Men Sport Pants", price: 85, category: "Sportswear" },
    { name: "Men Sweatshirt", price: 95, category: "Originals" },
    { name: "Handball Spezial Shoes", price: 110, category: "Originals" },
    { name: "Men Hoodie", price: 90, category: "Originals" },
    { name: "Classic Sneakers", price: 100, category: "Originals" },
    { name: "Sport Jacket", price: 115, category: "Sportswear" },
    { name: "Men Essentials", price: 80, category: "Originals" },
  ],

  "For Her": [
    { name: "Women Originals Shoes", price: 110, category: "Originals" },
    { name: "Women Sport Pants", price: 85, category: "Sportswear" },
    { name: "Women Sweatshirt", price: 90, category: "Originals" },
    { name: "Classic Sneakers", price: 120, category: "Originals" },
    { name: "Women Hoodie", price: 95, category: "Originals" },
    { name: "Running Shoes", price: 115, category: "Running" },
    { name: "Sport Pants", price: 80, category: "Sportswear" },
    { name: "Original Shoes", price: 105, category: "Originals" },
  ],

  "For Kids": [
    { name: "Kids Sneakers", price: 65, category: "Kids" },
    { name: "Kids Sport Pants", price: 45, category: "Kids" },
    { name: "Kids Sweatshirt", price: 55, category: "Kids" },
    { name: "Kids Running Shoes", price: 70, category: "Kids" },
    { name: "Kids Hoodie", price: 60, category: "Kids" },
    { name: "Kids Originals", price: 75, category: "Kids" },
    { name: "Kids Sport Shoes", price: 65, category: "Kids" },
    { name: "Kids Essentials", price: 50, category: "Kids" },
  ],
};

const carouselImages: Record<string, string[]> = {
  "Top Gifts": [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    "https://n.cdn.cdek.shopping/images/shopping/JpomYW7mTeMDakrW.jpg?v=1",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
    "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
    "https://avatars.mds.yandex.net/get-mpic/15992133/2a00000196fd7769e721d700b1537dd3e7c1/orig",
  ],
  "For Him": [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
  ],
  "For Her": [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
  ],
  "For Kids": [
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
  ],
};

export default function Carousel() {
  const [activeTab, setActiveTab] = useState("Top Gifts");
  const [liked, setLiked] = useState<string[]>([]);

  const carouselRef = useRef<HTMLDivElement>(null);

  const currentProducts = products[activeTab];
  const currentImages = carouselImages[activeTab];

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    setLiked([]);

    carouselRef.current?.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (!carouselRef.current) return;

      const firstCard = carouselRef.current.querySelector<HTMLElement>("[data-carousel-card]");
      const cardWidth = firstCard?.offsetWidth ?? 278;
      const gap = 8;
      const maxScroll =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      const nextLeft =
        carouselRef.current.scrollLeft + cardWidth + gap >= maxScroll
          ? 0
          : carouselRef.current.scrollLeft + cardWidth + gap;

      carouselRef.current.scrollTo({
        left: nextLeft,
        behavior: "smooth",
      });
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [activeTab]);

  const moveCarousel = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  const toggleLike = (index: number) => {
    const id = `${activeTab}-${index}`;

    setLiked((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="w-full min-h-[593px] bg-white px-4 md:px-16 py-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => changeTab(tab)}
              className={`border border-gray-300 px-3 py-1.5 text-sm md:text-base transition-all ${
                activeTab === tab
                  ? "bg-black text-white border-black"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <a href="#" className="hidden sm:block font-bold text-sm underline">
          SHOP ALL
        </a>
      </div>

      <div className="relative group">
        <button
          onClick={() => moveCarousel("left")}
          className="absolute left-2 top-[130px] z-10 bg-white shadow-md w-10 h-10 rounded-full text-2xl opacity-0 group-hover:opacity-100 transition"
        >
          ‹
        </button>

        <div
          ref={carouselRef}
          className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {currentProducts.map((product, index) => {
            const id = `${activeTab}-${index}`;

            return (
              <div
                key={id}
                data-carousel-card
                className="min-w-[230px] md:min-w-[278px] flex-shrink-0"
              >
                <div className="relative w-full h-[278px] bg-[#edf0f1] overflow-hidden">
                  <img
                    src={currentImages[index % currentImages.length]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />

                  <button
                    onClick={() => toggleLike(index)}
                    className="absolute top-5 right-5 text-3xl leading-none"
                  >
                    {liked.includes(id) ? "♥" : "♡"}
                  </button>
                </div>

                <div className="px-2 pt-2">
                  <p className="font-bold text-sm">
                    ${product.price}
                  </p>

                  <h3 className="text-sm mt-3 leading-5 min-h-[40px]">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {product.category}
                  </p>

                  <p className="text-xs text-blue-500 mt-6">
                    ✔ prime
                    <span className="text-gray-400 ml-1">
                      options available
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => moveCarousel("right")}
          className="absolute right-2 top-[130px] z-10 bg-white shadow-md w-10 h-10 rounded-full text-2xl opacity-0 group-hover:opacity-100 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
