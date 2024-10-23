import ButtonTrial from '../../components/Button/Button.tsx';
import DashboardSvg from '../../assets/dashboard.svg';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <p>Start managing your school finances today</p>
    <h1>Simplify school finances with our all-in-one management platform.</h1>
    <h3>
      Gain full control over income and expenses processes - all from one
      seamless platform designed for schools
    </h3>
    <ButtonTrial variant="light" text="Start 30 days free trial" />
    <img className="dashboard-svg" src={DashboardSvg} alt="" />
  </section>
);

export default Hero;
