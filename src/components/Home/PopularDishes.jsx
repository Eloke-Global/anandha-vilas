import { useRef, useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const dishes = [
  { name: 'Rasam', ingredients: 'Basil' },
  { name: 'Nandu Rasam', ingredients: 'Cheese, Capsicum, Basil' },
  { name: 'Chicken Uppu Kari', ingredients: 'Cucumber, Mushroom, Basil' },
  { name: 'Mutton Nalli Fry', ingredients: 'Mushroom, Parmesan, Paneer' },
  { name: 'Nalli', ingredients: 'Capsicum, Cucumber' },
  { name: 'Nalli', ingredients: 'Capsicum, Cucumber' },
  { name: 'Nalli', ingredients: 'Capsicum, Cucumber' },
  { name: 'Nalli', ingredients: 'Capsicum, Cucumber' },
  { name: 'Nalli', ingredients: 'Capsicum, Cucumber' },
];

const PopularDishes = () => {
  const carouselRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => carousel.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <div className="w-full relative">
        <h2 className="text-center font-bold text-2xl mb-4">POPULAR DISHES</h2>
        <div className="relative overflow-hidden">
            <div 
            ref={carouselRef} 
            className="flex overflow-x-auto whitespace-nowrap scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {dishes.map((dish, index) => (
                    <div key={index} className="inline-block mr-4 w-64 flex-shrink-0">
                    <img src={`/api/placeholder/256/192?text=${dish.name}`} alt={dish.name} className="w-full h-48 object-cover mb-2 rounded" />
                    <h3 className="font-semibold">{dish.name}</h3>
                    <p className="text-sm text-gray-600">{dish.ingredients}</p>
                    </div>
                ))}
            </div>
            {showLeftButton && (
            <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                {/* <ChevronLeft size={24} /> */}
            </button>
            )}
            {showRightButton && (
            <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                {/* <ChevronRight size={24} /> */}
            </button>
            )}
        </div>
    </div>
  );
};

export default PopularDishes;