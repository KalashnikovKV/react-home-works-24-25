import {
  footer,
  footerContainer,
  footerLeft,
  footerRight,
  footerColumn,
  footerColumnList,
  footerLink,
  logo,
  logoIcon,
  footerColumnName,
  footerColumnListLi,
  footerIcon,
  footerIconLink,
  footerSign,
  footerIconLinkContainer,
  pFooterSign,
  spanFooterSign
} from './styles';

const Footer = () => {
  return (
    <footer style={footer}>
      <div style={footerContainer}>
        <div style={footerLeft}>
        <div style={logo}>
          <img style={logoIcon} src="./src/assets/icons/header/logo.png" alt="Logo" />
        </div>
          <p>Takeaway & Delivery template for small - medium businesses.</p>
        </div>
        <div style={footerRight}>
          <div style={footerColumn}>
            <h4 style={footerColumnName}>COMPANY</h4>
            <ul style={footerColumnList}>
              <li style={footerColumnListLi}><a href="/" style={footerLink}>Home</a></li>
              <li style={footerColumnListLi}><a href="/" style={footerLink}>Order</a></li>
              <li style={footerColumnListLi}><a href="/" style={footerLink}>FAQ</a></li>
              <li style={footerColumnListLi}><a href="/" style={footerLink}>Contact</a></li>
            </ul>
          </div>
          <div style={footerColumn}>
            <h4 style={footerColumnName}>TEMPLATE</h4>
            <ul style={footerColumnList}>
              <li style={footerColumnListLi}><a href="/" style={footerLink}>Style Guide</a></li>
              <li style={footerColumnListLi}><a href="/" style={footerLink}>Changelog</a></li>
              <li style={footerColumnListLi}><a href="/" style={footerLink}>Licence</a></li>
              <li style={footerColumnListLi}><a href="/" style={footerLink}>Webflow University</a></li>
            </ul>
          </div>
          <div style={footerColumn}>
            <h4 style={footerColumnName}>FLOWBASE</h4>
            <ul style={footerColumnList}>
              <li style={footerColumnListLi}><a href="/" style={footerLink}>More Cloneables</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div style={footerSign}>
        <span style={spanFooterSign}>Built by<p style={pFooterSign}>Flowbase ·</p >Powered by<p style={pFooterSign}>Webflow</p></span>
        <ul style={footerIconLinkContainer}>
          <li style={footerIconLinkContainer}><a href="/" style={footerIconLink}><img style={footerIcon} src="./src/assets/icons/footer/inst.png" alt="inst" /></a></li>
          <li style={footerIconLinkContainer}><a href="/" style={footerIconLink}><img style={footerIcon} src="./src/assets/icons/footer/twitter.png" alt="twitter" /></a></li>
          <li style={footerIconLinkContainer}><a href="/" style={footerIconLink}><img style={footerIcon} src="./src/assets/icons/footer/youtube.png" alt="youtube" /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;