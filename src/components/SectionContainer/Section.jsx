import PropTypes from 'prop-types';
import ProductCard from '../ProductCardContainer/ProductCard';
import { sectionContainerStyles, productGridStyles } from './styles';

const Section = ({ products, addToCart }) => {
  return (
    <div style={sectionContainerStyles}>
      <div style={productGridStyles}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

Section.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Section;
