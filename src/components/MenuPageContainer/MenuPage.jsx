import  { useState } from 'react';
import Header from '../HeaderContainer/Header';
import Footer from '../FooterContainer/Footer';
import Section from '../SectionContainer/Section';
import Cart from '../CartContainer/Cart';
import {phoneTooltip,containerMenu,phoneTooltipHover} from './styles'

const productsData = [
  { id: 1, image: 'https://via.placeholder.com/150', name: 'Burger Dreams', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 29.99 },
  { id: 2, image: 'https://via.placeholder.com/150', name: 'Burger Cali', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 19.99 },
  { id: 3, image: 'https://via.placeholder.com/150', name: 'Burger Spicy', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 39.99 },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Burger Waldo', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 24.99 },
  { id: 5, image: 'https://via.placeholder.com/150', name: 'Burger Bacon Buddy', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 44.99 },
  { id: 6, image: 'https://via.placeholder.com/150', name: 'Burger Classic', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 34.99 },
];

const MenuPage = () => {
  const [selectedSection, setSelectedSection] = useState('Home');
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevItems, { ...product }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const renderContent = () => {
    if (isCartVisible) {
      return <Cart cartItems={cartItems} removeFromCart={removeFromCart} />;
    }
    switch (selectedSection) {
      case 'Home':
        return (
          <div style={containerMenu}>
            <div>Welcome to the Home Page!</div>
          </div>
        );
      case 'Menu':
        return (
          <div style={containerMenu}>
            <div>
              <p>
                Use our menu to place an order online, or{' '}
                <span
                  style={phoneTooltip}
                  onMouseEnter={() => setIsTooltipVisible(true)}
                  onMouseLeave={() => setIsTooltipVisible(false)}
                >
                  phone
                  {isTooltipVisible && (
                    <span style={phoneTooltipHover}>123-456-7890</span>
                  )}
                </span>{' '}
                our store to place a pickup order. Fast and fresh food.
              </p>
            </div>
            <h1>Browse our menu</h1>
            <Section products={productsData} addToCart={addToCart} />
          </div>
        );
      case 'Company':
        return (
          <div style={containerMenu}>
            <div>Welcome to the Company Page!</div>
          </div>
        );
      case 'Login':
        return (
          <div style={containerMenu}>
            <div>Welcome to the Login Page!</div>
          </div>
        );
      default:
        return (
          <div style={containerMenu}>
            <div>Something went wrong (:</div>
          </div>
        );

    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header setSelectedSection={setSelectedSection} toggleCart={toggleCartVisibility} cartItemCount={cartItems.length} />
      <main style={{ flex: 1 }}>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
