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

const productsData = [
  { id: 1, image: './src/assets/images/menuPage/burgerDreams.png', name: 'Burger Dreams', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 29.99 },
  { id: 2, image: './src/assets/images/menuPage/burgerCali.png', name: 'Burger Cali', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 19.99 },
  { id: 3, image: './src/assets/images/menuPage/burgerSpicy.png', name: 'Burger Spicy', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 39.99 },
  { id: 4, image: './src/assets/images/menuPage/burgerWaldo.png', name: 'Burger Waldo', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 24.99 },
  { id: 5, image: './src/assets/images/menuPage/burgerBaconBaddy.png', name: 'Burger Bacon Buddy', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 44.99 },
  { id: 6, image: './src/assets/images/menuPage/burgerClassic.png', name: 'Burger Classic', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 34.99 },
];

const MenuPage = () => {
  const [selectedSection, setSelectedSection] = useState('Home');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevItems, { ...product }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
            <div style={menuDescribe}>
              <h1 style={hMenu}>Browse our menu</h1>
              <div>
                <p style={pMenu}>
                  Use our menu to place an order online, or{' '}
                  <span
                    style={phoneTooltip}
                    onMouseEnter={() => setIsTooltipVisible(true)}
                    onMouseLeave={() => setIsTooltipVisible(false)}
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
                {['Desert', 'Dinner', 'Breakfast'].map((filter) => (
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
            <div>Something went wrong!</div>
          </div>
        );
    }
  };

  return (
    <>
      <Header setSelectedSection={setSelectedSection} selectedSection={selectedSection} toggleCart={toggleCartVisibility} cartItemCount={cartItems.length}/>
      <main style={{backgroundColor: '#F5FBFC'}}>{renderContent()}</main>
      <Footer />
    </>
  );
};

export default MenuPage;
