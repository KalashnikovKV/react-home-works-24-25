import { Component } from 'react';
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

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: 'Home',
      selectedFilter: null,
      cartItems: [],
      isCartVisible: false,
      isTooltipVisible: false,
    };
  }

  addToCart = (product) => {
    this.setState((prevState) => {
      const existingItem = prevState.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cartItems: prevState.cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
          ),
        };
      }
      return { cartItems: [...prevState.cartItems, { ...product }] };
    });
  };

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => item.id !== id),
    }));
  };

  toggleCartVisibility = () => {
    this.setState((prevState) => ({ isCartVisible: !prevState.isCartVisible }));
  };

  setSelectedSection = (section) => {
    this.setState({ selectedSection: section });
  };

  setSelectedFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  toggleTooltipVisibility = () => {
    this.setState((prevState) => ({ isTooltipVisible: !prevState.isTooltipVisible }));
  };

  renderContent = () => {
    const { isCartVisible, selectedSection, selectedFilter, isTooltipVisible } = this.state;

    if (isCartVisible) {
      return <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />;
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
                    onMouseEnter={this.toggleTooltipVisibility}
                    onMouseLeave={this.toggleTooltipVisibility}
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
                    onClick={() => this.setSelectedFilter(filter)}
                  />
                ))}
              </div>
            </div>
            <Section addToCart={this.addToCart} />
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

  render() {
    const { selectedSection, cartItems } = this.state;

    return (
      <>
        <Header
          setSelectedSection={this.setSelectedSection}
          selectedSection={selectedSection}
          toggleCart={this.toggleCartVisibility}
          cartItemCount={cartItems.length}
        />
        <main style={{ backgroundColor: '#F5FBFC' }}>{this.renderContent()}</main>
        <Footer />
      </>
    );
  }
}

export default MenuPage;
