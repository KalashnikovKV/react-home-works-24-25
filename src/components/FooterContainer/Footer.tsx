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
} from "./styles";

const companyLinks = [
  { text: "Home", href: "https://www.google.com/" },
  { text: "Order", href: "https://www.google.com/" },
  { text: "FAQ", href: "https://www.google.com/" },
  { text: "Contact", href: "https://www.google.com/" },
];

const templateLinks = [
  { text: "Style Guide", href: "https://www.google.com/" },
  { text: "Changelog", href: "https://www.google.com/" },
  { text: "Licence", href: "https://www.google.com/" },
  { text: "Webflow University", href: "https://www.google.com/" },
];

const flowbaseLinks = [
  { text: "More Cloneables", href: "https://www.google.com/" },
];

const socialIcons = [
  { src: "./src/assets/icons/footer/inst.png", alt: "Instagram", href: "/" },
  { src: "./src/assets/icons/footer/twitter.png", alt: "Twitter", href: "/" },
  { src: "./src/assets/icons/footer/youtube.png", alt: "YouTube", href: "/" },
];

const Footer = () => (
  <footer style={footer as React.CSSProperties}>
    <div style={footerContainer as React.CSSProperties}>
      <div style={footerLeft as React.CSSProperties}>
        <div style={logo as React.CSSProperties}>
          <img
            style={logoIcon as React.CSSProperties}
            src="./src/assets/icons/header/logo.png"
            alt="Logo"
          />
        </div>
        <p>Takeaway & Delivery template for small - medium businesses.</p>
      </div>
      <div style={footerRight as React.CSSProperties}>
        {[
          { name: "COMPANY", links: companyLinks },
          { name: "TEMPLATE", links: templateLinks },
          { name: "FLOWBASE", links: flowbaseLinks },
        ].map((column) => (
          <div key={column.name} style={footerColumn as React.CSSProperties}>
            <h4 style={footerColumnName as React.CSSProperties}>
              {column.name}
            </h4>
            <ul style={footerColumnList as React.CSSProperties}>
              {column.links.map(({ text, href }) => (
                <li
                  key={text}
                  style={footerColumnListLi as React.CSSProperties}
                >
                  <a href={href} style={footerLink as React.CSSProperties}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div style={footerSign as React.CSSProperties}>
      <span style={spanFooterSign as React.CSSProperties}>
        Built by <p style={pFooterSign as React.CSSProperties}>Flowbase ·</p>{" "}
        Powered by <p style={pFooterSign as React.CSSProperties}>Webflow</p>
      </span>
      <ul style={footerIconLinkContainer as React.CSSProperties}>
        {socialIcons.map(({ src, alt, href }) => (
          <li key={alt} style={footerIconLinkContainer as React.CSSProperties}>
            <a href={href} style={footerIconLink as React.CSSProperties}>
              <img
                style={footerIcon as React.CSSProperties}
                src={src}
                alt={alt}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
