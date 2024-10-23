import { FC } from 'react';
import Wallet from '../../assets/wallet.svg';
import Expense from '../../assets/expense.svg';
import SchoolFees from '../../assets/school-fees.svg';
import Performance from '../../assets/performance.svg';
import Income from '../../assets/income.svg';
import Bill from '../../assets/bill.svg';
import './Features.css';

const Features: FC = () => (
  <section id="features" className="features">
    <h2>Comprehensive Features to Manage Your School’s Finances</h2>
    <p>
      Streamline Your School's Financial Operations By Efficiently Managing
      Salary Payments And Expenses.
    </p>
    <div className="image-block">
      <div className="block-section__one">
        <div className="block">
          <div>
            <img src={Bill} alt="" />
            <h2>Secured Wallet Management</h2>
          </div>
          <p>
            Access a secure wallet to handle payments for salaries and expenses
            without any hassle
          </p>
          <img src={Wallet} alt="" />
        </div>
        <div className="block">
          <div>
            <img src={Bill} alt="" />
            <h2>Expense Tracking Made Simple</h2>
          </div>
          <p>
            Monitor and track all school-related expenses with a streamlined
            payment system
          </p>
          <img src={Expense} alt="" />
        </div>
        <div className="block">
          <div>
            <img src={Bill} alt="" />
            <h2>Effortless School fees tracking</h2>
          </div>
          <p>
            With our platform, schools can effortlessly monitor fee payments.
          </p>
          <img src={SchoolFees} alt="" />
        </div>
      </div>
      <div className="block-section__two">
        <div className="block">
          <div>
            <img src={Bill} alt="" />
            <h2>Effortless Income tracking</h2>
          </div>
          <p>
            Our platform provides a clear and detailed view of your earnings,
            helping you monitor every income stream effortlessly.
          </p>
          <img src={Income} alt="" />
        </div>
        <div className="block">
          <div>
            <img src={Bill} alt="" />
            <h2>Monitor Overall performance</h2>
          </div>
          <p>
            Edudesk helps you turn data into actionable information, helping you
            track performance.
          </p>
          <img src={Performance} alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default Features;
