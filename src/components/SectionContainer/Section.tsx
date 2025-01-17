import { useState, useEffect } from "react";
import ProductCard from "../ProductCardContainer/ProductCard";
import Button from "../ButtonComponent/Button";
import useMeals from "../../hooks/useMeals";
import {
  productGridStyles,
  sectionButtonStyles,
  sectionContainerStyles,
} from "./styles";
import { Product } from "../../utils/types";

interface SectionProps {
  selectedFilter?: string;
}

const Section: React.FC<SectionProps> = ({ selectedFilter }) => {
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
          <ProductCard key={product.id} product={product} />
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
