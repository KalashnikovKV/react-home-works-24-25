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
  spanFooterSign,
} from './styles';

const companyLinks = [
  { text: 'Home', href: 'https://www.google.com/' },
  { text: 'Order', href: 'https://www.google.com/' },
  { text: 'FAQ', href: 'https://www.google.com/' },
  { text: 'Contact', href: 'https://www.google.com/' },
];

const templateLinks = [
  { text: 'Style Guide', href: 'https://www.google.com/' },
  { text: 'Changelog', href: 'https://www.google.com/' },
  { text: 'Licence', href: 'https://www.google.com/' },
  { text: 'Webflow University', href: 'https://www.google.com/' },
];

const flowbaseLinks = [{ text: 'More Cloneables', href: 'https://www.google.com/' }];

const socialIcons = [
  { src: './src/assets/icons/footer/inst.png', alt: 'Instagram', href: '/' },
  { src: './src/assets/icons/footer/twitter.png', alt: 'Twitter', href: '/' },
  { src: './src/assets/icons/footer/youtube.png', alt: 'YouTube', href: '/' },
];

const Footer = () => (
  <footer style={footer}>
    <div style={footerContainer}>
      <div style={footerLeft}>
        <div style={logo}>
          <img style={logoIcon} src="./src/assets/icons/header/logo.png" alt="Logo" />
        </div>
        <p>Takeaway & Delivery template for small - medium businesses.</p>
      </div>
      <div style={footerRight}>
        {[
          { name: 'COMPANY', links: companyLinks },
          { name: 'TEMPLATE', links: templateLinks },
          { name: 'FLOWBASE', links: flowbaseLinks },
        ].map((column) => (
          <div key={column.name} style={footerColumn}>
            <h4 style={footerColumnName}>{column.name}</h4>
            <ul style={footerColumnList}>
              {column.links.map(({ text, href }) => (
                <li key={text} style={footerColumnListLi}>
                  <a href={href} style={footerLink}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div style={footerSign}>
      <span style={spanFooterSign}>
        Built by <p style={pFooterSign}>Flowbase ·</p> Powered by <p style={pFooterSign}>Webflow</p>
      </span>
      <ul style={footerIconLinkContainer}>
        {socialIcons.map(({ src, alt, href }) => (
          <li key={alt} style={footerIconLinkContainer}>
            <a href={href} style={footerIconLink}>
              <img style={footerIcon} src={src} alt={alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
