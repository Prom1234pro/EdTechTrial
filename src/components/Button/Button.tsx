import { FC } from 'react';
import './Button.css';
import ArrowRightDark from '../../assets/arrow-right-dark.svg';
import ArrowRightLight from '../../assets/arrow-right-light.svg';

interface ButtonTrialProps {
  variant: 'light' | 'dark';
  text: string;
}

const ButtonTrial: FC<ButtonTrialProps> = ({ variant, text }) => {
  const arrowSrc = variant === 'light' ? ArrowRightLight : ArrowRightDark;

  return (
    <div className={`button ${variant}`}>
      <button className={`btn ${variant}`}>{text}</button>
      <img src={arrowSrc} alt={`${variant} arrow`} className="arrow-icon" />
    </div>
  );
};

export default ButtonTrial;
