import Caleb from '../../assets/caleb.svg';
import Crown from '../../assets/crown.svg';
import Legacy from '../../assets/legacy.svg';
import Pngtree from '../../assets/pngtree.svg';
import './TrustedSection.css';

const TrustedSection = () => (
  <section className="trusted">
    <h2>Trusted by over 20 Schools</h2>
    <div className="schools">
      <div className="school-image__text">
        <img src={Caleb} alt="" />
        <div>Caleb International School</div>
      </div>
      <div className="school-image__text">
        <img src={Crown} alt="" />
        <div>Crowns Gate School</div>
      </div>
      <div className="school-image__text">
        <img src={Legacy} alt="" />
        <div>Legacy Schools</div>
      </div>
      <div className="school-image__text">
        <img src={Pngtree} alt="" />
        <div>Anita College</div>
      </div>
    </div>
  </section>
);

export default TrustedSection;
