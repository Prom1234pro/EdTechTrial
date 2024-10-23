import './HowItWorks.css';

const HowItWorks = () => (
  <section className="how-it-works">
    <h2 className="title">How It Works</h2>
    <p className="subtitle">
      Manage Your School’s Income And Expenses In Just A Few Simple Steps
    </p>
    <ol className="steps">
      <li className="step-item">
        <div className="circle odd one">1</div>
        <h4>Set Up Your Account</h4>
        <p>
          Quickly sign up, input your school’s basic details, and pay
          subscription to get started with our financial management tool.
        </p>
      </li>
      <li className="step-item">
        <div className="circle even">2</div>
        <h4>Profile Setup</h4>
        <p>
          Complete additional profile information, such as uploading a school
          logo and inputting basic details and school fees.
        </p>
      </li>
      <li className="step-item">
        <div className="circle odd three">3</div>
        <h4>Add Necessary Details</h4>
        <p>
          Enter student information, class information, and staff details;
          including payment schedules and bank details.
        </p>
      </li>
      <li className="step-item">
        <div className="circle even">4</div>
        <h4>Fund Your Wallet</h4>
        <p>
          Deposit the necessary funds into the secure platform wallet to cover
          salary payments.
        </p>
      </li>
    </ol>
  </section>
);

export default HowItWorks;
