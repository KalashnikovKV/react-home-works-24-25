import { useState } from 'react';
import Header from '../HeaderContainer/Header';
import Footer from '../FooterContainer/Footer';
import Section from '../SectionContainer/Section';
import Cart from '../CartContainer/Cart';
import {
  phoneTooltip,
  containerMenu,
  phoneTooltipHover,
  menuPageButtons,
  menuPageFilterButtons,
  menuDescribe,
  hMenu,
  pMenu,
  menuPageFilterButtonsContainer,
} from './styles';
import Button from '../ButtonComponent/Button';

const MenuPage = () => {
  const [selectedSection, setSelectedSection] = useState('Home');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevCartItems, { ...product }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prevVisibility) => !prevVisibility);
  };

  const toggleTooltipVisibility = () => {
    setIsTooltipVisible((prevVisibility) => !prevVisibility);
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
            <div style={menuDescribe}>
              <h1 style={hMenu}>Browse our menu</h1>
              <div>
                <p style={pMenu}>
                  Use our menu to place an order online, or{' '}
                  <span
                    style={phoneTooltip}
                    onMouseEnter={toggleTooltipVisibility}
                    onMouseLeave={toggleTooltipVisibility}
                  >
                    phone
                    {isTooltipVisible && <span style={phoneTooltipHover}>123-456-7890</span>}
                  </span>{' '}
                  our store to place a pickup order. Fast and fresh food.
                </p>
              </div>
            </div>
            <div style={menuPageFilterButtonsContainer}>
              <div style={menuPageFilterButtons}>
                {['Dessert', 'Dinner', 'Breakfast'].map((filter) => (
                  <Button
                    key={filter}
                    text={filter}
                    style={{
                      ...menuPageButtons,
                      backgroundColor: selectedFilter === filter ? '#35B8BE' : menuPageButtons.backgroundColor,
                      color: selectedFilter === filter ? '#FFF' : menuPageButtons.color,
                    }}
                    onClick={() => setSelectedFilter(filter)}
                  />
                ))}
              </div>
            </div>
            <Section addToCart={addToCart} selectedFilter={selectedFilter} />
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
            <div>Something went wrong!</div>
          </div>
        );
    }
  };

  return (
    <>
      <Header
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
        toggleCart={toggleCartVisibility}
        cartItemCount={cartItems.length}
      />
      <main style={{ backgroundColor: '#F5FBFC' }}>{renderContent()}</main>
      <Footer />
    </>
  );
};

export default MenuPage;
