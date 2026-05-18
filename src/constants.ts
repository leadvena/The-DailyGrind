export const CAFE_INFO = {
  name: "The Daily Grind Espresso Cafe",
  tagline: "Stillwater's Oldest Coffee Shop",
  address: "217 N Main St, Stillwater, MN 55082, USA",
  phone: "651-430-3207",
  whatsapp: "+16514303207",
  email: "hello@dailygrindstillwater.com",
  hours: "Mon–Sat 6AM–1PM (Closed Sundays)",
  googleReviewsLink: "https://www.google.com/search?q=The+Daily+Grind+Espresso+Cafe+Stillwater+MN+reviews",
  aboutShort: "Founded in the heart of downtown Stillwater, we've been serving the community for decades. Located uniquely inside a historic bookstore, we offer a peaceful escape where caffeine meets culture.",
  description: "Stillwater's oldest coffee shop. Handcrafted espresso drinks, breakfast sandwiches, and pastries in the heart of downtown Stillwater, MN.",
};

export const FEATURED_DRINKS = [
  {
    name: "Classic Espresso",
    description: "Rich, full-bodied double shot with perfect crema.",
    price: "$3.50",
    image: "/images/espresso_shot.png"
  },
  {
    name: "Honey Amber Latte",
    description: "Our signature latte with local honey and a dash of cinnamon.",
    price: "$5.25",
    image: "https://images.unsplash.com/photo-1570968015848-96bc1bfc429f?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Slow-Drip Cold Brew",
    description: "Brewed for 18 hours for a smooth, bold finish.",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Seasonal Maple Mist",
    description: "Warm milk, maple syrup, and dark roast espresso.",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop"
  }
];

export const MENU_CATEGORIES = [
  {
    name: "Espresso & Coffee",
    image: "/images/latte_art.png",
    items: [
      { name: "Americano", price: "$3.75", category: "Espresso & Coffee", image: "/images/latte_art.png" },
      { name: "Cappuccino", price: "$4.50", category: "Espresso & Coffee", image: "/images/latte_art.png" },
      { name: "Latte", price: "$4.75", category: "Espresso & Coffee", image: "/images/latte_art.png" },
      { name: "Mocha", price: "$5.25", category: "Espresso & Coffee", image: "/images/latte_art.png" },
      { name: "Drip Coffee", price: "$3.00", category: "Espresso & Coffee", image: "/images/pour_over.png" },
      { name: "Pour Over", price: "$4.50", category: "Espresso & Coffee", image: "/images/pour_over.png" }
    ]
  },
  {
    name: "Breakfast Sandwiches",
    image: "/images/breakfast_sandwich.png",
    items: [
      { name: "Bacon, Egg & Cheese", price: "$7.50", description: "Choice of bagel, croissant, or sourdough", category: "Breakfast Sandwiches", image: "/images/breakfast_sandwich.png" },
      { name: "Sausage, Egg & Cheese", price: "$7.50", description: "Farm-fresh eggs and sharp cheddar", category: "Breakfast Sandwiches", image: "/images/sausage_sandwich.png" },
      { name: "The Veggie Morning", price: "$8.25", description: "Avocado, spinach, tomato, and egg", category: "Breakfast Sandwiches", image: "/images/breakfast_sandwich.png" },
      { name: "Daily Grind Special", price: "$9.00", description: "Double meat, double cheese, toasted bagel", category: "Breakfast Sandwiches", image: "/images/breakfast_sandwich.png" }
    ]
  },
  {
    name: "Pastries & Sweets",
    image: "/images/pastries.png",
    items: [
      { name: "Butter Croissant", price: "$3.75", category: "Pastries & Sweets", image: "/images/pastries.png" },
      { name: "Almond Danishes", price: "$4.25", category: "Pastries & Sweets", image: "/images/pastries.png" },
      { name: "Blueberry Muffin", price: "$3.50", category: "Pastries & Sweets", image: "/images/blueberry_muffin.png" },
      { name: "Weekly Scone", price: "$3.75", category: "Pastries & Sweets", image: "/images/blueberry_muffin.png" },
      { name: "Chocolate Chip Cookie", price: "$2.50", category: "Pastries & Sweets", image: "/images/cookies.png" }
    ]
  }
];
