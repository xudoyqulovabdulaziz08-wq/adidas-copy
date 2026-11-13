import { useRef } from "react";

const categories = [
  {
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
    items: 3,
  },
  {
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
    items: 3,
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    items: 8,
  },
  {
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800",
    items: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    items: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
    items: 6,
  },
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    items: 7,
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
    items: 5,
  },
];

export default function Carousel2() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    carouselRef.current?.scrollBy({
      left: 390,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-3 px-4 md:px-14 overflow-hidden">

      <div
        ref={carouselRef}
        className="flex gap-2 overflow-x-auto scroll-smooth pb-4"
      >
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[80vw] md:min-w-[372px] h-[505px] overflow-hidden group"
          >
            <img
              src={item.image}
              alt="Fashion collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white px-2 py-1.5">
              <span className="text-sm">{item.items} items</span>

              <button className="border border-gray-500 w-5 h-5 flex items-center justify-center text-xs hover:bg-black hover:text-white transition">
                ↗
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-14 top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 text-2xl hover:bg-black hover:text-white transition hidden md:block"
      >
        →
      </button>

    </section>
  );
}
