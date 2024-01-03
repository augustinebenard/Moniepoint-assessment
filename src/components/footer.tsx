import ellipse from '../assets/icons/ellipse.svg';
import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import youtube from '../assets/icons/youtube.svg';
import arrow from '../assets/icons/down-arrow.svg';
const Footer = () => {
  return (
    <>
          <footer className='px-4 py-4'>
      <div className="flex items-center justify-between">
        <div className="footer-left">
          <img src={ellipse} alt="ellipse" />
          <p>Your Smile, Our Passion</p>
        </div>
        <div className="footer-right">
          <div className="flex gap-3 footer-right_socials">
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
            <img src={facebook} alt="facebook" />
          </div>
          <p className="mt-2">Best Startup Of 2023</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={arrow} alt="down-arrow" />
      </div>
      </footer>
    </>
  );
};

export default Footer;
