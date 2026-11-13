const footerLinks = [
  {
    title: "SEASONAL FOOTWEAR",
    links: ["Loafers", "Mules & Clogs", "Boots", "Suede Shoes", "Brown Shoes"],
  },
  {
    title: "GIFTS THEY'LL LOVE",
    links: ["Loungewear", "Pet Accessories", "Tote Bags", "Track Suits", "Socks"],
  },
  {
    title: "WARM WINTER ACCESSORIES",
    links: ["Scarves", "Beanies", "Shoulder Bags", "Hats", "Belts"],
  },
  {
    title: "COLD WEATHER WARDROBE",
    links: ["Knitwear", "Sweaters", "Winter Jackets", "Denim Pants", "Hoodies & Sweatshirts"],
  },
];

export default function Carouseltex() {
  return (
    <section className="w-full min-h-[296px] bg-white px-6 md:px-11 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h3 className="font-bold text-sm mb-7">
              {item.title}
            </h3>

            <div className="flex flex-col gap-6">
              {item.links.map((link) => (
                <a
                  href="#"
                  key={link}
                  className="text-sm text-gray-900 hover:underline w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
