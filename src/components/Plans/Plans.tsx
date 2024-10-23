import ButtonTrial from '../Button/Button';
import './Plans.css';

const Plans = () => (
  <section id="plans" className="plans">
    <h2>Affordable plans for school’s needs</h2>
    <p>Choose the best plan for your school’s needs and budget</p>
    <div className="plan-cards">
      <div className="plan-card">
        <h4>Monthly plan</h4>
        <p>Perfect for small school or short-term needs</p>
        <div>
          <h4>N 5000</h4>
          <span>Per month</span>
        </div>
        <ButtonTrial variant="dark" text="Start 30 days free trial" />
      </div>
      <div className="middle">
        <div className="plan-card card-quarterly">
          <h4>Quarterly plan</h4>
          <p>Opt for termly billing to save more.</p>
          <div>
            <h4>N 30000</h4>
            <span>Quaterly</span>
          </div>
        </div>
        <div className="bottom-cover">
          <button className="btn-save">Save 20% a year</button>
          <ButtonTrial variant="dark" text="Start 30 days free trial" />
        </div>
      </div>
      <div className="plan-card">
        <h4>Yearly plan</h4>
        <p>Our best value for schools looking for long term solutions</p>
        <div>
          <h4>N 60000</h4>
          <span>Per year</span>
        </div>
        <ButtonTrial variant="dark" text="Start 30 days free trial" />
      </div>
    </div>
  </section>
);

export default Plans;
