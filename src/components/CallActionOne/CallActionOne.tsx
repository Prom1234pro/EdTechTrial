import { FC } from 'react';
import IncomeReport from '../../assets/income-report.svg';
import Circle from '../../assets/circle.svg';
import './CallActionOne.css';

const CallActionOne: FC = () => (
  <section className="callactionone">
    <div className="action-left">
      <h2>Manage School Finances More Efficiently With Edudesks</h2>
      <p>
        EduDesks is your comprehensive solution for seamless school financial
        management. Designed to simplify budgeting, tracking expenses, and
        managing payments, with features like automated fee collection, detailed
        financial reports, and real-time analytics, you can gain better control
        over your institution's finances
      </p>
    </div>
    <div className="action-right">
      <img className="circle-img" src={Circle} alt="" />
      <img src={IncomeReport} alt="" />
    </div>
  </section>
);

export default CallActionOne;
