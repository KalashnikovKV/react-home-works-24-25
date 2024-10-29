import {
  footerStyles,
  footerLeftStyles,
  footerRightStyles,
  footerColumnStyles,
  footerColumnListStyles,
  footerLinkStyles,
} from './styles';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={footerLeftStyles}>
        <div>Logo</div>
        <p>Takeaway & Delivery template for small - medium businesses.</p>
      </div>
      <div style={footerRightStyles}>
        <div style={footerColumnStyles}>
          <h4>company</h4>
          <ul style={footerColumnListStyles}>
            <li><a href="/" style={footerLinkStyles}>Home</a></li>
            <li><a href="/" style={footerLinkStyles}>Order</a></li>
            <li><a href="/" style={footerLinkStyles}>FAQ</a></li>
            <li><a href="/" style={footerLinkStyles}>Contact</a></li>
          </ul>
        </div>
        <div style={footerColumnStyles}>
          <h4>TEMPLATE</h4>
          <ul style={footerColumnListStyles}>
            <li><a href="/" style={footerLinkStyles}>Style Guide</a></li>
            <li><a href="/" style={footerLinkStyles}>Changelog</a></li>
            <li><a href="/" style={footerLinkStyles}>Licence</a></li>
            <li><a href="/" style={footerLinkStyles}>Webflow University</a></li>
          </ul>
        </div>
        <div style={footerColumnStyles}>
          <h4>FLOWBASE</h4>
          <ul style={footerColumnListStyles}>
            <li><a href="/" style={footerLinkStyles}>More Cloneables</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
