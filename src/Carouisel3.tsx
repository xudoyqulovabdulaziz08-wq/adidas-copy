import { useRef } from "react";

const resources = [
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
    title: "Originals Sport: As Told by Tate McRae, Emilia Mernes and Harper Murray",
    description: "Introducing the adidas Originals Sport collection, designed for gym-to-street style and functionality. Learn more...",
  },
  {
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600",
    title: "How To Style Superstars: Outfit Inspiration for Any Occasion",
    description: "Need a go-to adidas Superstar outfit? Explore stylist tips and inspo to elevate your next fit, the shoe that...",
  },
  {
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600",
    title: "How to Train for a Marathon: The Ultimate adidas Guide",
    description: "Looking to take on the ultimate running milestone? From mileage plans to recovery tips, our marathon...",
  },
  {
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
    title: "The adidas Samba Size Guide",
    description: "Tired of asking are Sambas true to size? Check out our official adidas Samba size chart for all you need to find...",
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    title: "The Best Running Shoes for Every Athlete",
    description: "Discover the latest running shoes and find the perfect pair for your everyday training...",
  },
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    title: "Discover the Latest Originals Collection",
    description: "Explore iconic adidas Originals styles and find inspiration for your next outfit...",
  },
  {
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600",
    title: "Running Tips for Beginners",
    description: "Start your running journey with helpful tips, training plans and essential equipment...",
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    title: "Find Your Perfect adidas Sneakers",
    description: "Explore different sneaker styles and discover the perfect shoes for your lifestyle...",
  },
];

export default function Carousel3() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = () => {
    carouselRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white px-5 md:px-12 py-6">
      <h2 className="text-2xl font-bold mb-4">
        RELATED RESOURCES
      </h2>

      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-2 overflow-x-auto scroll-smooth pb-6"
        >
          {resources.map((item, index) => (
            <div
              key={index}
              className="min-w-[278px] w-[278px] border border-gray-400 flex-shrink-0"
            >
              <div className="w-full h-[190px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="px-5 py-4">
                <h3 className="font-bold text-base leading-6 mb-2">
                  {item.title}
                </h3>

                <p className="text-base leading-[22px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={moveCarousel}
          className="absolute right-0 top-[180px] w-12 h-12 bg-white border border-gray-300 text-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all"
        >
          →
        </button>
      </div>
    </section>
  );
}
