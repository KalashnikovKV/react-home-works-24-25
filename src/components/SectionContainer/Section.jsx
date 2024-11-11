import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCardContainer/ProductCard';
import { sectionContainerStyles, productGridStyles, sectionButtonStyles } from './styles';
import Button from '../ButtonComponent/Button';
import useMeals from '../../hooks/useMeals';

const Section = ({ addToCart }) => {
  const { meals, loading, error } = useMeals();
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    if (meals.length) {
      const startIndex = (currentPage - 1) * productsPerPage;
      const newProducts = meals.slice(startIndex, startIndex + productsPerPage);
      setDisplayedProducts((prevProducts) => [...prevProducts, ...newProducts]);
    }
  }, [meals, currentPage]);

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
      {displayedProducts.length < meals.length && (
        <Button text="See more" onClick={handleSeeMoreClick} style={sectionButtonStyles} />
      )}
    </div>
  );
};

Section.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Section;
