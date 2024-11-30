import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCardContainer/ProductCard';
import { sectionContainerStyles, productGridStyles, sectionButtonStyles } from './styles';
import Button from '../ButtonComponent/Button';
import useMeals from '../../hooks/useMeals';

const Section = ({ addToCart, selectedFilter }) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
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
    const newProducts = filteredMeals.slice(startIndex, startIndex + productsPerPage);
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
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {displayedProducts.length < filteredMeals.length && (
        <Button text="See more" onClick={handleSeeMoreClick} style={sectionButtonStyles} />
      )}
    </div>
  );
};

Section.propTypes = {
  addToCart: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string,
};

export default Section;
