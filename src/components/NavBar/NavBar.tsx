import { FC } from 'react';
import './NavBar.css';
import ButtonTrial from '../../components/Button/Button.tsx';
import Logo from '../../assets/logo.svg';
import ArrowRight from '../../assets/arrow-right-dark.svg';

const Navbar: FC = () => (
  <div className="nav-wrapper">
    <div className="top-page">
      <p className="top-page__text">Buy Now And Save 20% Off Plan</p>
      <a href="#pricing" className="top-page__pricing">
        See Plans and Pricing
      </a>
    </div>
    <div className="nav-container">
      <nav className="navbar">
        <img src={Logo} alt="logo" />
        <ul className="nav-links">
          <li>
            <a href="#features">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#plans">Pricing</a>
          </li>
          <li>
            <a href="#faq">Contact us</a>
          </li>
        </ul>
        <div className="nav-actions">
          <div className="log-in">
            <a href="#take-control">Log in</a>
            <img src={ArrowRight} alt="arrow-right" />
          </div>
          <ButtonTrial variant="dark" text="Start 30 days free trial" />
        </div>
      </nav>
    </div>
  </div>
);

export default Navbar;
