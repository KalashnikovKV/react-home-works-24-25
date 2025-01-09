import { useState, useEffect } from "react";
import ProductCard from "../ProductCardContainer/ProductCard";
import Button from "../ButtonComponent/Button";
import useMeals from "../../hooks/useMeals";
import {
  productGridStyles,
  sectionButtonStyles,
  sectionContainerStyles,
} from "./styles";

interface Product {
  id: number;
  img: string;
  meal: string;
  instructions: string;
  price: number;
  description?: string;
  quantity?: number;
  category?: string | null;
}

interface SectionProps {
  addToCart: (product: Product) => void;
  selectedFilter?: string;
}

const Section: React.FC<SectionProps> = ({ addToCart, selectedFilter }) => {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [filteredMeals, setFilteredMeals] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const { meals, loading, error } = useMeals();

  useEffect(() => {
    const updatedFilteredMeals = !selectedFilter
      ? meals
      : meals.filter((meal) => meal.category === selectedFilter);

    setFilteredMeals(updatedFilteredMeals);
    setCurrentPage(1);
  }, [meals, selectedFilter]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const newProducts = filteredMeals.slice(
      startIndex,
      startIndex + productsPerPage
    );
    setDisplayedProducts((prevProducts) =>
      currentPage === 1 ? newProducts : [...prevProducts, ...newProducts]
    );
  }, [filteredMeals, currentPage]);

  const handleSeeMoreClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={sectionContainerStyles}>
      <div style={productGridStyles}>
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {displayedProducts.length < filteredMeals.length && (
        <Button
          text="See more"
          onClick={handleSeeMoreClick}
          style={sectionButtonStyles}
        />
      )}
    </div>
  );
};

export default Section;
