import * as React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FooterStyled from "./FooterStyled";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  return (
    <FooterStyled useBackground>
      <div className="copyright-links">
        <nav>
          <ul>
            <li>
              <Link to="http//">About</Link>
            </li>
            <li>
              <Link to="http//">Contact</Link>
            </li>
            <li>
              <Link to="http//">Terms Of Use</Link>
            </li>
            <li>
              <Link to="http//">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        <small>&copy; Your WebSite 2022. All Rights Reserved.</small>
      </div>
      <div className="social-midias">
        <span>
          <FacebookOutlinedIcon
            sx={{
              fontSize: "30px",
              color: "#3f93f3",
            }}
          />
        </span>
        <span>
          <InstagramIcon
            sx={{
              fontSize: "30px",
              color: "#3f93f3",
            }}
          />
        </span>
        <span>
          <TwitterIcon
            sx={{
              fontSize: "30px",
              color: "#3f93f3",
            }}
          />
        </span>
      </div>
    </FooterStyled>
  );
};

export default Footer;
