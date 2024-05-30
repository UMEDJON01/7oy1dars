// style
import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <a
          href="https://www.instagram.com/umedjon_mamadaminov?igsh=MTIxbHlodmc2dWthMw=="
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >           
          <FiInstagram /> Mamadaminov_Umedjon
        </a>
        <br />
        <a
          href="https://t.me/Mamadaminov_U"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram /> Mamadaminov_U
        </a>
      </div>
    </div>
  );
}

export default Footer;
